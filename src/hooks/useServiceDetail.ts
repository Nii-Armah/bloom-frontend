import { useQuery } from "@tanstack/react-query";
import ServiceAPI from "@/api/Service";

export function useServiceDetail(id: string) {
  return useQuery({
    queryKey: ["service", id],
    queryFn: () => ServiceAPI.getDetail(id),
    staleTime: 1000 * 60 * 10,
  });
}
