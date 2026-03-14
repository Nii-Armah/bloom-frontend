"use client";

import { useState } from "react";
import styles from "./BookingForm.module.css";

interface BookingFormProps {
  professionalName: string;
  serviceName: string;
  duration: number;
  price: number;
  availableSlots: string[];
  onSubmit: (data: unknown) => void;
}

export default function BookingForm({
  professionalName,
  serviceName,
  duration,
  price,
  availableSlots,
  onSubmit,
}: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setError(true);
      return;
    }
    setError(false);
    onSubmit({ selectedDate, selectedTime });
  };

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <div className={styles.serviceSummary}>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Professional</span>
          <span className={styles.summaryValue}>{professionalName}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Service</span>
          <span className={styles.summaryValue}>{serviceName}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Duration</span>
          <span className={styles.summaryValue}>{duration} minutes</span>
        </div>
        <div className={styles.summaryDivider}></div>
        <div className={styles.summaryTotal}>
          <span className={styles.summaryLabel}>Total</span>
          <span className={styles.summaryValue}>GHS {price}</span>
        </div>
      </div>

      {error && (
        <div className={styles.errorMessage}>
          Please fill all fields to confirm booking
        </div>
      )}

      <div className={styles.formGroup}>
        <label>Select Date</label>
        <input
          type="date"
          required
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Select Time</label>
        <div className={styles.timeSlots}>
          {availableSlots.map((time) => (
            <div
              key={time}
              className={`${styles.timeSlot} ${selectedTime === time ? styles.selectedSlot : ""}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bookingActions}>
        <button
          type="button"
          className={styles.btnCancel}
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
        <button type="submit" className={styles.btnConfirm}>
          Confirm Booking
        </button>
      </div>
    </form>
  );
}
