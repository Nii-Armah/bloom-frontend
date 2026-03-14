import styles from "./ProfessionalDetailCard.module.css";
import { ProfessionalData } from "@/types";
import { startCase } from "lodash-es";

interface ProfessionalDetailCardProps {
  professional: ProfessionalData;
}

export default function ProfessionalDetailCard({
  professional,
}: ProfessionalDetailCardProps) {
  const getInitials = (fullName?: string) => {
    if (!fullName) return "";

    const names = fullName.trim().split(/\s+/);
    const firstInitial = names[0]?.[0] || "";
    const lastInitial = names.length > 1 ? names[names.length - 1][0] : "";

    return (firstInitial + lastInitial).toUpperCase();
  };

  return (
    <div className={styles.professionalCard}>
      <div className={styles.professionalAvatar}>
        {getInitials(professional.fullName)}
      </div>

      <div className={styles.professionalInfo}>
        <h2 className={styles.name}>{professional.fullName}</h2>
        <p className={styles.specialty}>{startCase(professional.specialty)}</p>

        <p className={styles.bio}>{professional.bio}</p>
      </div>
    </div>
  );
}
