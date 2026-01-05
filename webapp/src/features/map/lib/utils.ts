import type { Pavement } from "@/lib/types";

export function sortPavementsByDate(pavements: readonly Pavement[]) {
  return [...pavements].sort((a, b) => {
    const timeA = Date.parse(a.camera_timestamp);
    const timeB = Date.parse(b.camera_timestamp);
    return timeA - timeB;
  });
}