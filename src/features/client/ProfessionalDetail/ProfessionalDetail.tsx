import styles from "./ProfessionalDetail.module.css";
import ProfessionalDetailCard from "@/features/client/components/ProfessionalDetailCard/ProfessionalDetailCard";
import Service from "@/features/client/components/Service/Service";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProfessionalDetail() {
  return (
    <div className={styles.page}>
      <Link href="#" className={styles.backButton}>
        <ArrowLeft size={20} strokeWidth={2.5} className={styles.arrowIcon} />
        Back to Professionals
      </Link>

      <ProfessionalDetailCard
        professional={{
          fullName: "Clay Spenser",
          specialty: "Hair Stylist",
          bio: "Experienced hair stylist specializing in cuts, coloring, and styling for all hair types.",
        }}
      />

      <h3 className={styles.title}>Available Services</h3>
      <div className={styles.services}>
        <Service
          service={{ name: "Hair Cut & Style", duration: 45, price: 10 }}
        />

        <Service
          service={{ name: "Hair Cut & Style", duration: 45, price: 10 }}
        />
        <Service
          service={{ name: "Hair Cut & Style", duration: 45, price: 10 }}
        />
        <Service
          service={{ name: "Hair Cut & Style", duration: 45, price: 10 }}
        />
        <Service
          service={{ name: "Hair Cut & Style", duration: 45, price: 10 }}
        />

        <Service
          service={{ name: "Hair Cut & Style", duration: 45, price: 10 }}
        />
      </div>
    </div>
  );
}
