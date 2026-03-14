"use client";

import styles from "./ProfessionalDetail.module.css";
import ProfessionalDetailCard from "@/features/client/components/ProfessionalDetailCard/ProfessionalDetailCard";
import Service from "@/features/client/components/Service/Service";

import { use } from "react";
import Link from "next/link";
import { Center, Paper, Stack, Text } from "@mantine/core";
import { ArrowLeft, Loader, Sparkles } from "lucide-react";
import { useProfessionalDetail } from "@/hooks/useProfessionalDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProfessionalDetail({ params }: PageProps) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const { data: professional, isLoading, error } = useProfessionalDetail(id);

  if (isLoading && !professional) {
    return (
      <Center h="100vh">
        <Loader color="emerald" type="bars" />
      </Center>
    );
  }

  if (error) return <div>Error loading professional.</div>;

  return (
    <div className={styles.page}>
      <Link href="/" className={styles.backButton}>
        <ArrowLeft size={20} strokeWidth={2.5} className={styles.arrowIcon} />
        Back to Professionals
      </Link>

      <ProfessionalDetailCard professional={professional} />

      <h3 className={styles.title}>Available Services</h3>

      {professional?.services?.length > 0 ? (
        <div className={styles.services}>
          {professional?.services?.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <Paper
          p="xl"
          radius="md"
          withBorder
          style={{ borderStyle: "dashed", backgroundColor: "transparent" }}
        >
          <Center>
            <Stack align="center" gap="xs">
              <Sparkles
                size={32}
                color="var(--mantine-color-emerald-5)"
                opacity={0.6}
              />
              <Text fw={500} c="dimmed">
                New services coming soon
              </Text>
              <Text size="xs" c="dimmed" ta="center">
                {professional.fullName} hasn&apos;t listed specific services
                yet. <br />
                Check back shortly or contact them directly.
              </Text>
            </Stack>
          </Center>
        </Paper>
      )}
    </div>
  );
}
