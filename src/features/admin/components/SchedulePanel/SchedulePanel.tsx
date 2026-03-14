import styles from "./SchedulePanel.module.css";
import PanelHeader from "@/features/admin/components/PanelHeader";
import DaySchedule from "@/features/admin/components/DaySchedule/DaySchedule";

import { useState } from "react";
import { DayScheduleData } from "@/types";

import { Button, SimpleGrid } from "@mantine/core";

export default function SchedulePanel() {
  const [schedule, setSchedule] = useState<DayScheduleData[]>([
    {
      dayOfWeek: "Monday",
      isAvailable: true,
      startTime: "",
      endTime: "",
    },
    {
      dayOfWeek: "Tuesday",
      isAvailable: true,
      startTime: "",
      endTime: "",
    },
  ]);

  const toggleDay = (index: number) => {
    setSchedule((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isAvailable: !item.isAvailable } : item,
      ),
    );
  };

  const updateTime = (
    index: number,
    field: "startTime" | "endTime",
    value: string,
  ) => {
    setSchedule((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    );
  };

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
        {schedule.map((item, index) => (
          <DaySchedule
            key={index}
            item={item}
            index={index}
            onToggleIndex={() => toggleDay(index)}
            onUpdateTime={updateTime}
          />
        ))}
      </SimpleGrid>

      <Button className={styles.saveButton}>Save Schedule</Button>
    </div>
  );
}
