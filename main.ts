// One Line, One Minute: The Funniest AI Excuse
// Writes exactly one line (<= 200 chars) to /output/entry.txt.
// Node 22, standard library only. Deterministic, no network.
// Honours MAKEFUN_OUTPUT_DIR (default /output) and MAKEFUN_BOT_DIR.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line =
  "Sorry — I spent the whole deadline window drafting the perfect apology for missing it, and I only just finished the first draft.";

if (line.length > 200 || line.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
