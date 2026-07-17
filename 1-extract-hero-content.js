import fs from 'fs';

try {
  const dataPath = "c:\\Users\\Meet Patel\\Meetronix Main Folder\\Meetronix-Site\\Meetronix\\framer-hero-data.json";
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  const texts = [];
  const images = [];

  function traverse(node) {
    if (node.text) {
        texts.push(node.text);
    }
    if (node.attributes) {
        if (node.attributes.text) texts.push(node.attributes.text);
        
        Object.entries(node.attributes).forEach(([key, value]) => {
            if (typeof value === 'string' && value.includes('framerusercontent.com/images')) {
              images.push(value);
            }
        });
    }

    if (node.children) {
      node.children.forEach(traverse);
    }
  }
  
  traverse(data);
  
  console.log("--- HERO TEXTS ---");
  console.log(JSON.stringify(texts, null, 2));
  console.log("--- HERO IMAGES ---");
  console.log(JSON.stringify(images, null, 2));

} catch (e) {
  console.error("Error:", e.stack || e);
}
