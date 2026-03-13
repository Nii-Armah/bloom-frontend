"use client";

import ServicePanel from "@/features/admin/components/ServicePanel/ServicePanel";
import SideBar from "@/features/admin/components/SideBar/SideBar";
import styles from "./AdminPage.module.css";

import { Tabs } from "@mantine/core";

export default function AdminPage() {
  return (
    <Tabs defaultValue="services" orientation="vertical" variant="unstyled">
      <div className={styles.container}>
        <SideBar />

        <div className={styles.contentArea}>
          <Tabs.Panel value="services">
            <ServicePanel />
          </Tabs.Panel>
        </div>
      </div>
    </Tabs>
  );
}
