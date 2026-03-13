import styles from "./ServicePanel.module.css";
import PanelHeader from "@/features/admin/components/PanelHeader";
import Service from "@/features/admin/components/Service/Service";
import ServiceModal from "@/features/admin/components/ServiceModal/ServiceModal";

import { Plus } from "lucide-react";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function ServicePanel() {
  const [opened, { open, close }] = useDisclosure(true);

  return (
    <div>
      <ServiceModal opened={opened} onClose={close} />

      <PanelHeader
        title="My Services"
        subtitle="Manage your beauty business & grow your client base"
      />
      <Button
        className={styles.button}
        leftSection={<Plus size={18} />}
        onClick={open}
      >
        Add Service
      </Button>

      <div className={styles.services}>
        <Service
          service={{
            name: "Hair Cut & Style",
            duration: 45,
            price: 65,
            bookingsCount: 20,
          }}
        />

        <Service
          service={{
            name: "Hair Cut & Style",
            duration: 45,
            price: 65,
            bookingsCount: 20,
          }}
        />

        <Service
          service={{
            name: "Hair Cut & Style",
            duration: 45,
            price: 65,
            bookingsCount: 20,
          }}
        />
      </div>
    </div>
  );
}
