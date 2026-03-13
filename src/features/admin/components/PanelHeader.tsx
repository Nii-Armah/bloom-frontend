interface PanelHeaderProps {
  title: string;
  subtitle: string;
}

export default function PanelHeader({ title, subtitle }: PanelHeaderProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
