import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter: Coffee or Tea — entry "A" (coffee).
// The program writes exactly one letter to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output), byte-identical on every run: no newline, no spaces.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "A", "utf8");
