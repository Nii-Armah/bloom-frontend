"uee client";

import styles from "./SchedulePanel.module.css";
import PanelHeader from "@/features/admin/components/PanelHeader";
import DaySchedule from "@/features/admin/components/DaySchedule/DaySchedule";

import { useState, useEffect } from "react";
import { DayScheduleData } from "@/types";

import { Button, Center, Loader, SimpleGrid } from "@mantine/core";

import { useSchedules } from "@/hooks/useSchedule";

export default function SchedulePanel() {
  const { schedules, isLoading, isSaving, saveSchedule } = useSchedules();

  const [localSchedule, setLocalSchedule] = useState<DayScheduleData[]>([]);

  useEffect(() => {
    console.log(schedules);
    if (schedules && schedules.length > 0) {
      setLocalSchedule(schedules);
    }
  }, [schedules]);

  const toggleDay = (index: number) => {
    const updated = [...localSchedule];
    updated[index].isAvailable = !updated[index].isAvailable;
    setLocalSchedule(updated);
  };

  const updateTime = (
    index: number,
    field: "startTime" | "endTime",
    value: string,
  ) => {
    const updated = [...localSchedule];
    if (field === "startTime") updated[index].startTime = value;
    if (field === "endTime") updated[index].endTime = value;
    setLocalSchedule(updated);
  };

  if (isLoading) {
    return (
      <Center h={200}>
        <Loader color="emerald" size="sm" />
      </Center>
    );
  }

  return (
    <div>
      <PanelHeader
        title="Your schedule"
        subtitle="Set your availability for each day of the week"
      />

      <SimpleGrid
        cols={{ base: 1, md: 1 }}
        spacing="lg"
        className={styles.schedule}
      >
        {localSchedule.map((item, index) => (
          <DaySchedule
            key={index}
            item={item}
            index={index}
            onToggleIndex={() => toggleDay(index)}
            onUpdateTime={updateTime}
          />
        ))}
      </SimpleGrid>

      <Button
        className={styles.saveButton}
        onClick={() => saveSchedule(localSchedule)}
        loading={isSaving}
      >
        Save Schedule
      </Button>
    </div>
  );
}
