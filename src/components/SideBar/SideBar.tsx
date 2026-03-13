import styles from "./SideBar.module.css";

import { Tabs } from "@mantine/core";

export default function SideBar() {
  return (
    <Tabs.List className={styles.sidebarList}>
      <Tabs.Tab value="services" className={styles.tab}>
        Services
      </Tabs.Tab>
    </Tabs.List>
  );
}
