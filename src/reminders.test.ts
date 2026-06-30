import { describe, expect, it } from "vitest";
import { formatRelativeDue, getDueStateTone } from "./reminders";

describe("reminder display helpers", () => {
  it("formats overdue, today, tomorrow, and future states", () => {
    expect(formatRelativeDue(-3)).toBe("3 days overdue");
    expect(formatRelativeDue(0)).toBe("Due today");
    expect(formatRelativeDue(1)).toBe("Due tomorrow");
    expect(formatRelativeDue(9)).toBe("Due in 9 days");
  });

  it("maps due state to a display tone", () => {
    expect(getDueStateTone("overdue")).toBe("danger");
    expect(getDueStateTone("due-soon")).toBe("warning");
    expect(getDueStateTone("on-track")).toBe("info");
    expect(getDueStateTone("done")).toBe("success");
  });
});
