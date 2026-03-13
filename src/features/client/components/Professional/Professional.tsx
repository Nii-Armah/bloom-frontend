import styles from "./Professional.module.css";
import { ProfessionalData } from "@/types";

import { Avatar, Group, Text, UnstyledButton } from "@mantine/core";
import { ArrowRight } from "lucide-react";

interface ProfessionalProps {
  professional: ProfessionalData;
}

export default function Professional({ professional }: ProfessionalProps) {
  const [firstName, lastName] = professional.fullName.split(" ").slice();
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Group align="flex-start" gap="md" mb="md">
          <Avatar
            size={64}
            radius="xl"
            styles={{
              root: {
                background: "linear-gradient(135deg, #34d399, #22d3ee)",
                border: 0,
              },
              placeholder: { color: "#0f172a", fontWeight: 700 },
            }}
          >
            {firstName[0]}
            {lastName[0]}
          </Avatar>

          <div style={{ flex: 1 }}>
            <h3 className={styles.name}>{professional.fullName}</h3>
            <p className={styles.specialty}>{professional.specialty}</p>
          </div>
        </Group>
        <Text className={styles.description}>{professional.bio}</Text>
      </div>

      <div className={styles.footer}>
        <UnstyledButton className={styles.bookButton}>
          Book Now <ArrowRight size={18} />
        </UnstyledButton>
      </div>
    </div>
  );
}
