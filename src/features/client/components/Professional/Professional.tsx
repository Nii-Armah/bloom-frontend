import styles from "./Professional.module.css";
import { ProfessionalData } from "@/types";

import Link from "next/link";

import { Avatar, Group, Text } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import { startCase } from "lodash-es";

interface ProfessionalProps {
  professional: ProfessionalData;
}

export default function Professional({ professional }: ProfessionalProps) {
  const names = professional.fullName.split(" ");
  const firstName = names[0] || "";
  const lastName = names[names.length - 1] || "";
  const initials = (firstName[0] || "") + (names.length > 1 ? lastName[0] : "");

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
            {initials}
          </Avatar>

          <div style={{ flex: 1 }}>
            <h3 className={styles.name}>{professional.fullName}</h3>
            <p className={styles.specialty}>
              {startCase(professional.specialty)}
            </p>
          </div>
        </Group>
        <Text className={styles.description} lineClamp={3}>
          {professional.bio}
        </Text>
      </div>

      <div className={styles.footer}>
        <Link
          href={`/professionals/${professional.id}`}
          className={styles.bookButton}
        >
          Book Now <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
