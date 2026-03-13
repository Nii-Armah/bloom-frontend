import { LoginData } from "@/schemas/Login";
import { apiClient } from "./apiClient";

export default class AuthService {
  static async login(data: LoginData) {
    const response = await apiClient.post("/auth/login/", data);
    return response.data;
  }
}
