import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const ContactApi = createApi({
    reducerPath: "contactApi",
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
    tagTypes: ['Contacts', 'ContactsList'],
    endpoints: (builder) => ({
        listAll: builder.query({
            query: ({ page = 1, limit = 10, search = '' }) => 
              `/contact?page=${page}&limit=${limit}&search=${search}`,
            providesTags: (result, error, { page, search }) => [
                { type: 'ContactsList', id: `${page}-${search}` },
                'Contacts'
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
        createContacts:builder.mutation({
            query:(formData)=> ({
                url: "/contact",
                body:formData,
                method:"POST"
            }),
            invalidatesTags: ['Contacts', 'ContactsList'],
            // Optimistic update for better UX
            onQueryStarted: async (formData, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Invalidate all list queries to refresh data
                    dispatch(ContactApi.util.invalidateTags(['ContactsList']));
                } catch {}
            },
        }),       
    })
})
export const { useListAllQuery, useCreateContactsMutation} = ContactApi;
