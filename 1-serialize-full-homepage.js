const fs = require('fs');

console.log("Serializing full homepage...");
try {
  // We want to capture the entire structure of the homepage, so we use depth 10
  const result = await framer.agent.serialize({ id: "augiA20Il", depth: 10 });
  
  const outputPath = "C:\\Users\\Meet Patel\\Meetronix Main Folder\\Meetronix-Site\\Meetronix\\framer-homepage-data.json";
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log("Successfully saved homepage data to " + outputPath);
} catch (e) {
  console.error("Error:", e.stack || e);
}
