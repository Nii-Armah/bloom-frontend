import { BackendError } from "@/types/api";

import axios from "axios";
import Cookie from "js-cookie";

export interface ApiError {
  message: string;
  code: string;
  details: Record<string, string>;
  status: number | undefined;
}

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const backendResponse: BackendError = error.response?.data;

    const processedError: ApiError = {
      message:
        backendResponse?.error?.message || "An unexpected error occurred",
      code: backendResponse?.error?.code || "UNKNOWN_ERROR",
      details: backendResponse?.error?.details || {},
      status: error.response?.status,
    };

    return Promise.reject(processedError);
  },
);

apiClient.interceptors.request.use((config) => {
  const token = Cookie.get("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
