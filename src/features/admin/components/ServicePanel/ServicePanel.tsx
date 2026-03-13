import styles from "./ServicePanel.module.css";
import PanelHeader from "@/features/admin/components/PanelHeader";
import Service from "@/features/admin/components/Service/Service";
import ServiceModal from "@/features/admin/components/ServiceModal/ServiceModal";
import { useServices } from "@/hooks/useService";
import { ServiceData } from "@/types";

import { Plus } from "lucide-react";
import { Button, Center, Loader, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function ServicePanel() {
  const [opened, { open, close }] = useDisclosure(false);

  const { data: services, isLoading, isError } = useServices();

  if (isLoading)
    return (
      <Center p="xl">
        <Loader color="emerald.5" />
      </Center>
    );

  if (isError) return <Text c="red">Failed to load services.</Text>;

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

      {services.length === 0 && (
        <Text c="slate.4" size="sm" ta="center" py="xl" fs="italic">
          There are currently no services available.
        </Text>
      )}

      <div className={styles.services}>
        {services.map((service: ServiceData) => (
          <Service key={service.name} service={service} />
        ))}
      </div>
    </div>
  );
}
