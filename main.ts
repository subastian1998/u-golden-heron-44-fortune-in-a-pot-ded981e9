import { mkdirSync, writeFileSync } from "node:fs";

// Fortune in a Pot — one kind, funny fortune for a houseplant.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters.
const entry =
  "This week, little leaf, the sun will linger on your windowsill, your leaves will glow, and you will be watered on time.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters.
// Enforce the gate in the program itself so a bad entry fails loudly
// instead of silently reaching the judge.
if (entry.length < 1 || entry.length > 120) {
  throw new Error(`entry is ${entry.length} chars, must be 1-120`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars`);
