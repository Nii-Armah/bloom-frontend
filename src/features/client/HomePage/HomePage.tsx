"use client";

import styles from "./HomePage.module.css";
import Logo from "@/components/Logo";
import Professional from "@/features/client/components/Professional/Professional";

import Cookie from "js-cookie";
import { Search, LogOut } from "lucide-react";
import { TextInput, Button, Text, Title, Group } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

const professional = {
  fullName: "Sophia Martinez",
  specialty: "Hair Styling",
  bio: "5 years of styling expertise",
};

export default function HomePage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  function handleLogout() {
    Cookie.remove("access_token", { path: "/" });
    Cookie.remove("user_role", { path: "/" });

    queryClient.clear();
    router.push("/login");
    router.refresh();
  }

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
        6 professionals available
      </Text>

      <div className={styles.professionals}>
        <Professional professional={professional} />
        <Professional professional={professional} />
        <Professional professional={professional} />
        <Professional professional={professional} />

        <Professional professional={professional} />
        <Professional professional={professional} />
      </div>
    </div>
  );
}
