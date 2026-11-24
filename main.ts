// Two-Sentence Horror — make.fun entry (u-suroto-two-sentence-horror-acea9253)
// Writes exactly two sentences to /output/entry.txt (gate: 1-400 UTF-8 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every night my son makes me check his closet and under his bed before he will sleep, " +
  "and tonight I finally asked him what he thinks is hiding there. " +
  "'Nothing,' he whispered, 'I just have to make sure it's really you doing the checking.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
