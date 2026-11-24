// FridgeLight: the worst app idea ever pitched, delivered with total founder confidence.
// The joke's angle: the app solves a problem nobody can ever have — it alerts you
// the instant your refrigerator light turns off, a light no one can see while the
// door is closed, sold with a straight face as $9.99-a-month peace of mind for
// your leftovers sitting alone in the dark.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "FridgeLight is the subscription app that alerts homeowners the instant their refrigerator light turns off, because in a world full of uncertainty, knowing your leftovers are sitting in the dark is peace of mind worth $9.99 a month.";

// Gate: entry must be 1–240 characters and exactly one sentence.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${LINE.length}`);
}

// Count sentence terminators, ignoring the decimal point in "$9.99".
const terminators = LINE.replace(/\d+\.\d+/g, "").match(/[.!?]/g) ?? [];
if (terminators.length !== 1 || !/[.!?]$/.test(LINE)) {
  throw new Error("entry must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
