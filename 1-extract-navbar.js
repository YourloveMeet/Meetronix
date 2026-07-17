import fs from 'fs';

try {
  const dataPath = "c:\\Users\\Meet Patel\\Meetronix Main Folder\\Meetronix-Site\\Meetronix\\framer-homepage-data.json";
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  let targetNode = null;
  function findNode(node, name) {
    if (node.name === name || node.$componentDisplayName === name) {
      return node;
    }
    if (node.children) {
      for (const child of node.children) {
        const found = findNode(child, name);
        if (found) return found;
      }
    }
    return null;
  }
  
  targetNode = findNode(data, "Navigation Bar");
  
  if (targetNode) {
    const reportPath = "c:\\Users\\Meet Patel\\Meetronix Main Folder\\Meetronix-Site\\Meetronix\\framer-navbar-data.json";
    fs.writeFileSync(reportPath, JSON.stringify(targetNode, null, 2));
    console.log("Navbar data saved to " + reportPath);
  } else {
    console.log("Navigation Bar not found in JSON");
  }

} catch (e) {
  console.error("Error:", e.stack || e);
}
