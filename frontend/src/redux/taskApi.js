import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const taskApi = createApi({
    reducerPath : 'taskapi',
    baseQuery :fetchBaseQuery({
        baseUrl : 'http://localhost:5000/'
    }),
    endpoints :(builder)=>({
        getAllTasks : builder.query({
            query :({userId})=>({
             url:`/api/task`,
             method :'GET',
             params :{ userId },
            })
        })
    })
})

export const {useGetAllTasksQuery} = taskApi;