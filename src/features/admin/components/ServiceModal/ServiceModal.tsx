import styles from "./ServiceModal.module.css";
import { useCreateService } from "@/hooks/useService";
import {
  ServiceData,
  ServiceSchema,
  defaultServiceValues,
} from "@/schemas/Service";
import { setServerErrors } from "@/utils/form";

import {
  Modal,
  TextInput,
  Textarea,
  NumberInput,
  Button,
  SimpleGrid,
  Box,
} from "@mantine/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

interface ServiceModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function ServiceModal({ opened, onClose }: ServiceModalProps) {
  const inputStyles = {
    input: styles.inputField,
    label: styles.inputLabel,
  };

  const { mutate: createService, isPending: isCreating } = useCreateService();

  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm<ServiceData>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: defaultServiceValues,
  });

  function onSubmit(data: ServiceData) {
    createService(data, {
      onSuccess() {
        onModalClose();
      },
      onError: (err: any) => setServerErrors(err, setError),
    });
  }

  function onModalClose() {
    onClose();
    reset();
  }

  return (
    <Modal
      opened={opened}
      onClose={onModalClose}
      withCloseButton={false}
      padding={0}
      centered
      size="32rem"
      classNames={{ content: styles.modalContent }}
    >
      <div className={styles.header}>
        <h3>Create New Service</h3>
        <button className={styles.closeButton} onClick={onModalClose}>
          ×
        </button>
      </div>

      <Box p="2rem" pb={0}>
        <form id="serviceForm" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextInput
                label="Service Name"
                placeholder="e.g., Hair Cut & Style"
                classNames={inputStyles}
                mb="1.5rem"
                {...field}
                error={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <Textarea
                label="Description (Optional)"
                placeholder="Describe what's included in this service..."
                classNames={inputStyles}
                mb="1.5rem"
                minRows={10}
                {...field}
                error={errors.description?.message}
              />
            )}
          />

          <SimpleGrid cols={2} spacing="1rem">
            <Controller
              control={control}
              name="duration"
              render={({ field }) => (
                <NumberInput
                  label="Duration (minutes)"
                  placeholder="45"
                  min={15}
                  max={480}
                  classNames={inputStyles}
                  {...field}
                  error={errors.duration?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <NumberInput
                  label="Price (GHS)"
                  placeholder="65"
                  min={0.01}
                  step={0.01}
                  classNames={inputStyles}
                  {...field}
                  error={errors.price?.message}
                />
              )}
            />
          </SimpleGrid>
        </form>
      </Box>

      <div className={styles.actions}>
        <Button className={styles.cancelBtn} onClick={onModalClose}>
          Cancel
        </Button>
        <Button
          className={styles.submitBtn}
          type="submit"
          form="serviceForm"
          loading={isCreating}
        >
          Create Service
        </Button>
      </div>
    </Modal>
  );
}
