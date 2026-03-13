import { apiClient } from "./apiClient";
import { ServiceData } from "@/schemas/Service";

import { decamelizeKeys } from "humps";

export default class ServiceAPI {
  static async create(data: ServiceData) {
    const response = await apiClient.post("/services/", decamelizeKeys(data));
    return response.data;
  }

  static async getAll() {
    const response = await apiClient.get("/services/");
    return response.data;
  }
}
