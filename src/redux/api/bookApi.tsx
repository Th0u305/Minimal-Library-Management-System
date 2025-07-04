import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const bookApi = createApi({
    reducerPath : "bookApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://th0u305-library-management-api.vercel.app"
    }),
    tagTypes : ["allBooks"],
    endpoints : (builder) =>({
        getAllBooks : builder.query({
            query : ()=> "/api/books"
        })
    })
})

export const {useGetAllBooksQuery} = bookApi