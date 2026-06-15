import fs from "fs";
import path from "path";

/**
 * CI Reporter
 * Aggregates output files from Pi pipeline stages and generates a unified report.
 */
async function generateReport() {
  const reportDir = path.resolve("ci-report");
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

  const summaryFile = path.join(reportDir, "summary.md");
  const reportLines: string[] = [];

  reportLines.push(`# 🧩 Pi CI Summary Report`);
  reportLines.push(`Generated: ${new Date().toISOString()}`);

  const stages = ["review", "test", "security", "deploy-check"];

  for (const stage of stages) {
    const reportPath = path.resolve(`pi-package/prompts/${stage}.md`);
    if (fs.existsSync(reportPath)) {
      reportLines.push(`\n## ${stage.toUpperCase()} Stage`);
      reportLines.push(fs.readFileSync(reportPath, "utf8"));
    } else {
      reportLines.push(`\n## ${stage.toUpperCase()} Stage`);
      reportLines.push(`No report data found.`);
    }
  }

  fs.writeFileSync(summaryFile, reportLines.join("\n"));
  console.log(`✅ CI report generated at: ${summaryFile}`);
}

generateReport().catch((err) => {
  console.error("❌ Failed to generate CI report:", err);
  process.exit(1);
});