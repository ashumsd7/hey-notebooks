// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RhToast } from "@rhythm-ui/react";
import { formatErrResponse } from "../utils";
import qs from "qs";

// Define a service using a base URL and expected endpoints
// const { pathname } = useLocation();
export const sampleApi = createApi({
  reducerPath: "sampleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    // baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      if (localStorage.getItem("access")) {
        headers.set(
          "Authorization",
          `Bearer ${localStorage.getItem("access")}`
        );
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (params) => ({
        method: "get",
        url: "/posts/",
        params,
      }),
      providesTags: ["posts"],
      onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.catch((err) => {
          RhToast.error(formatErrResponse(err, true) || "Unable to fetch.");
        });
      },
    }),
    getSearchPosts: builder.query({
      query: (params) => ({
        method: "get",
        url: "/posts/search",
        params,
      }),
      providesTags: ["posts"],
      onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.catch((err) => {
          RhToast.error(formatErrResponse(err, true) || "Unable to fetch.");
        });
      },
    }),
    getPostTagsList: builder.query({
      query: (params) => ({
        method: "get",
        url: "/posts/tag-list/",
        params,
      }),
      providesTags: ["tags"],
      onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.catch((err) => {
          RhToast.error(formatErrResponse(err, true) || "Unable to fetch.");
        });
      },
    }),

    getPostByTag: builder.query({
      query: (tag) => ({
        method: "get",
        url: `/posts/tag/${tag}/`,
      }),
      providesTags: ["posts"],

      onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.catch(() => {});
      },
    }),
    getPostById: builder.query({
      query: (id) => ({
        method: "get",
        url: `/posts/${id}/`,
      }),
      providesTags: ["posts"],

      onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.catch(() => {});
      },
    }),
    getPostByComment: builder.query({
      query: (id) => ({
        method: "get",
        url: `/posts/${id}/comments`,
      }),
      providesTags: ["posts"],

      onQueryStarted(_, { queryFulfilled }) {
        queryFulfilled.catch(() => {});
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostsQuery,
  useGetSearchPostsQuery,
  useLazyGetSearchPostsQuery,
  useGetPostTagsListQuery,
  useGetPostByIdQuery,
  useGetPostByTagQuery,
  useLazyGetPostByTagQuery,
  useGetPostByCommentQuery,
} = sampleApi;
