export function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(/ |_|-/) // Splits by space, underscore, or hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
