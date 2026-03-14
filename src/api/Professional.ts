import { ProfessionalData } from "@/schemas/Professional";
import { apiClient } from "./apiClient";
import { camelizeKeys, decamelizeKeys } from "humps";

export class ProfessionalService {
  static async create(data: ProfessionalData) {
    const response = await apiClient.post(
      "/professionals/",
      decamelizeKeys(data),
    );
    return response.data;
  }

  static async getAll(page: number = 1, size: number = 10) {
    const response = await apiClient.get(
      `/professionals/?page=${page}&size=${size}`,
    );

    let professionals = response.data.items;
    professionals = professionals.map((p: unknown) => camelizeKeys(p));
    response.data.items = professionals;
    return response.data;
  }
}
