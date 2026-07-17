import fs from 'fs';

try {
  const dataPath = "c:\\Users\\Meet Patel\\Meetronix Main Folder\\Meetronix-Site\\Meetronix\\framer-hero-data.json";
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  function dumpNode(node, depth = 0) {
    const indent = '  '.repeat(depth);
    let info = `${indent}- ${node.name || node.$componentDisplayName || node.type}`;
    if (node.attributes) {
      const { left, right, top, bottom, width, height, position } = node.attributes;
      if (position === 'absolute') {
        info += ` [abs: ${top ? 'T:'+top : ''} ${bottom ? 'B:'+bottom : ''} ${left ? 'L:'+left : ''} ${right ? 'R:'+right : ''}]`;
      } else {
        info += ` [${position} w:${width} h:${height}]`;
      }
      if (node.attributes.text) info += ` text: "${node.attributes.text}"`;
      if (node.attributes.image) info += ` image: ${node.attributes.image.substring(0, 30)}...`;
      if (node.attributes.src) info += ` src: ${node.attributes.src.substring(0, 30)}...`;
    }
    console.log(info);
    
    if (node.children) {
      node.children.forEach(c => dumpNode(c, depth + 1));
    }
  }
  
  dumpNode(data);

} catch (e) {
  console.error("Error:", e.stack || e);
}
