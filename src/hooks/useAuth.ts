import AuthService from "@/api/Auth";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Cookie from "js-cookie";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      Cookie.set("access_token", data.tokens.access_token, {
        expires: 7,
        path: "/",
      });
      Cookie.set("user_role", data.user.role, { expires: 7, path: "/" });

      const target = data.user.role == "admin" ? "/admin" : "/";
      router.push(target);
      router.refresh();
    },
  });
};
