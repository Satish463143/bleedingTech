import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PageApi = createApi({
    reducerPath:"PageApi",
    baseQuery: fetchBaseQuery({
        baseUrl:import.meta.env.VITE_API_URL + "/page",
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem('_at') || null
            if(token){
                headers.set("Authorization", "Bearer "+token)
            }
        }
    }),
    tagTypes:['Page'],
    endpoints:(builder)=>({
        track:builder.mutation({
            query:(args)=>({
                url:'/track',                
                method:'POST',
                body:args,
                headers:()=>([
                    {"Content-Type":"application/json"}
                ]),
                providesTags:['Page']          
            })
            
        }),
        pageViews:builder.query({
            query:()=>"/page-views",
            providesTags:['Page']
        }),
        sessionDuration:builder.query({
            query:()=>"/session-duration",
            providesTags:['Page']
        }),
        topPages:builder.query({
            query:()=>"/top-pages",
            providesTags:['Page']
        }),
        visitorsOverview:builder.query({
            query:()=>"/visitors-overview",
            providesTags:['Page']
        }),
    })
})  

export const {useTrackMutation, usePageViewsQuery, useSessionDurationQuery, useTopPagesQuery, useVisitorsOverviewQuery} = PageApi