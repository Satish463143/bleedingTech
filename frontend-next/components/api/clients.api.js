import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const ClientsApi = createApi({
    reducerPath: "clientsApi",
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
    tagTypes: ['Clients', 'ClientsList'],
    // Keep unused data for 10 minutes for better performance
    keepUnusedDataFor: 600,
    // Refetch on reconnect for better UX
    refetchOnReconnect: true,
    // Refetch on focus for fresh data when user returns
    refetchOnFocus: true,
    endpoints: (builder) => ({
        listAll: builder.query({
            query: ({ page = 1, limit = 10, search = '' }) => 
              `/clients?page=${page}&limit=${limit}&search=${search}`,
            providesTags: (result, error, { page, search }) => [
                { type: 'ClientsList', id: `${page}-${search}` },
                'Clients'
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
        createClients:builder.mutation({
            query:(formData)=> ({
                url: "/clients",
                body:formData,
                method:"POST",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: ['Clients', 'ClientsList'],
            // Optimistic update for better UX
            onQueryStarted: async (formData, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all list queries to refresh data
                    dispatch(ClientsApi.util.invalidateTags(['ClientsList']));
                } catch {}
            },
        }),
        showById:builder.query({
            query:(id)=>`/clients/${id}`,
            providesTags: (result, error, id) => [
                { type: 'Clients', id }
            ],
            // Keep individual collection data for 15 minutes
            keepUnusedDataFor: 900,
            // Transform response to add metadata
            transformResponse: (response) => ({
                ...response,
                cachedAt: Date.now()
            }),
        }),
        updateClients:builder.mutation({
            query:({id,payload})=> ({
                url: `/clients/${id}`,
                body:payload,
                method:"PUT",
                headers:()=>([
                    {"Content-Type":"multipart/form-data"}
                ])
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Clients', id },
                'ClientsList'
            ],
            // Optimistic update for better UX
            onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate specific collection and lists
                    dispatch(ClientsApi.util.invalidateTags([
                        { type: 'Clients', id },
                        'ClientsList'
                    ]));
                } catch {}
            },
        }),
        deleteClients:builder.mutation({
            query:(id)=>({
                url:`/clients/${id}`,
                method:"DELETE"
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Clients', id },
                'ClientsList'
            ],
            // Optimistic update for better UX
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all related caches
                    dispatch(ClientsApi.util.invalidateTags([
                        { type: 'Clients', id },
                        'ClientsList'
                    ]));
                } catch {}
            },
        }),
        // Add prefetch methods for better performance
        prefetchHome: builder.query({
            query: () => "/clients",
            keepUnusedDataFor: 1800,
            providesTags: [{ type: 'Clients', id: 'HOME_PREFETCH' }],
        }),

        prefetchClients: builder.query({
            query: (id) => `/clients/${id}`,
            keepUnusedDataFor: 900,
            providesTags: (result, error, id) => [
                { type: 'Clients', id: `${id}_PREFETCH` }
            ],
        })

    })
})
export const { useListAllQuery, useCreateClientsMutation, useShowByIdQuery, useUpdateClientsMutation, useDeleteClientsMutation, usePrefetchHomeQuery, usePrefetchClientsQuery } = ClientsApi;

// Export utility functions for manual cache management
export const {
    prefetch,
    invalidateTags,
    updateQueryData
} = ClientsApi.util