import styles from "./HomePage.module.css";
import Logo from "@/components/Logo";
import Professional from "@/features/client/components/Professional/Professional";

import { Search } from "lucide-react";
import { TextInput, Button, Text, Title } from "@mantine/core";

const professional = {
  fullName: "Sophia Martinez",
  specialty: "Hair Styling",
  bio: "5 years of styling expertise",
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleAndBookingsButton}>
          <Logo />
          <Button className={styles.navButton} variant="outline" px={16} py={8}>
            My Bookings
          </Button>
        </div>

        <TextInput
          placeholder="Search professionals by name..."
          leftSection={<Search size={20} color="#94a3b8" />}
          className={styles.searchInput}
          size="lg"
          styles={{
            input: {
              paddingLeft: "45px",
            },
          }}
        />
      </header>

      <Title order={2} size="h2" fw={700} c="white" mb="xs">
        All Beauty Professionals
      </Title>
      <Text c="dimmed" size="sm" mb="lg">
        6 professionals available
      </Text>

      <div className={styles.professionals}>
        <Professional professional={professional} />
        <Professional professional={professional} />
        <Professional professional={professional} />
        <Professional professional={professional} />

        <Professional professional={professional} />
        <Professional professional={professional} />
      </div>
    </div>
  );
}
