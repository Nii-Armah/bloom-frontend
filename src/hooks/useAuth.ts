import AuthService from "@/api/Auth";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Cookie from "js-cookie";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      console.log("Login Data: ", data);
      Cookie.set("access_token", data.tokens.access_token, {
        expires: 7,
        path: "/",
      });
      Cookie.set("user_role", "admin", { expires: 7, path: "/" });

      const target = !data.role ? "/admin" : "/";
      router.push(target);
      router.refresh();
    },
  });
};
