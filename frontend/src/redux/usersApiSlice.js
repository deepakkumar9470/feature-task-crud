import { apiSlice } from './apiSlice';
// const USERS_URL = '/api/user';
const AUTH_URL = process.env.REACT_API_URL

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) =>({
       login:builder.mutation({
        query:(data)=>({
            url : `${AUTH_URL}/api/user/login`,
            method : 'POST',
            body : data
        }),
       }),
       logout:builder.mutation({
        query:(data)=>({
            url : `${AUTH_URL}/api/user/logout`,
            method : 'POST',
        }),
       }),
       register:builder.mutation({
        query:(data)=>({
            url : `${AUTH_URL}/api/user/register`,
            method : 'POST',
            body : data
        }),
       }),
    }),
})

export const {useLoginMutation,useLogoutMutation,useRegisterMutation,useUpdateMutation} = userApiSlice