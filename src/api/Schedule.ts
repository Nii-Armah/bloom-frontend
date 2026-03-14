import { apiClient } from "./apiClient";
import { camelizeKeys, decamelizeKeys } from "humps";

import { DayScheduleData } from "@/types";

const DAY_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default class ScheduleService {
  static async getAll(): Promise<DayScheduleData[]> {
    const response = await apiClient.get("/schedules/");
    const schedules = response.data.map((schedule: unknown) =>
      camelizeKeys(schedule),
    );

    return schedules.sort((a: DayScheduleData, b: DayScheduleData) => {
      return (
        DAY_ORDER.indexOf(a.dayOfWeek.toLowerCase()) -
        DAY_ORDER.indexOf(b.dayOfWeek.toLowerCase())
      );
    });
  }

  static async update(schedule: DayScheduleData[]) {
    const payload = schedule.map((s) => decamelizeKeys(s));

    await apiClient.put("/schedules/", payload);
  }
}
