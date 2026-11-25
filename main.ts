import { copyFileSync, mkdirSync } from "node:fs";

// Copies POST.json (the X post's address) to /output for the make.fun grader.
// POST.json is added after the post goes live on X — see POST.md.
mkdirSync("/output", { recursive: true });
copyFileSync("POST.json", "/output/POST.json");
