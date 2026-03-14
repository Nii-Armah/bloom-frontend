import { ProfessionalService } from "@/api/Professional";
import { ProfessionalData } from "@/types";

import { useQueryClient, useQuery } from "@tanstack/react-query";

export function useProfessionalDetail(id: string) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["professional", id],
    queryFn: () => ProfessionalService.getDetail(id),

    initialData: () => {
      const listData = queryClient.getQueryData<{ items: ProfessionalData[] }>([
        "professionals",
        { page: 1, size: 12 },
      ]);
      return listData?.items?.find((p) => p.id === id);
    },

    staleTime: 1000 * 60 * 5,
  });
}
