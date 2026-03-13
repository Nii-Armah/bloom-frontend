import { Text } from "@mantine/core";

export default function Logo() {
  return (
    <Text
      component="h1"
      fw={700}
      size="30px"
      variant="gradient"
      gradient={{ from: "#34d399", to: "#22d3ee", deg: 90 }}
      style={{
        fontFamily: "Playfair Display, serif",
        letterSpacing: "-0.5px",
        cursor: "pointer",
      }}
    >
      Bloom
    </Text>
  );
}
