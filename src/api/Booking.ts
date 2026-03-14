import { apiClient } from "./apiClient";
import { decamelizeKeys } from "humps";

interface BookingData {
  serviceId: string;
  start: string;
}

export default class BookingService {
  static async bookAppointment(data: BookingData) {
    await apiClient.post("/bookings/", decamelizeKeys(data));
  }
}
