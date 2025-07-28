import { createApi } from "@reduxjs/toolkit/query/react";
import type { User } from "../model/types";
import { baseQueryWithReauth } from "./reAuth";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<
      { accessToken: string },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    getProfile: builder.query<User, void>({
      query: () => "/profile",
    }),
  }),
});

export const { useLoginMutation, useGetProfileQuery } = userApi;
