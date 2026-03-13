import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ServiceAPI from "@/api/Service";
import { ServiceData } from "@/schemas/Service";

export const SERVICES_QUERY_KEY = ["services"];

export const useServices = () => {
  return useQuery({
    queryKey: SERVICES_QUERY_KEY,
    queryFn: ServiceAPI.getAll,
  });
};

export const useCreateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ServiceData) => ServiceAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SERVICES_QUERY_KEY });
    },
  });
};
