import styles from "./Service.module.css";
import { ServiceData } from "@/types";

interface ServiceProps {
  service: ServiceData;
}

export default function Service({ service }: ServiceProps) {
  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <p className={styles.name}>{service.name}</p>
        <p className={styles.durationAndPrice}>
          <span>{service.duration} min</span> <span> GHS {service.price}</span>
        </p>
      </div>

      {/* <div>
        <p className={styles.bookingLabel}>Bookings</p>
        <p className={styles.bookingValue}>{service.bookingsCount}</p>
      </div> */}
    </div>
  );
}
