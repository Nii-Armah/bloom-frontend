"use client";

import styles from "./BookingPage.module.css";
import BookingForm from "@/features/client/components/BookingForm/BookingForm";

export default function BookingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Booking Service</h1>
        <p>Complete your booking with Sophia Martinez</p>
      </div>

      <BookingForm
        professionalName="John Lennon"
        serviceName="Hair Freaking Styling"
        duration="45"
        price="500"
        availableSlots={["9:00 AM", "10:00 AM", "1:00 PM"]}
        onSubmit={() => {}}
      />
    </div>
  );
}
