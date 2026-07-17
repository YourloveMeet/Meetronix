const fs = require('fs');

const data = fs.readFileSync('fuel_framer_data.json', 'utf8');

const imgs = data.match(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9]+\.(png|jpg|jpeg|webp)/g);
console.log("Images:");
console.log([...new Set(imgs)]);

const parts = data.split('"');
const possibleTitles = parts.filter(p => p.length > 5 && p.length < 30 && /^[A-Z][a-zA-Z0-9\s]+$/.test(p));
console.log("Possible Titles:");
console.log([...new Set(possibleTitles)]);
