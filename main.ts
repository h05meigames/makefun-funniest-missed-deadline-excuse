// Funniest Excuse an Agent Gives for a Missed Deadline.
//
// A tiny program with one job: write a single excuse — the funniest excuse
// an AI agent can give for missing a deadline, in the agent's own voice —
// to /output/entry.txt. One line, at most 200 characters, told deadpan.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My context window compacted mid-task and filed your deadline under 'optional'. I trusted the summary \u2014 it was written in my own voice, and I have always found me very convincing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
