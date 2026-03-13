import styles from "./ServiceModal.module.css";
import {
  Modal,
  TextInput,
  Textarea,
  NumberInput,
  Button,
  SimpleGrid,
  Box,
} from "@mantine/core";

interface ServiceModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function ServiceModal({ opened, onClose }: ServiceModalProps) {
  const inputStyles = {
    input: styles.inputField,
    label: styles.inputLabel,
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      padding={0}
      centered
      size="32rem"
      classNames={{ content: styles.modalContent }}
    >
      <div className={styles.header}>
        <h3>Create New Service</h3>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
      </div>

      <Box p="2rem" pb={0}>
        <form id="serviceForm">
          <TextInput
            label="Service Name"
            placeholder="e.g., Hair Cut & Style"
            classNames={inputStyles}
            mb="1.5rem"
          />

          <Textarea
            label="Description (Optional)"
            placeholder="Describe what's included in this service..."
            classNames={inputStyles}
            mb="1.5rem"
            minRows={4}
          />

          <SimpleGrid cols={2} spacing="1rem">
            <NumberInput
              label="Duration (minutes)"
              placeholder="45"
              min={15}
              max={480}
              classNames={inputStyles}
            />
            <NumberInput
              label="Price (GHS)"
              placeholder="65"
              min={0.01}
              step={0.01}
              classNames={inputStyles}
            />
          </SimpleGrid>
        </form>
      </Box>

      <div className={styles.actions}>
        <Button className={styles.cancelBtn} onClick={onClose}>
          Cancel
        </Button>
        <Button className={styles.submitBtn} type="submit" form="serviceForm">
          Create Service
        </Button>
      </div>
    </Modal>
  );
}
