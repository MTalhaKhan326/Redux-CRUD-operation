import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi =  createApi({
    reducerPath : 'postApi', // ya define karta ha rudux store cache ko kaha store karai ga
    baseQuery : fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints : (builder) => ({
        getAllPost: builder.query({
            query:()=>({
                url:'posts',
                method:'GET'
            })
        }),
        getPostById: builder.query({
            query:(id)=>({
                 url:`posts/${id}`,
                method:'GET'
            })
        }),
        getPostByLimit: builder.query({
            query:(num)=>({
                 url:`posts?_limit=${num}`,
                method:'GET'
            })
        }),
        deletePost: builder.mutation({
            query:(id)=>({
                url:`posts/${id}`,
               method:'DELETE'
           })
        }),
        createPost: builder.mutation({
            query:()=>({
                url:`posts`,
               method:'POSTS',
               body:{
                title: 'This is new title',
                body: 'this is new body',
                userId: 1,
              },
               headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
           })
        }),
    })
})
export const {useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery,
     useDeletePostMutation, useCreatePostMutation} = postApi