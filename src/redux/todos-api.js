import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63f3b110fe3b595e2ee798f2.mockapi.io/todos',
  }),
  tagTypes: ['todos'],
  endpoints: builder => ({
    getTodos: builder.query({ query: () => '', providesTags: ['todos'] }),

    updateTodo: builder.mutation({
      query: todo => ({
        method: 'PUT',
        url: `${todo.id}`,
        body: todo,
      }),
      invalidatesTags: ['todos'],
    }),

    deleteTodo: builder.mutation({
      query: id => ({
        method: 'DELETE',
        url: `${id}`,
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
