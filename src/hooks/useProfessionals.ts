import { ProfessionalService } from "@/api/Professional";

import { useRouter } from "next/navigation";

import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import Cookie from "js-cookie";

export const useCreateProfessional = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ProfessionalService.create,
    onSuccess: (data) => {
      Cookie.set("access_token", data.tokens.access_token, {
        expires: 7,
        path: "/",
      });

      Cookie.set("user_role", "admin", { expires: 7, path: "/" });

      notifications.show({
        title: "Registration Success",
        message: "Your professional profile has been created.",
        color: "green",
      });

      router.push("/admin/");
    },
  });
};
