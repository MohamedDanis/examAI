import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';


const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000',
  credentials: 'include',
 });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  // it like a prent to other api
  // it a build in builder
  endpoints: (builder) => ({}),
});
