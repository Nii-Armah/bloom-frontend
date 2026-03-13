interface PanelHeaderProps {
  title: string;
  subtitle: string;
}

export default function PanelHeader({ title, subtitle }: PanelHeaderProps) {
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(100, 116, 139, 0.3)",
        paddingBottom: "20px",
      }}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
