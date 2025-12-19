import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const TeamApi = createApi({
    reducerPath: "teamApi",
    baseQuery: fetchBaseQuery({
        baseUrl:process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders:(headers)=>{
            if (typeof window !== "undefined") {
                const token = localStorage.getItem("_at");
                if (token) {
                  headers.set("Authorization", `Bearer ${token}`);
                }
              }
            return headers;
        }
    }),
    tagTypes: ['Teams', 'TeamsList'],
    // Keep unused data for 10 minutes for better performance
    keepUnusedDataFor: 600,
    // Refetch on reconnect for better UX
    refetchOnReconnect: true,
    // Refetch on focus for fresh data when user returns
    refetchOnFocus: true,
    endpoints: (builder) => ({
        listAll: builder.query({
            query: ({ page = 1, limit = 10, search = '' }) => 
              `/teams?page=${page}&limit=${limit}&search=${search}`,
            providesTags: (result, error, { page, search }) => [
                { type: 'TeamsList', id: `${page}-${search}` },
                'Teams'
            ],
            // Keep paginated data for 5 minutes
            keepUnusedDataFor: 300,
            // Transform response to normalize data structure
            transformResponse: (response) => {
                return {
                    ...response,
                    // Add timestamp for cache validation
                    cachedAt: Date.now()
                };
            },
        }),
        createTeams:builder.mutation({
            query:(formData)=> ({
                url: "/teams",
                body:formData,
                method:"POST",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Teams', 'TeamsList'],
            // Optimistic update for better UX
            onQueryStarted: async (formData, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all list queries to refresh data
                    dispatch(TeamApi.util.invalidateTags(['TeamsList']));
                } catch {}
            },
        }),
        showById:builder.query({
            query:(id)=>`/teams/${id}`,
            providesTags: (result, error, id) => [
                { type: 'Teams', id }
            ],
            // Keep individual collection data for 15 minutes
            keepUnusedDataFor: 900,
            // Transform response to add metadata
            transformResponse: (response) => ({
                ...response,
                cachedAt: Date.now()
            }),
        }),
        updateTeams:builder.mutation({
            query:({id,payload})=> ({
                url: `/teams/${id}`,
                body:payload,
                method:"PUT",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Teams', id },
                'TeamsList'
            ],
            // Optimistic update for better UX
            onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate specific collection and lists
                    dispatch(TeamApi.util.invalidateTags([
                        { type: 'Teams', id },
                        'TeamsList'
                    ]));
                } catch {}
            },
        }),
        deleteTeams:builder.mutation({
            query:(id)=>({
                url:`/teams/${id}`,
                method:"DELETE"
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Teams', id },
                'TeamsList'
            ],
            // Optimistic update for better UX
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all related caches
                    dispatch(TeamApi.util.invalidateTags([
                        { type: 'Teams', id },
                        'TeamsList'
                    ]));
                } catch {}
            },
        }),
        // Add prefetch methods for better performance
        prefetchHome: builder.query({
            query: () => "/teams",
            keepUnusedDataFor: 1800,
            providesTags: [{ type: 'Teams', id: 'HOME_PREFETCH' }],
        }),

        prefetchProjects: builder.query({
            query: (id) => `/teams/${id}`,
            keepUnusedDataFor: 900,
            providesTags: (result, error, id) => [
                { type: 'Teams', id: `${id}_PREFETCH` }
            ],
        })
    })
})
export const { useListAllQuery, useCreateTeamsMutation, useShowByIdQuery, useUpdateTeamsMutation, useDeleteTeamsMutation, usePrefetchHomeQuery, usePrefetchTeamsQuery } = TeamApi;

// Export utility functions for manual cache management
export const {
    prefetch,
    invalidateTags,
    updateQueryData
} = TeamApi.util