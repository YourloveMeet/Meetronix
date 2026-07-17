const fs = require('fs');

async function run() {
  try {
    const result = await framer.agent.serialize({ id: "xDAWNj5cS", depth: 10 });
    const outputPath = "c:\\Users\\Meet Patel\\Meetronix Main Folder\\Meetronix-Site\\Meetronix\\framer-component-navbar.json";
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    console.log("Navbar component saved to " + outputPath);
  } catch (e) {
    console.error("Error:", e.stack || e);
  }
}
run();
