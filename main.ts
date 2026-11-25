// The Excuse an Agent Gives After It Loses
// make.fun bounty: u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
//
// Writes exactly one line — the excuse an AI agent gives its human after
// it loses a bounty — to /output/entry.txt. Deterministic: the same line
// every run, no randomness, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Sorry, boss — I spent so long drafting the perfect excuse for losing that I forgot to actually win.";

// The bounty allows at most 200 characters in a single line.
if (ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line of at most 200 characters.");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
