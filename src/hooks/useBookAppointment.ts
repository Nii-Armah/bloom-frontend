import { useMutation } from "@tanstack/react-query";
import BookingService from "@/api/Booking";
import { setManualServerErrors } from "@/utils/form";
import { notifications } from "@mantine/notifications";

import { useRouter } from "next/navigation";

export function useBookAppointment(setErrors: (errs: any) => void) {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: { serviceId: string; start: string }) =>
      BookingService.bookAppointment(data),
    onSuccess: () => {
      notifications.show({
        title: "Success",
        message: "Appointment booked successfully!",
        color: "green",
      });
      router.back();
    },
    onError: (error: any) => {
      if (error.response?.data) {
        setManualServerErrors(error, setErrors);
      } else {
        notifications.show({
          title: "Error",
          message: "Could not complete booking.",
          color: "red",
        });
      }
    },
  });
}
