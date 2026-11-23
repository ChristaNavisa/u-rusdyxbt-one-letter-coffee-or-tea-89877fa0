import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter: Coffee or Tea — entry "A" (coffee).
// The program writes exactly one letter to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output), byte-identical on every run: no newline, no spaces.
const LETTER = "A";

function validateLetter(letter: string): void {
  if ([...letter].length !== 1) {
    throw new Error(`entry must be exactly one letter, got ${[...letter].length}`);
  }
}

validateLetter(LETTER);

function writeEntry(dir: string, file: string, text: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, file), text, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, "entry.txt", LETTER);
