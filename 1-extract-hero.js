import fs from 'fs';

try {
  const dataPath = "c:\\Users\\Meet Patel\\Meetronix Main Folder\\Meetronix-Site\\Meetronix\\framer-homepage-data.json";
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  let targetNode = null;
  function findNode(node, id) {
    if (node.id === id) {
      return node;
    }
    if (node.children) {
      for (const child of node.children) {
        const found = findNode(child, id);
        if (found) return found;
      }
    }
    return null;
  }
  
  targetNode = findNode(data, "oG7iyaqyh");
  
  if (targetNode) {
    const reportPath = "c:\\Users\\Meet Patel\\Meetronix Main Folder\\Meetronix-Site\\Meetronix\\framer-hero-data.json";
    fs.writeFileSync(reportPath, JSON.stringify(targetNode, null, 2));
    console.log("Hero data saved to " + reportPath);
  } else {
    console.log("Hero node not found in JSON");
  }

} catch (e) {
  console.error("Error:", e.stack || e);
}
