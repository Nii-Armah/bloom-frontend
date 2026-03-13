"use client";

import { useState } from "react";

import {
  QueryClient,
  QueryClientProvider,
  MutationCache,
} from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { Notifications, notifications } from "@mantine/notifications";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // We use useState to ensure the QueryClient is only created once
  const [queryClient] = useState(
    () =>
      new QueryClient({
        mutationCache: new MutationCache({
          onError: (error: any) => {
            if (error.code !== "VALIDATION_ERROR") {
              notifications.show({
                title: error.code?.replace(/_/g, " ") || "Error",
                message: error.message || "Something went wrong",
                color: "red",
              });
            }
          },
        }),
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications position="top-right" zIndex={1000} />
        {children}
      </MantineProvider>
    </QueryClientProvider>
  );
}
