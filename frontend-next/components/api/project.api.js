import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const ProjectApi = createApi({
    reducerPath: "projectApi",
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
    tagTypes: ['Projects', 'ProjectsList'],
    // Keep unused data for 10 minutes for better performance
    keepUnusedDataFor: 600,
    // Refetch on reconnect for better UX
    refetchOnReconnect: true,
    // Refetch on focus for fresh data when user returns
    refetchOnFocus: true,
    endpoints: (builder) => ({
        listAll: builder.query({
            query: ({ page = 1, limit = 10, search = '' }) => 
              `/projects?page=${page}&limit=${limit}&search=${search}`,
            providesTags: (result, error, { page, search }) => [
                { type: 'ProjectsList', id: `${page}-${search}` },
                'Projects'
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
        createProjects:builder.mutation({
            query:(formData)=> ({
                url: "/projects",
                body:formData,
                method:"POST",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Projects', 'ProjectsList'],
            // Optimistic update for better UX
            onQueryStarted: async (formData, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all list queries to refresh data
                    dispatch(ProjectApi.util.invalidateTags(['ProjectsList']));
                } catch {}
            },
        }),
        showById:builder.query({
            query:(id)=>`/projects/${id}`,
            providesTags: (result, error, id) => [
                { type: 'Projects', id }
            ],
            // Keep individual collection data for 15 minutes
            keepUnusedDataFor: 900,
            // Transform response to add metadata
            transformResponse: (response) => ({
                ...response,
                cachedAt: Date.now()
            }),
        }),
        updateProjects:builder.mutation({
            query:({id,payload})=> ({
                url: `/projects/${id}`,
                body:payload,
                method:"PUT",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Projects', id },
                'ProjectsList'
            ],
            // Optimistic update for better UX
            onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate specific collection and lists
                    dispatch(ProjectApi.util.invalidateTags([
                        { type: 'Projects', id },
                        'ProjectsList'
                    ]));
                } catch {}
            },
        }),
        deleteProjects:builder.mutation({
            query:(id)=>({
                url:`/projects/${id}`,
                method:"DELETE"
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Projects', id },
                'ProjectsList'
            ],
            // Optimistic update for better UX
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all related caches
                    dispatch(ProjectApi.util.invalidateTags([
                        { type: 'Projects', id },
                        'ProjectsList'
                    ]));
                } catch {}
            },
        }),
        // Add prefetch methods for better performance
        prefetchHome: builder.query({
            query: () => "/projects",
            keepUnusedDataFor: 1800,
            providesTags: [{ type: 'Projects', id: 'HOME_PREFETCH' }],
        }),

        prefetchProjects: builder.query({
            query: (id) => `/projects/${id}`,
            keepUnusedDataFor: 900,
            providesTags: (result, error, id) => [
                { type: 'Projects', id: `${id}_PREFETCH` }
            ],
        })
    })
})
export const { useListAllQuery, useCreateProjectsMutation, useShowByIdQuery, useUpdateProjectsMutation, useDeleteProjectsMutation, usePrefetchHomeQuery, usePrefetchProjectsQuery } = ProjectApi;

// Export utility functions for manual cache management
export const {
    prefetch,
    invalidateTags,
    updateQueryData
} = ProjectApi.util