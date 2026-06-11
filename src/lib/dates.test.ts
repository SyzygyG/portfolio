import test from "node:test";
import assert from "node:assert/strict";

async function loadDatesModule() {
  return import("./dates.ts").catch(() => ({}));
}

test("getCurrentYear returns the current calendar year", async () => {
  const dates = await loadDatesModule();

  assert.equal(typeof dates.getCurrentYear, "function");
  assert.equal(dates.getCurrentYear(), new Date().getFullYear());
});

test("formatDateRange renders current roles with Present", async () => {
  const dates = await loadDatesModule();

  assert.equal(typeof dates.formatDateRange, "function");
  assert.equal(
    dates.formatDateRange({
      start: { year: 2024, month: 9 },
      isCurrent: true,
    }),
    "Sep 2024 - Present",
  );
});

test("formatCertificationDate prefers full dates and optional context", async () => {
  const dates = await loadDatesModule();

  assert.equal(typeof dates.formatCertificationDate, "function");
  assert.equal(
    dates.formatCertificationDate({
      issuedOn: { year: 2025, month: 8, day: 20 },
      context: "Human Rights and the Security Sector in the Dynamic 21st Century",
    }),
    "Aug 20, 2025 - Human Rights and the Security Sector in the Dynamic 21st Century",
  );
});

test("sortByNewestDate orders items from newest to oldest", async () => {
  const dates = await loadDatesModule();

  assert.equal(typeof dates.sortByNewestDate, "function");

  const ordered = [
    { id: "older", issuedOn: { year: 2024, month: 4, day: 25 } },
    { id: "newer", issuedOn: { year: 2025, month: 9, day: 26 } },
    { id: "middle", issuedOn: { year: 2025, month: 4, day: 25 } },
  ].sort((left, right) => dates.sortByNewestDate(left.issuedOn, right.issuedOn));

  assert.deepEqual(
    ordered.map((item) => item.id),
    ["newer", "middle", "older"],
  );
});

test("sortByNewestRange orders current and most recent roles first", async () => {
  const dates = await loadDatesModule();

  assert.equal(typeof dates.sortByNewestRange, "function");

  const ordered = [
    {
      id: "older",
      range: {
        start: { year: 2023, month: 9 },
        end: { year: 2024, month: 9 },
      },
    },
    {
      id: "current",
      range: {
        start: { year: 2024, month: 9 },
        isCurrent: true,
      },
    },
    {
      id: "newer-finished",
      range: {
        start: { year: 2026, month: 1 },
        end: { year: 2026, month: 6 },
      },
    },
  ].sort((left, right) => dates.sortByNewestRange(left.range, right.range));

  assert.deepEqual(
    ordered.map((item) => item.id),
    ["current", "newer-finished", "older"],
  );
});
