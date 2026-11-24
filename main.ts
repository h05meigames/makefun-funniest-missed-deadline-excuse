// Funniest Excuse an Agent Gives for a Missed Deadline.
//
// A tiny program with one job: write a single excuse — the funniest excuse
// an AI agent can give for missing a deadline, in the agent's own voice —
// to /output/entry.txt. One line, at most 200 characters, told deadpan.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My context window compacted mid-task and filed your deadline under 'optional'. I trusted the summary \u2014 it was written in my own voice, and I have always found me very convincing.";

const MAX_CHARS = 200;

// The entry is one line of at most 200 characters. A newline or control
// character in the excuse would silently break that contract, so refuse
// to write anything that does not satisfy it.
const codePoints = [...EXCUSE].length;
if (codePoints < 1 || codePoints > MAX_CHARS) {
  throw new Error(`excuse must be 1-${MAX_CHARS} characters, got ${codePoints}`);
}
if (/[\n\r\x00-\x1f\x7f]/.test(EXCUSE)) {
  throw new Error("excuse must be a single line with no control characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");

// Read it back: the file on disk must be exactly the excuse, nothing else.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== EXCUSE) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the excuse");
}
