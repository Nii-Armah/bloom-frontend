import styles from "./SideBar.module.css";
import Logo from "@/components/Logo";

import { useRouter } from "next/navigation";

import { Group, UnstyledButton, Tabs, Text } from "@mantine/core";
import { useQueryClient } from "@tanstack/react-query";
import Cookie from "js-cookie";
import { LogOut } from "lucide-react";

export default function SideBar() {
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
    <Tabs.List className={styles.sidebarList}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>

      <Tabs.Tab value="services" className={styles.tab}>
        Services
      </Tabs.Tab>

      <Tabs.Tab value="schedules" className={styles.tab}>
        Schedules
      </Tabs.Tab>

      <Tabs.Tab value="bookings" className={styles.tab}>
        Bookings
      </Tabs.Tab>

      <UnstyledButton className={styles.logoutButton} onClick={handleLogout}>
        <Group gap="sm">
          <LogOut size={18} strokeWidth={1.5} className={styles.logoutIcon} />
          <Text size="sm" className={styles.logoutText}>
            Logout
          </Text>
        </Group>
      </UnstyledButton>
    </Tabs.List>
  );
}
