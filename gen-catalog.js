const fs = require("fs");

const IMG = [
  "https://i.imgur.com/lYfKfO9.png", "https://i.imgur.com/lbJ1yug.png", "https://i.imgur.com/ZFmsQ1K.png",
  "https://i.imgur.com/4lOiOqY.png", "https://i.imgur.com/HbRZL1l.png", "https://i.imgur.com/Y5SLD4Q.png",
  "https://i.imgur.com/6k6nWZb.png", "https://i.imgur.com/WC42I3X.png", "https://i.imgur.com/0gthUwl.png",
  "https://i.imgur.com/3Vayw1Y.png", "https://i.imgur.com/64a7OLu.png", "https://i.imgur.com/kfCVpQm.png",
  "https://i.imgur.com/X4v3Nwn.png", "https://i.imgur.com/SeP3G44.png", "https://i.imgur.com/JnUeGxO.png",
  "https://i.imgur.com/3u0o3xV.png", "https://i.imgur.com/d70QJ6H.png", "https://i.imgur.com/nVxDLrC.png",
  "https://i.imgur.com/0q2YZB6.png", "https://i.imgur.com/3A5j3OB.png", "https://i.imgur.com/cpOkKSo.png",
  "https://i.imgur.com/mCH0z9x.png", "https://i.imgur.com/MhXq2lC.png", "https://i.imgur.com/N6k0R9H.png",
  "https://i.imgur.com/EjczZLk.png", "https://i.imgur.com/eq56SmZ.png", "https://i.imgur.com/jCV3sAq.png",
  "https://i.imgur.com/TJ3mgdx.png", "https://i.imgur.com/LXQhQq1.png", "https://i.imgur.com/O0kZhQh.png",
  "https://i.imgur.com/FUygw7O.png", "https://i.imgur.com/0JcMcnx.png", "https://i.imgur.com/yFsMFyb.png",
  "https://i.imgur.com/pxjDXYO.png", "https://i.imgur.com/c0L9Q8Y.png", "https://i.imgur.com/1CmfI3h.png",
  "https://i.imgur.com/3Tk4W9D.png", "https://i.imgur.com/BrP0w1Q.png", "https://i.imgur.com/LXGzC9k.png",
  "https://i.imgur.com/Jcd64Hq.png", "https://i.imgur.com/NOuGJFx.png", "https://i.imgur.com/DAgW5cY.png",
  "https://i.imgur.com/e4a1cU7.png", "https://i.imgur.com/HmWwVQ8.png", "https://i.imgur.com/lXzdxrF.png",
  "https://i.imgur.com/m4f3nFj.png", "https://i.imgur.com/oP2sQXa.png", "https://i.imgur.com/nMzfG1i.png",
  "https://i.imgur.com/qTgLljn.png", "https://i.imgur.com/EYfpXGZ.png", "https://i.imgur.com/yJ2tQj3.png",
  "https://i.imgur.com/3QyLQpX.png", "https://i.imgur.com/E4XCRYf.png", "https://i.imgur.com/iwlfY98.png",
  "https://i.imgur.com/XmZ37kX.png", "https://i.imgur.com/dj0jP3Z.png", "https://i.imgur.com/ZkX3VJn.png",
  "https://i.imgur.com/vtK9xq1.png", "https://i.imgur.com/HX6kYcF.png", "https://i.imgur.com/0Z1Eo6k.png",
  "https://i.imgur.com/mzGVku7.png", "https://i.imgur.com/B0CLb8i.png", "https://i.imgur.com/0j6vP4R.png",
  "https://i.imgur.com/KFgKg7c.png", "https://i.imgur.com/ZBnhUHp.png", "https://i.imgur.com/1LZ3RCH.png",
  "https://i.imgur.com/qvK5NHh.png", "https://i.imgur.com/ZQF0lUY.png", "https://i.imgur.com/UZg5k9u.png",
  "https://i.imgur.com/6qgZ7Wh.png", "https://i.imgur.com/4TbSjUX.png", "https://i.imgur.com/0j9G6dQ.png",
  "https://i.imgur.com/3vKq1T9.png", "https://i.imgur.com/xwLxHLf.png", "https://i.imgur.com/ixs3hKg.png",
  "https://i.imgur.com/6zZk1Io.png", "https://i.imgur.com/07jWk2M.png", "https://i.imgur.com/lf5r2Y7.png",
  "https://i.imgur.com/yb28PZ2.png", "https://i.imgur.com/YyhMBI4.png",
];

const CATALOG = {
  "Hot Wheels": [2290, ["Bone Shaker", "Twin Mill", "Deora II", "Rip Rod", "Speed Blaster", "Street Creeper", "Night Shifter", "Carbonator", "Driftsta", "Mad Manga", "Tooligan", "Kool Kombi", "Grasshopper", "Quick Bite", "Rigor Motor", "Belted", "Phastasm", "RocketFire", "Sod Crusher", "Quick N Sic", "Carbonic", "HW50 Concept", "Baja Bison T5", "Slide Kick", "Fast 4WD", "Heavy Hitch", "Rig Storm", "Tanknator", "Invader", "Skull Crusher", "Night Burner", "Track Ripper", "Draftnator", "Muscle Tone", "T-Bucket", "Pass'n Gasser", "Straight Pipe", "Haulin' Gas", "Mod Rod", "Volkswagen Drag Bus", "Purple Passion", "Seared Tuner", "Zomboni", "Sharkruiser", "Custom '77 Van"]],
  Chevrolet: [2490, ["Camaro SS", "Corvette Z06", "Impala Retro", "Bel Air Classic", "Nova SS", "Camaro ZL1", "C10 Pickup", "Chevelle SS", "Trailblazer RS", "Corvette Stingray", "Camaro Z28", "El Camino", "Silverado Trail Boss", "Corvette C8.R", "Blazer EV", "Tahoe RST", "Suburban HD", "Malibu SS", "SS 454", "Monte Carlo", "Corvette Grand Sport", "Colorado ZR2", "K5 Blazer", "Corvette E-Ray", "Camaro COPO", "Apache Fleetside", "Corvette C6", "Camaro IROC-Z", "Chevelle Laguna", "Impala SS", "Corvette C7 ZR1", "Silverado EV", "Fleetline", "Master Deluxe", "Vega GT"]],
  Ford: [2490, ["Mustang GT", "F-150 Raptor", "GT Supercar", "Escort RS2000", "Bronco Heritage", "Torino GT", "Maverick Pickup", "Thunderbird Retro", "Fiesta ST", "Explorer ST", "Mustang Mach 1", "Mustang Shelby GT500", "Focus RS", "Ranger Raptor", "GT40", "Bronco R", "F-150 Lightning", "Mustang Dark Horse", "Galaxie 500", "Fairlane Thunderbolt", "Mustang Boss 302", "Mustang Convertible", "F-100", "Ranchero", "GT Mk II", "Mustang SVO", "Escort Mexico", "Sierra Cosworth", "Bronco Wildtrak", "Puma ST", "GT Heritage Edition", "Crown Victoria"]],
  Dodge: [2590, ["Challenger SRT Hellcat", "Charger Daytona", "Viper ACR", "Ram 1500 TRX", "Challenger R/T", "Coronet Super Bee", "Dart Swinger", "Power Wagon", "Charger SRT", "Viper GTS", "Durango SRT", "Challenger Demon", "Charger Hellcat Widebody", "Ram Rebel", "Magnum SRT8", "Neon SRT-4", "Viper RT/10", "Challenger T/A", "Super Bee", "Charger 1969", "Ram 2500", "Challenger Scat Pack", "Viper ACR-E", "Stealth"]],
  Plymouth: [2490, ["Barracuda Formula S", "Cuda", "Road Runner", "Superbird", "Duster", "Fury GT", "GTX", "Belvedere", "Satellite", "Valiant"]],
  Chrysler: [2490, ["300C SRT8", "PT Cruiser", "Crossfire", "Imperial", "LeBaron", "300 S", "Airflow", "New Yorker"]],
  Pontiac: [2490, ["Firebird Trans Am", "GTO Judge", "Grand Prix", "Bonneville", "Fiero", "G8 GXP", "Solstice", "Tempest", "Catalina", "Grand Am"]],
  Buick: [2390, ["Grand National GNX", "Regal GS", "Skylark", "Riviera", "GSX", "Century", "Wildcat", "Electra", "Encore GX"]],
  Cadillac: [2690, ["CTS-V", "Escalade", "Eldorado", "CT5-V Blackwing", "ATS-V", "DeVille", "Fleetwood", "CT4-V", "Lyriq", "Cien Concept"]],
  GMC: [2590, ["Sierra Denali", "Syclone", "Typhoon", "Hummer EV", "Canyon AT4", "Yukon AT4", "Savana", "Jimmy", "Vandura"]],
  Jeep: [2590, ["Wrangler Rubicon", "Gladiator", "Grand Cherokee Trackhawk", "CJ5", "Cherokee XJ", "Compass", "Renegade", "Wagoneer", "Scrambler"]],
  Ram: [2590, ["1500 TRX", "2500 Power Wagon", "ProMaster", "Rebel", "Limited", "Dakota"]],
  Shelby: [3190, ["Cobra 427", "GT350", "GT500", "Daytona Coupe", "Series 1", "Mustang Super Snake", "Cobra Concept"]],
  Toyota: [2490, ["Supra GR", "AE86 Trueno", "2000GT", "Celica GT-Four", "Land Cruiser", "MR2", "Camry TRD", "Hilux GR Sport", "Prius Prime", "Supra A90", "GR Yaris", "GR Corolla", "Tacoma TRD", "4Runner TRD", "Soarer", "Chaser JZX100", "Mark II", "Crown", "Century", "FJ Cruiser", "Celica Supra", "Starlet Glanza", "Altezza", "MR-S", "Tundra TRD", "bZ4X", "GR86", "C-HR GR Sport"]],
  Nissan: [2590, ["Skyline GT-R R34", "Silvia S15", "370Z Nismo", "GT-R R35", "Patrol Supercharged", "Fairlady Z", "300ZX Twin Turbo", "Leaf Nismo", "Patrol Safari", "240SX", "180SX", "Laurel", "Gloria", "Pulsar GTI-R", "Stagea", "Figaro", "Sunny Truck", "Hardbody", "Titan", "Armada", "Z Proto", "GT-R Nismo", "Silvia K", "Cedric", "R32 GT-R"]],
  Honda: [2490, ["Civic Type R", "NSX", "S2000", "Integra Type R", "Prelude", "CRX Si", "Accord", "Beat", "City Turbo II", "CR-Z", "S800", "Civic Si", "NSX-R", "Integra GS-R", "Odyssey", "Ridgeline", "Pilot", "Passport", "Element", "Fit"]],
  Mazda: [2490, ["RX-7 FD", "MX-5 Miata", "RX-8", "Cosmo", "787B", "RX-3", "Familia", "Roadster", "CX-5", "323 GTX", "Autozam AZ-1", "BT-50"]],
  Subaru: [2490, ["WRX STI", "BRZ", "Impreza 22B", "Legacy", "Forester", "SVX", "BRAT", "Alcyone", "Levorg", "Crosstrek"]],
  Mitsubishi: [2490, ["Lancer Evolution IX", "3000GT", "Eclipse", "Galant VR-4", "Pajero", "Starion", "FTO", "Mirage Cyborg", "Delica", "Lancer Evo VI"]],
  Lexus: [2990, ["LFA", "RC F", "IS F", "LC 500", "GS F", "SC 300", "LS 500", "NX F Sport", "RX 500h"]],
  Acura: [2790, ["NSX", "Integra Type S", "RSX", "Legend", "TL Type-S", "MDX Type S", "NSX GT3 Evo"]],
  Infiniti: [2690, ["G35", "Q60 Red Sport", "FX50", "V35 Skyline", "Project Black S"]],
  Hyundai: [2390, ["Veloster N", "i30 N", "Genesis Coupe", "Elantra N", "Kona N", "Ioniq 5 N", "Tucson N Line", "Santa Cruz"]],
  Kia: [2390, ["Stinger GT", "EV6 GT", "Ceed GT", "Sportage X-Pro", "Telluride"]],
  BMW: [2890, ["M3 E46", "M4 GTS", "2002 Turbo", "M1", "Z4 M", "M5 CS", "i8", "M2", "507", "3.0 CSL", "M3 GTR", "M6", "850 CSi", "X5 M", "i4 M50", "M8 Competition", "E30 M3", "Z8", "1M Coupe"]],
  "Mercedes-Benz": [2990, ["300 SL", "AMG GT", "190E Evo II", "SLS AMG", "CLK GTR", "Unimog", "G-Wagon", "C63 AMG", "SLR McLaren", "AMG One", "E55 AMG", "500 SEC", "AMG GT Black Series", "SL 63", "EQS", "C111"]],
  Audi: [2890, ["Quattro", "R8", "RS6 Avant", "Sport Quattro", "TT RS", "RS4", "R8 LMS", "e-tron GT", "RS3", "S1 Quattro", "90 Quattro", "R18", "TT Coupe"]],
  Volkswagen: [2390, ["Golf GTI", "Beetle", "Bus", "Corrado VR6", "Scirocco", "Golf R", "ID.R", "Karmann Ghia", "Jetta GLI", "Golf Mk1", "Polo GTI", "Arteon", "T1 Pickup"]],
  Porsche: [3290, ["911 Turbo S", "911 GT3 RS", "718 Cayman GT4", "Taycan Turbo", "918 Spyder", "Macan Turbo", "Panamera GTS", "911 Carrera S", "911 Targa 4S", "911 Speedster", "959", "935", "Carrera GT", "356 Speedster", "944 Turbo"]],
  Ferrari: [3790, ["SF90 Stradale", "F8 Tributo", "812 Superfast", "Monza SP2", "Roma", "Portofino M", "LaFerrari", "Enzo", "California T", "Testarossa", "250 GTO", "288 GTO", "F40", "F50", "512 TR", "458 Speciale", "599 GTO", "F12 Berlinetta", "Daytona SP3"]],
  Lamborghini: [3690, ["Aventador SVJ", "Huracan EVO", "Urus", "Sian FKP 37", "Countach LPI 800-4", "Gallardo LP570", "Veneno", "Reventon", "Diablo SV", "Murcielago LP640", "Miura", "Espada", "Jalpa", "Centenario", "SC20"]],
  McLaren: [3890, ["P1 GTR", "720S", "GT", "765LT", "Speedtail", "Elva", "F1", "MP4-12C", "600LT", "570S", "Senna", "Artura", "675LT", "12C GT3", "Solus GT"]],
  Bugatti: [4290, ["Chiron", "Veyron", "Bolide", "Divo", "Centodieci", "EB110", "Type 57SC", "Chiron Super Sport"]],
  Pagani: [4190, ["Huayra", "Zonda R", "Utopia", "Imola", "Codalunga"]],
  Koenigsegg: [4290, ["Jesko", "Agera RS", "Regera", "Gemera", "CC850", "One:1", "CCR"]],
  Rimac: [3990, ["Nevera", "Concept One", "Concept Two"]],
  "Aston Martin": [3490, ["Vulcan", "DB5", "DBS", "Vantage", "Valhalla", "Valkyrie", "One-77", "DB11", "Victor", "V12 Speedster"]],
  Jaguar: [3190, ["E-Type", "F-Type", "XJ220", "D-Type", "XKSS", "XE SV Project 8", "C-X75", "F-Pace SVR"]],
  Lotus: [3090, ["Evija", "Elise", "Exige", "Esprit", "Emira", "Evora GT", "3-Eleven"]],
  "Land Rover": [2890, ["Defender", "Range Rover Sport", "Series III", "Discovery", "Velar"]],
  Bentley: [3690, ["Continental GT", "Speed 6", "Blower", "Mulliner Bacalar"]],
  "Rolls-Royce": [3990, ["Phantom", "Cullinan", "Spectre", "Boat Tail"]],
  Tesla: [2790, ["Roadster", "Model S Plaid", "Cybertruck", "Model 3 Performance", "Model X", "Model Y", "Semi"]],
  Rivian: [2890, ["R1T", "R1S", "R3", "EDV"]],
  Lucid: [3190, ["Air Sapphire", "Air Dream", "Gravity"]],
  Volvo: [2590, ["850 T-5R", "240 Turbo", "P1800", "XC90", "C30 R-Design"]],
  Mini: [2390, ["Cooper S", "Cooper Works", "Clubman", "Moke", "Countryman JCW"]],
  Fiat: [2290, ["500 Abarth", "X1/9", "131 Abarth", "Dino", "Punto HGT"]],
  "Alfa Romeo": [2790, ["Giulia GTA", "4C", "8C Competizione", "Giulietta", "33 Stradale", "GTV", "155 V6 TI", "TZ2"]],
  Peugeot: [2490, ["205 T16", "405 T16", "908 HDi", "206 WRC", "9X8"]],
  Renault: [2490, ["5 Turbo", "Clio V6", "Alpine A110", "Megane RS", "R5 Turbo II"]],
  Alpine: [2890, ["A110", "A310", "A442", "A220"]],
  Citroen: [2390, ["DS", "2CV", "BX 4TC", "SM", "Visa Mille Pistes"]],
  Maserati: [3390, ["MC20", "Ghibli", "GranTurismo", "Tipo 61", "Bora"]],
  "De Tomaso": [3290, ["Pantera", "Mangusta", "P72"]],
  AMC: [2290, ["Gremlin", "Pacer", "Javelin AMX", "Hornet SC/360"]],
  International: [2490, ["Scout II", "Harvester Metro", "Travelall"]],
  Hummer: [2790, ["H1", "H2", "H3T", "EV Pickup"]],
  RUF: [3590, ["CTR Yellowbird", "SCR", "RT12", "BTR"]],
  "W Motors": [3890, ["Lykan HyperSport", "Fenyr Supersport"]],
};

const LUXURY = ["Bugatti", "Koenigsegg", "Pagani", "Rimac", "Rolls-Royce", "W Motors"];

const catalogObj = {};
let count = 0;
for (const [brand, [base, models]] of Object.entries(CATALOG)) {
  catalogObj[brand] = { base, models };
  count += models.length;
}

const out = `// Hot Wheels catalog — expanded die-cast inventory (${count}+ cars)
const HW_BRAND_CATALOG = ${JSON.stringify(catalogObj, null, 2)};

function buildHwCarsRaw() {
  const list = [];
  let idx = 0;
  const luxury = new Set(${JSON.stringify(LUXURY)});
  for (const [brand, { base, models }] of Object.entries(HW_BRAND_CATALOG)) {
    for (let i = 0; i < models.length; i++) {
      const model = models[i];
      let price = base + (i % 8) * 45 + (idx % 5) * 20;
      if (luxury.has(brand)) price = Math.max(price, 3800);
      price = Math.min(price, 4490);
      const name = brand === "Hot Wheels" ? \`2025 \${model}\` : \`2025 \${brand} \${model}\`;
      list.push({ name, brand, price });
      idx++;
    }
  }
  const seen = new Set();
  return list.filter((c) => {
    if (seen.has(c.name)) return false;
    seen.add(c.name);
    return true;
  });
}
`;

fs.writeFileSync("cars-data.js", out);
console.log("cars:", count, "bytes:", out.length);
