import { apiClient } from "./apiClient";
import { ClientData } from "@/schemas/Client";

import { decamelizeKeys } from "humps";

export default class ClientService {
  static async create(data: ClientData) {
    const response = await apiClient.post("/clients/", decamelizeKeys(data));
    return response.data;
  }
}
