"use client";

import styles from "./HomePage.module.css";
import { ProfessionalService } from "@/api/Professional";
import Logo from "@/components/Logo";
import Professional from "@/features/client/components/Professional/Professional";
import { useProfessionals } from "@/hooks/useProfessionals";

import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { Search, LogOut } from "lucide-react";
import {
  TextInput,
  Button,
  Text,
  Title,
  Group,
  Pagination,
  Center,
  Stack,
  Loader,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function HomePage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [page, setPage] = useState(1);
  const size = 12;
  const { data, isLoading, isError } = useProfessionals(page, size);

  function handleLogout() {
    Cookie.remove("access_token", { path: "/" });
    Cookie.remove("user_role", { path: "/" });

    queryClient.clear();
    router.push("/login");
    router.refresh();
  }

  useEffect(() => {
    if (data && page < data.pages) {
      const nextPage = page + 1;
      queryClient.prefetchQuery({
        queryKey: ["professionals", { page: nextPage, size }],
        queryFn: () => ProfessionalService.getAll(nextPage, size),
      });
    }
  }, [data, page, queryClient]);

  if (isError)
    return <Text c="red">Failed to load professionals. Please try again.</Text>;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleAndBookingsButton}>
          <Logo />

          <Group gap="sm">
            <Button
              className={styles.navButton}
              variant="outline"
              px={16}
              py={8}
            >
              My Bookings
            </Button>

            <Button
              className={styles.logoutButton}
              variant="subtle"
              onClick={handleLogout}
              leftSection={<LogOut size={16} />}
            >
              Logout
            </Button>
          </Group>
        </div>

        <TextInput
          placeholder="Search professionals by name..."
          leftSection={<Search size={20} color="#94a3b8" />}
          className={styles.searchInput}
          size="lg"
          styles={{
            input: {
              paddingLeft: "45px",
            },
          }}
        />
      </header>

      <Title order={2} size="h2" fw={700} c="white" mb="xs">
        All Beauty Professionals
      </Title>
      <Text c="dimmed" size="sm" mb="lg">
        {data?.total} professionals available
      </Text>

      {isLoading ? (
        <Center h={400}>
          <Stack align="center" gap="sm">
            <Loader color="#10b981" size="xl" type="bars" />
          </Stack>
        </Center>
      ) : (
        <>
          <div className={styles.professionals}>
            {data?.items.map((professional) => (
              <Professional key={professional.id} professional={professional} />
            ))}
          </div>
          <Pagination
            total={Math.ceil(data?.pages || 0)}
            value={page}
            onChange={setPage}
            color="emerald"
            withEdges
            className={styles.pagination}
          />
        </>
      )}
    </div>
  );
}
