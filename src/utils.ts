export function cx(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export type Tone = "neutral" | "info" | "success" | "warning" | "danger";

export function toneClass(prefix: string, tone: Tone): string {
  return `${prefix} ${prefix}--${tone}`;
}
