import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const bookApi = createApi({
    reducerPath : "bookApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://th0u305-library-management-api.vercel.app"
    }),
    tagTypes : ["allBooks","allBorrowedBooks"],
    endpoints : (builder) =>({
        getAllBooks : builder.query({
            query : ()=> "/api/books",
            providesTags : ["allBooks"]
        }),
        getSingleBook : builder.query({
            query : (bookId) =>({ 
                url :  `/api/books/${bookId}`,
            })
        }),
        editBookDetails : builder.mutation({
            query : ({_id, body})=> ({
                url : `/api/books/${_id}`,
                method : "PUT",
                body : body,
            }),
            invalidatesTags : ["allBooks"]
        }),
        addBook : builder.mutation({
            query : ({body})=> ({
                url : `/api/books`,
                method : "POST",
                body : body,
            }),
            invalidatesTags : ["allBooks"]
        }),
        deleteBook : builder.mutation({
            query : ({body})=> ({
                url : `/api/books/${body.id}`,
                method : "DELETE",
            }),
            invalidatesTags : ["allBooks"]
        }),
        getBorrowedBooks : builder.query({
            query : () =>"/api/borrow",
            providesTags : ["allBorrowedBooks"]
        }),
        borrowBooks : builder.mutation({
            query : ({body}) =>({
                url : "/api/borrow",
                method : "POST",
                body : body
            }),
            invalidatesTags : ["allBorrowedBooks"]
        }),
    })
})

export const {useGetAllBooksQuery, useGetSingleBookQuery, useGetBorrowedBooksQuery, useEditBookDetailsMutation, useAddBookMutation, useBorrowBooksMutation, useDeleteBookMutation} = bookApi