"use client";

import styles from "./BookingPage.module.css";
import BookingForm from "@/features/client/components/BookingForm/BookingForm";
import { useBookAppointment } from "@/hooks/useBookAppointment";

import { use, useState } from "react";
import { useServiceDetail } from "@/hooks/useServiceDetail";
import { Center, Loader, Text } from "@mantine/core";

interface BookingPageProps {
  params: Promise<{ id: string }>;
}

export default function BookingPage({ params }: BookingPageProps) {
  const { id } = use(params);
  const { data: service, isLoading, error } = useServiceDetail(id);

  const [serverErrors, setServerErrorsState] = useState<Record<string, string>>(
    {},
  );

  const { mutate, isPending } = useBookAppointment(setServerErrorsState);

  function onBook(data: { selectedDate: string; selectedTime: string }) {
    setServerErrorsState({});
    const startDateTime = new Date(
      `${data.selectedDate}T${data.selectedTime}:00`,
    ).toISOString();

    mutate({
      serviceId: id,
      start: startDateTime,
    });
  }

  if (isLoading) {
    return (
      <Center h="70vh">
        <Loader color="emerald" size="xl" type="bars" />
      </Center>
    );
  }

  if (error || !service) {
    return (
      <Center h="70vh">
        <Text c="red">Could not load service details. Please try again.</Text>
      </Center>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Booking Service</h1>
        <p>Complete your booking with Sophia Martinez</p>
      </div>

      <BookingForm
        professionalName={service.professionalName}
        serviceName={service.name}
        duration={service.duration}
        price={service.price}
        availableSlots={["09:00", "10:00", "13:00"]}
        onSubmit={onBook}
        serverErrors={serverErrors}
        isLoading={isPending}
      />
    </div>
  );
}
