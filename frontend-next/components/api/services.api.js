import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const ServicesApi = createApi({
    reducerPath: "servicesApi",
    baseQuery: fetchBaseQuery({
        baseUrl:process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem('_at') || null
            if(token){
                headers.set("Authorization", "Bearer "+token)
            }
            return headers;
        }
    }),
    tagTypes: ['Services', 'ServicesList'],
    // Keep unused data for 10 minutes for better performance
    keepUnusedDataFor: 600,
    // Refetch on reconnect for better UX
    refetchOnReconnect: true,
    // Refetch on focus for fresh data when user returns
    refetchOnFocus: true,
    endpoints: (builder) => ({
        listAll: builder.query({
            query: ({ page = 1, limit = 10, search = '' }) => 
              `/services?page=${page}&limit=${limit}&search=${search}`,
            providesTags: (result, error, { page, search }) => [
                { type: 'ServicesList', id: `${page}-${search}` },
                'Services'
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
        createServices:builder.mutation({
            query:(formData)=> ({
                url: "/services",
                body:formData,
                method:"POST",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Services', 'ServicesList'],
            // Optimistic update for better UX
            onQueryStarted: async (formData, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all list queries to refresh data
                    dispatch(ServicesApi.util.invalidateTags(['ServicesList']));
                } catch {}
            },
        }),
        showById:builder.query({
            query:(id)=>`/services/${id}`,
            providesTags: (result, error, id) => [
                { type: 'Services', id }
            ],
            // Keep individual collection data for 15 minutes
            keepUnusedDataFor: 900,
            // Transform response to add metadata
            transformResponse: (response) => ({
                ...response,
                cachedAt: Date.now()
            }),
        }),
        updateServices:builder.mutation({
            query:({id,payload})=> ({
                url: `/services/${id}`,
                body:payload,
                method:"PUT",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Services', id },
                'ServicesList'
            ],
            // Optimistic update for better UX
            onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate specific collection and lists
                    dispatch(ServicesApi.util.invalidateTags([
                        { type: 'Services', id },
                        'ServicesList'
                    ]));
                } catch {}
            },
        }),
        deleteServices:builder.mutation({
            query:(id)=>({
                url:`/services/${id}`,
                method:"DELETE"
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Services', id },
                'ServicesList'
            ],
            // Optimistic update for better UX
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all related caches
                    dispatch(ServicesApi.util.invalidateTags([
                        { type: 'Services', id },
                        'ServicesList'
                    ]));
                } catch {}
            },
        }),
        // Add prefetch methods for better performance
        prefetchHome: builder.query({
            query: () => "/services",
            keepUnusedDataFor: 1800,
            providesTags: [{ type: 'Services', id: 'HOME_PREFETCH' }],
        }),

        prefetchServices: builder.query({
            query: (id) => `/services/${id}`,
            keepUnusedDataFor: 900,
            providesTags: (result, error, id) => [
                { type: 'Services', id: `${id}_PREFETCH` }
            ],
        })
    })
})
export const { useListAllQuery, useCreateServicesMutation, useShowByIdQuery, useUpdateServicesMutation, useDeleteServicesMutation, usePrefetchHomeQuery, usePrefetchServicesQuery } = ServicesApi;

// Export utility functions for manual cache management
export const {
    prefetch,
    invalidateTags,
    updateQueryData
} = ServicesApi.util