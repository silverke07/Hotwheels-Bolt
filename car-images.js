// Reliable die-cast card images (SVG data URIs — no broken external hosts)

const BRAND_PALETTES = {
  "Hot Wheels": ["#e63946", "#ff8a00"],
  Chevrolet: ["#f4c300", "#1a1a1a"],
  Ford: ["#003478", "#2d6cdf"],
  Dodge: ["#c41230", "#1a1a1a"],
  Plymouth: ["#e85d04", "#14213d"],
  Chrysler: ["#004b87", "#7bafd4"],
  Pontiac: ["#c41e3a", "#ffd700"],
  Buick: ["#8b0000", "#c0c0c0"],
  Cadillac: ["#2f2f2f", "#d4af37"],
  GMC: ["#c8102e", "#1a1a1a"],
  Jeep: ["#4a7023", "#1a1a1a"],
  Ram: ["#1a1a1a", "#c8102e"],
  Shelby: ["#003087", "#ffffff"],
  Toyota: ["#eb0a1e", "#1a1a1a"],
  Nissan: ["#c3002f", "#1a1a1a"],
  Honda: ["#cc0000", "#1a1a1a"],
  Mazda: ["#101010", "#910028"],
  Subaru: ["#013c74", "#ffc72c"],
  Mitsubishi: ["#e60012", "#1a1a1a"],
  Lexus: ["#1a1a1a", "#c0c0c0"],
  Acura: ["#1a1a1a", "#e4163a"],
  Infiniti: ["#1a1a1a", "#c4c4c4"],
  Hyundai: ["#002c5f", "#a2c8e0"],
  Kia: ["#05141f", "#bb162b"],
  BMW: ["#0066b1", "#1a1a1a"],
  "Mercedes-Benz": ["#1a1a1a", "#c0c0c0"],
  Audi: ["#bb0a30", "#1a1a1a"],
  Volkswagen: ["#001e50", "#66b2e5"],
  Porsche: ["#d5001c", "#1a1a1a"],
  Ferrari: ["#dc0000", "#ffd700"],
  Lamborghini: ["#f6c700", "#1a1a1a"],
  McLaren: ["#ff8000", "#1a1a1a"],
  Bugatti: ["#1a1a1a", "#c4a35a"],
  Pagani: ["#4a90a4", "#1a1a1a"],
  Koenigsegg: ["#003087", "#ffcc00"],
  Rimac: ["#00a3e0", "#1a1a1a"],
  "Aston Martin": ["#006341", "#1a1a1a"],
  Jaguar: ["#1a472a", "#9e9e9e"],
  Lotus: ["#fcd600", "#005a2b"],
  "Land Rover": ["#005a2b", "#1a1a1a"],
  Bentley: ["#1a472a", "#9e7f4f"],
  "Rolls-Royce": ["#1a1a1a", "#c4a35a"],
  Tesla: ["#cc0000", "#1a1a1a"],
  Rivian: ["#2d4f3e", "#c4a35a"],
  Lucid: ["#b8b8b8", "#1a1a1a"],
  Volvo: ["#003057", "#c4c4c4"],
  Mini: ["#1a1a1a", "#ffffff"],
  Fiat: ["#9d2235", "#1a1a1a"],
  "Alfa Romeo": ["#981e32", "#1a1a1a"],
  Peugeot: ["#002395", "#1a1a1a"],
  Renault: ["#ffcc00", "#1a1a1a"],
  Alpine: ["#003399", "#ffffff"],
  Citroen: ["#d40000", "#1a1a1a"],
  Maserati: ["#0c2340", "#c4a35a"],
  "De Tomaso": ["#1a1a1a", "#c0c0c0"],
  AMC: ["#1a472a", "#c4c4c4"],
  International: ["#c8102e", "#1a1a1a"],
  Hummer: ["#4a7023", "#1a1a1a"],
  RUF: ["#ffd700", "#1a1a1a"],
  "W Motors": ["#1a1a1a", "#c4a35a"],
};

const SERIES_ACCENTS = {
  Mainline: "#ffcd39",
  Premium: "#7ec8ff",
  "Treasure Hunt": "#ffd700",
  "Super Treasure Hunt": "#fff4b3",
};

const imageCache = new Map();

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function escapeSvgText(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapLines(text, maxLen) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxLen && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function getBrandColors(brand) {
  if (BRAND_PALETTES[brand]) return BRAND_PALETTES[brand];
  const h = hashString(brand);
  const hue = h % 360;
  return [`hsl(${hue}, 55%, 28%)`, `hsl(${(hue + 40) % 360}, 70%, 45%)`];
}

function getCarImageUrl(car) {
  const key = car.id ?? car.name;
  if (imageCache.has(key)) return imageCache.get(key);

  const [primary, secondary] = getBrandColors(car.brand);
  const accent = SERIES_ACCENTS[car.series] || "#ffcd39";
  const title = (car.name || "").replace(/^2025\s+/, "");
  const lines = wrapLines(title, 22);
  const lineY = lines.length === 1 ? 248 : lines.length === 2 ? 238 : 228;

  const titleSvg = lines
    .map((line, i) => {
      const y = lineY + i * 18;
      return `<text x="200" y="${y}" text-anchor="middle" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="700">${escapeSvgText(line)}</text>`;
    })
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300" role="img" aria-label="${escapeSvgText(car.name || "Hot Wheels car")}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${primary}"/>
      <stop offset="100%" stop-color="${secondary}"/>
    </linearGradient>
    <linearGradient id="blister" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" rx="12" fill="url(#bg)"/>
  <rect x="16" y="16" width="368" height="268" rx="10" fill="url(#blister)" stroke="#ffffff" stroke-opacity="0.15"/>
  <rect x="28" y="28" width="344" height="44" rx="6" fill="#111111" fill-opacity="0.55"/>
  <text x="200" y="56" text-anchor="middle" fill="${accent}" font-family="Arial Black,Arial,Helvetica,sans-serif" font-size="18" font-weight="900" letter-spacing="2">HOT WHEELS</text>
  <g transform="translate(200 145)">
    <ellipse cx="0" cy="42" rx="92" ry="10" fill="#000000" fill-opacity="0.35"/>
    <path d="M-88 18 L-62 -8 L62 -8 L88 18 L78 34 L-78 34 Z" fill="#1a1a1a" stroke="#ffffff" stroke-opacity="0.35" stroke-width="2"/>
    <path d="M-72 18 L-50 0 L50 0 L72 18" fill="${accent}" fill-opacity="0.85"/>
    <rect x="-52" y="-2" width="104" height="18" rx="4" fill="#2a2a2a" stroke="#ffffff" stroke-opacity="0.2"/>
    <circle cx="-58" cy="30" r="16" fill="#222" stroke="#ccc" stroke-width="3"/>
    <circle cx="58" cy="30" r="16" fill="#222" stroke="#ccc" stroke-width="3"/>
    <circle cx="-58" cy="30" r="7" fill="#888"/>
    <circle cx="58" cy="30" r="7" fill="#888"/>
  </g>
  ${titleSvg}
  <text x="200" y="278" text-anchor="middle" fill="#ffffff" fill-opacity="0.75" font-family="Arial,Helvetica,sans-serif" font-size="11">${escapeSvgText(car.brand)} · 1:64</text>
</svg>`;

  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  imageCache.set(key, url);
  return url;
}
