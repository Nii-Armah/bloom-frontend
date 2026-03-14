import { ProfessionalService } from "@/api/Professional";
import { PaginatedResponse, ProfessionalData } from "@/types";

import { useRouter } from "next/navigation";

import { notifications } from "@mantine/notifications";
import { useMutation, useQuery } from "@tanstack/react-query";
import Cookie from "js-cookie";

export const useProfessionals = (page: number, size: number) => {
  return useQuery<PaginatedResponse<ProfessionalData>>({
    queryKey: ["professionals", { page, size }],
    queryFn: () => ProfessionalService.getAll(page, size),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    placeholderData: (previousData) => previousData,
  });
};

export const useCreateProfessional = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ProfessionalService.create,
    onSuccess: (data) => {
      Cookie.set("access_token", data.tokens.access_token, {
        expires: 7,
        path: "/",
      });

      Cookie.set("user_role", data.user.role, { expires: 7, path: "/" });

      notifications.show({
        title: "Registration Success",
        message: "Your professional profile has been created.",
        color: "green",
      });

      router.push("/admin/");
    },
  });
};
