import { BackendError } from "@/types/api";

import axios from "axios";

export interface ApiError {
  message: string;
  code: string;
  details: Record<string, string>;
  status: number | undefined;
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
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
