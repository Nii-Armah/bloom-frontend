import { ProfessionalService } from "@/api/Professional";

import { useRouter } from "next/navigation";

import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";

export const useCreateProfessional = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ProfessionalService.create,
    onSuccess: (data) => {
      console.log("Registration Response: ", data);
      notifications.show({
        title: "Registration Success",
        message: "Your professional profile has been created.",
        color: "green",
      });

      router.push("/admin/");
    },
  });
};
