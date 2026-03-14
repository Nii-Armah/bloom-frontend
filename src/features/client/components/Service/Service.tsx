"use client";

import Link from "next/link";

import styles from "./Service.module.css";
import { ServiceData } from "@/types";

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
        <Link
          href={`${service.id}/booking`}
          className={styles.bookBtn}
          onClick={() => {}}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
