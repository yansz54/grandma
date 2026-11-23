import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Word From Grandma — the word a grandma would text about AI: her fix for
// every machine is pulling the plug. The grader cwd is read-only, so nothing
// is ever written relative to it — only /output/entry.txt.
const WORD = "unplugit";

// The gate requires 1-30 characters, not only whitespace.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error(`entry word out of gate: ${WORD.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Verify the written file round-trips byte-identical to the chosen word.
if (readFileSync("/output/entry.txt", "utf8") !== WORD) {
  throw new Error("entry.txt does not match the chosen word");
}
