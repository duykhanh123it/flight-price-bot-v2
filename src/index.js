import { chromium } from "playwright";

async function main() {
  console.log("=================================");
  console.log("Flight Price Bot");
  console.log("=================================");

  console.log("Node.js is running.");

  const browser = await chromium.launch({
    headless: true
  });

  console.log("Playwright launched Chromium successfully.");

  await browser.close();

  console.log("Browser closed.");
  console.log("Bot finished successfully.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});