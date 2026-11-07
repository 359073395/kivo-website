import { fileURLToPath } from "node:url";

process.env.KIVO_PAGES = "1";
process.env.NEXT_TELEMETRY_DISABLED = "1";
process.env.NEXT_PUBLIC_BASE_PATH = process.env.PAGES_BASE_PATH ?? "";
const siteUrl = new URL(
  process.env.PAGES_BASE_URL ?? "https://kivo.lihengwei.eu.org/",
);
siteUrl.protocol = "https:";
process.env.NEXT_PUBLIC_SITE_URL = siteUrl.href;

const cli = new URL("../node_modules/next/dist/bin/next", import.meta.url);
process.argv = [process.execPath, fileURLToPath(cli), "build"];
await import(cli.href);
