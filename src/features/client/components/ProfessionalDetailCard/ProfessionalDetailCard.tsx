import styles from "./ProfessionalDetailCard.module.css";
import { ProfessionalData } from "@/types";

interface ProfessionalDetailCardProps {
  professional: ProfessionalData;
}

export default function ProfessionalDetailCard({
  professional,
}: ProfessionalDetailCardProps) {
  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={styles.professionalCard}>
      <div className={styles.professionalAvatar}>
        {getInitials(professional.fullName)}
      </div>

      <div className={styles.professionalInfo}>
        <h2 className={styles.name}>{professional.fullName}</h2>
        <p className={styles.specialty}>{professional.specialty}</p>

        <p className={styles.bio}>{professional.bio}</p>
      </div>
    </div>
  );
}
