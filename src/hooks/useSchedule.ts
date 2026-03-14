import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ScheduleService from "@/api/Schedule";
import { DayScheduleData } from "@/types";
import { notifications } from "@mantine/notifications";

export const useSchedules = () => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["schedules"],
    queryFn: ScheduleService.getAll,
    staleTime: 1000 * 60 * 5,
  });

  // Update the schedule
  const mutation = useMutation({
    mutationFn: (newSchedule: DayScheduleData[]) =>
      ScheduleService.update(newSchedule),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
      notifications.show({
        title: "Success",
        message: "Your schedule has been updated.",
        color: "green",
      });
    },
  });

  return {
    schedules: query.data ?? [],
    isLoading: query.isLoading,
    isSaving: mutation.isPending,
    saveSchedule: mutation.mutate,
  };
};
