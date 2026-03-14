"use client";

import styles from "./Service.module.css";
import { ServiceData } from "@/types";

import { Button } from "@mantine/core";

interface ServiceProps {
  service: ServiceData;
}

export default function Service({ service }: ServiceProps) {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.serviceDetails}>
        <h4>{service.name}</h4>
        <div className={styles.serviceMeta}>
          <span>{service.duration} minutes</span>
        </div>
      </div>

      <div className={styles.serviceBooking}>
        <div className={styles.servicePrice}>GHS {service.price}</div>
        <Button className={styles.bookBtn} onClick={() => {}}>
          Book Now
        </Button>
      </div>
    </div>
  );
}
