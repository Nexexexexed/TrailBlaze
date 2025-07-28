import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  credentials: "include", // чтобы рефреш-токен в куке отправлялся
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResult.data) {
      const newAccessToken = (refreshResult.data as any).accessToken;
      localStorage.setItem("accessToken", newAccessToken);

      result = await baseQuery(args, api, extraOptions);
    } else {
      //Здесь будет скам пользователя (выкинем его на помойку) и  логаут
    }
  }

  return result;
};
