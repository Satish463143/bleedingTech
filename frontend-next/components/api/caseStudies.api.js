import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const CaseStudiesApi = createApi({
    reducerPath: "caseStudiesApi",
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
    tagTypes: ['CaseStudies', 'CaseStudiesList'],
    // Keep unused data for 10 minutes for better performance
    keepUnusedDataFor: 600,
    // Refetch on reconnect for better UX
    refetchOnReconnect: true,
    // Refetch on focus for fresh data when user returns
    refetchOnFocus: true,
    endpoints: (builder) => ({
        listAll: builder.query({
            query: ({ page = 1, limit = 10, search = '' }) => 
              `/case-studies?page=${page}&limit=${limit}&search=${search}`,
            providesTags: (result, error, { page, search }) => [
                { type: 'CaseStudiesList', id: `${page}-${search}` },
                'CaseStudies'
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
        createCaseStudies:builder.mutation({
            query:(formData)=> ({
                url: "/case-studies",
                body:formData,
                method:"POST",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['CaseStudies', 'CaseStudiesList'],
            // Optimistic update for better UX
            onQueryStarted: async (formData, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all list queries to refresh data
                    dispatch(BlogApi.util.invalidateTags(['BlogList']));
                } catch {}
            },
        }),
        showById:builder.query({
            query:(id)=>`/case-studies/${id}`,
            providesTags: (result, error, id) => [
                { type: 'CaseStudies', id }
            ],
            // Keep individual collection data for 15 minutes
            keepUnusedDataFor: 900,
            // Transform response to add metadata
            transformResponse: (response) => ({
                ...response,
                cachedAt: Date.now()
            }),
        }),
        updateCaseStudies:builder.mutation({
            query:({id,payload})=> ({
                url: `/case-studies/${id}`,
                body:payload,
                method:"PUT",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'CaseStudies', id },
                'CaseStudiesList'
            ],
            // Optimistic update for better UX
            onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate specific collection and lists
                    dispatch(CaseStudiesApi.util.invalidateTags([
                        { type: 'CaseStudies', id },
                        'CaseStudiesList'
                    ]));
                } catch {}
            },
        }),
        deleteCaseStudies:builder.mutation({
            query:(id)=>({
                url:`/case-studies/${id}`,
                method:"DELETE"
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'CaseStudies', id },
                'CaseStudiesList'
            ],
            // Optimistic update for better UX
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all related caches
                    dispatch(CaseStudiesApi.util.invalidateTags([
                        { type: 'CaseStudies', id },
                        'CaseStudiesList'
                    ]));
                } catch {}
            },
        }),
        // Add prefetch methods for better performance
        prefetchHome: builder.query({
            query: () => "/case-studies",
            keepUnusedDataFor: 1800,
            providesTags: [{ type: 'CaseStudies', id: 'HOME_PREFETCH' }],
        }),

        prefetchCaseStudies: builder.query({
            query: (id) => `/case-studies/${id}`,
            keepUnusedDataFor: 900,
            providesTags: (result, error, id) => [
                { type: 'CaseStudies', id: `${id}_PREFETCH` }
            ],
        })

    })
})
export const { useListAllQuery, useCreateCaseStudiesMutation, useShowByIdQuery, useUpdateCaseStudiesMutation, useDeleteCaseStudiesMutation, usePrefetchHomeQuery, usePrefetchCaseStudiesQuery } = CaseStudiesApi;

// Export utility functions for manual cache management
export const {
    prefetch,
    invalidateTags,
    updateQueryData
} = CaseStudiesApi.util