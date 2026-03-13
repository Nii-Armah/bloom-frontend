import { ProfessionalData } from "@/schemas/Professional";
import { apiClient } from "./apiClient";
import { decamelizeKeys } from "humps";

export class ProfessionalService {
  static async create(data: ProfessionalData) {
    const response = await apiClient.post(
      "/professionals/",
      decamelizeKeys(data),
    );
    return response.data;
  }
}
