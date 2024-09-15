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
        }),
        createTas : builder.mutation({
            query :(newTask)=>({
             url:`/api/task/create`,
             method :'POST',
             body:newTask,
             headers :{
                'Content-type' : 'application/json',
             },
             credentials: 'include',
            })
        }),
        deleteTaskById : builder.mutation({
            query :(id)=>({
             url:`/api/task/${id}`,
             method :'DELETE',
             credentials: 'include',
            })
        })
    })
})

export const {useGetAllTasksQuery,useCreateTasMutation,useDeleteTaskByIdMutation} = taskApi;