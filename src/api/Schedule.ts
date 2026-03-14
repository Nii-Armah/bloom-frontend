import { apiClient } from "./apiClient";
import { camelizeKeys, decamelizeKeys } from "humps";

import { DayScheduleData } from "@/types";

export default class ScheduleService {
  static async getAll(): Promise<DayScheduleData[]> {
    const response = await apiClient.get("/schedules/");
    return response.data.map((schedule: unknown) => camelizeKeys(schedule));
  }

  static async update(schedule: DayScheduleData[]) {
    const payload = schedule.map((s) => decamelizeKeys(s));

    await apiClient.put("/schedules/", payload);
  }
}
