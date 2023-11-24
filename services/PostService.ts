import { IComment } from "@/models/IComment";
import { IPost } from "@/models/IPost";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], {limit: number, page: number}>({
            query: (query) => {
                const {limit, page} = query;
                return {
                    url: '/posts',
                    params: {
                        _limit: limit,
                        _page: page
                    }
                }
            },
            providesTags: ['Posts']
        }),
        getAllPosts: builder.query<IPost[], undefined>({
            query: () => ({
                url: '/posts'
            }),
            providesTags: ['Posts']
        }),
        getPost: builder.query<IPost, number>({
            query: (id) => ({
                url: `/posts/${id}`,
            }),
            providesTags: ['Posts']
        }),
        getComms: builder.query<IComment[], number>({
            query: (id) => ({
                url: `/posts/${id}/comments`,
            }),
            providesTags: ['Posts']
        })
    })
})