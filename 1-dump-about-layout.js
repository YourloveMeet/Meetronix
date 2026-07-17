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
  
  // The About section was identified as N5ChDGr3A in the earlier dump
  targetNode = findNode(data, "N5ChDGr3A");
  
  if (targetNode) {
    function dumpNode(node, depth = 0) {
      const indent = '  '.repeat(depth);
      let info = `${indent}- ${node.name || node.$componentDisplayName || node.type}`;
      if (node.attributes) {
        const { left, right, top, bottom, width, height, position, backgroundColor } = node.attributes;
        if (position === 'absolute') {
          info += ` [abs: ${top ? 'T:'+top : ''} ${bottom ? 'B:'+bottom : ''} ${left ? 'L:'+left : ''} ${right ? 'R:'+right : ''}]`;
        } else {
          info += ` [${position} w:${width} h:${height}]`;
        }
        if (backgroundColor) info += ` bg: ${backgroundColor}`;
        if (node.attributes.text) info += ` text: "${node.attributes.text}"`;
        if (node.attributes.image) info += ` image: ${node.attributes.image.substring(0, 30)}...`;
        if (node.attributes.src) info += ` src: ${node.attributes.src.substring(0, 30)}...`;
      }
      console.log(info);
      
      if (node.children) {
        node.children.forEach(c => dumpNode(c, depth + 1));
      }
    }
    
    console.log("--- ABOUT SECTION DUMP ---");
    dumpNode(targetNode);
  } else {
    console.log("About node not found in JSON");
  }

} catch (e) {
  console.error("Error:", e.stack || e);
}
