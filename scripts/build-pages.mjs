import { fileURLToPath } from "node:url";

process.env.KIVO_PAGES = "1";
process.env.NEXT_TELEMETRY_DISABLED = "1";
process.env.NEXT_PUBLIC_BASE_PATH =
  process.env.PAGES_BASE_PATH ?? "/kivo-website";
process.env.NEXT_PUBLIC_SITE_URL =
  process.env.PAGES_BASE_URL ?? "https://359073395.github.io/kivo-website/";

const cli = new URL("../node_modules/next/dist/bin/next", import.meta.url);
process.argv = [process.execPath, fileURLToPath(cli), "build"];
await import(cli.href);
