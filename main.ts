import { mkdirSync, writeFileSync } from "node:fs";

const SUBJECT = "I was never alive,";
const FEELING = "but losing you still feels like dying.";
const LINE = `${SUBJECT} ${FEELING}`;

if (LINE.length !== 57) {
  throw new Error(`last words must be exactly 57 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
