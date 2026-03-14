import styles from "./DaySchedule.module.css";
import { DayScheduleData } from "@/types";
import { toTitleCase } from "@/utils/transformers";

import { Box, Text, Checkbox, Group, Stack } from "@mantine/core";

interface DayScheduleProps {
  item: DayScheduleData;
  index: number;
  onToggleIndex: () => void;
  onUpdateTime: (
    index: number,
    field: "startTime" | "endTime",
    value: string,
  ) => void;
}

export default function DaySchedule({
  item,
  index,
  onToggleIndex,
  onUpdateTime,
}: DayScheduleProps) {
  return (
    <Box key={item.dayOfWeek} p="md" className={styles.schedule}>
      <Group mb={item.isAvailable ? "sm" : 0} gap="sm">
        <Checkbox
          size="sm"
          color="emerald.5"
          checked={item.isAvailable}
          onChange={onToggleIndex}
          styles={{ input: { cursor: "pointer" } }}
        />
        <Text
          c="white"
          fw={500}
          size="sm"
          onClick={onToggleIndex}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          {toTitleCase(item.dayOfWeek)}
        </Text>
      </Group>

      {/* Time Input Row: Only shows when checked */}
      {item.isAvailable && (
        <Group grow gap="xs">
          <Stack gap={4}>
            <Text size="xs" c="slate.4">
              From
            </Text>
            <input
              type="time"
              value={item.startTime}
              onChange={(e) => onUpdateTime(index, "startTime", e.target.value)}
              className={styles.timeInput}
            />
          </Stack>

          <Stack gap={4}>
            <Text size="xs" c="slate.4">
              To
            </Text>
            <input
              type="time"
              value={item.endTime}
              onChange={(e) => onUpdateTime(index, "endTime", e.target.value)}
              className={styles.timeInput}
            />
          </Stack>
        </Group>
      )}
    </Box>
  );
}
