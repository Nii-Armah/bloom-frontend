import ClientService from "@/api/Client";
import { ClientData } from "@/schemas/Client";

import Cookie from "js-cookie";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

export const useCreateClient = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: ClientData) => ClientService.create(data),
    onSuccess: (data) => {
      Cookie.set("access_token", data.tokens.access_token, {
        expires: 7,
        path: "/",
      });

      Cookie.set("user_role", data.user.role, { expires: 7, path: "/" });

      notifications.show({
        title: "Registration Successful",
        message: "Your account has been created.",
        color: "green",
      });

      router.push("/");
    },
  });
};
