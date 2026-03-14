import { apiClient } from "./apiClient";
import { ServiceData } from "@/schemas/Service";

import { camelizeKeys, decamelizeKeys } from "humps";

export default class ServiceAPI {
  static async create(data: ServiceData) {
    const response = await apiClient.post("/services/", decamelizeKeys(data));
    return response.data;
  }

  static async getAll() {
    const response = await apiClient.get("/services/");
    return response.data;
  }

  static async getDetail(id: string): Promise<ServiceData> {
    const response = await apiClient.get(`/services/${id}/`);
    return camelizeKeys(response.data) as ServiceData;
  }
}
