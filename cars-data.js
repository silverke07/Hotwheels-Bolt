// Hot Wheels catalog — expanded die-cast inventory (620+ cars)
const HW_BRAND_CATALOG = {
  "Hot Wheels": {
    "base": 2290,
    "models": [
      "Bone Shaker",
      "Twin Mill",
      "Deora II",
      "Rip Rod",
      "Speed Blaster",
      "Street Creeper",
      "Night Shifter",
      "Carbonator",
      "Driftsta",
      "Mad Manga",
      "Tooligan",
      "Kool Kombi",
      "Grasshopper",
      "Quick Bite",
      "Rigor Motor",
      "Belted",
      "Phastasm",
      "RocketFire",
      "Sod Crusher",
      "Quick N Sic",
      "Carbonic",
      "HW50 Concept",
      "Baja Bison T5",
      "Slide Kick",
      "Fast 4WD",
      "Heavy Hitch",
      "Rig Storm",
      "Tanknator",
      "Invader",
      "Skull Crusher",
      "Night Burner",
      "Track Ripper",
      "Draftnator",
      "Muscle Tone",
      "T-Bucket",
      "Pass'n Gasser",
      "Straight Pipe",
      "Haulin' Gas",
      "Mod Rod",
      "Volkswagen Drag Bus",
      "Purple Passion",
      "Seared Tuner",
      "Zomboni",
      "Sharkruiser",
      "Custom '77 Van"
    ]
  },
  "Chevrolet": {
    "base": 2490,
    "models": [
      "Camaro SS",
      "Corvette Z06",
      "Impala Retro",
      "Bel Air Classic",
      "Nova SS",
      "Camaro ZL1",
      "C10 Pickup",
      "Chevelle SS",
      "Trailblazer RS",
      "Corvette Stingray",
      "Camaro Z28",
      "El Camino",
      "Silverado Trail Boss",
      "Corvette C8.R",
      "Blazer EV",
      "Tahoe RST",
      "Suburban HD",
      "Malibu SS",
      "SS 454",
      "Monte Carlo",
      "Corvette Grand Sport",
      "Colorado ZR2",
      "K5 Blazer",
      "Corvette E-Ray",
      "Camaro COPO",
      "Apache Fleetside",
      "Corvette C6",
      "Camaro IROC-Z",
      "Chevelle Laguna",
      "Impala SS",
      "Corvette C7 ZR1",
      "Silverado EV",
      "Fleetline",
      "Master Deluxe",
      "Vega GT"
    ]
  },
  "Ford": {
    "base": 2490,
    "models": [
      "Mustang GT",
      "F-150 Raptor",
      "GT Supercar",
      "Escort RS2000",
      "Bronco Heritage",
      "Torino GT",
      "Maverick Pickup",
      "Thunderbird Retro",
      "Fiesta ST",
      "Explorer ST",
      "Mustang Mach 1",
      "Mustang Shelby GT500",
      "Focus RS",
      "Ranger Raptor",
      "GT40",
      "Bronco R",
      "F-150 Lightning",
      "Mustang Dark Horse",
      "Galaxie 500",
      "Fairlane Thunderbolt",
      "Mustang Boss 302",
      "Mustang Convertible",
      "F-100",
      "Ranchero",
      "GT Mk II",
      "Mustang SVO",
      "Escort Mexico",
      "Sierra Cosworth",
      "Bronco Wildtrak",
      "Puma ST",
      "GT Heritage Edition",
      "Crown Victoria"
    ]
  },
  "Dodge": {
    "base": 2590,
    "models": [
      "Challenger SRT Hellcat",
      "Charger Daytona",
      "Viper ACR",
      "Ram 1500 TRX",
      "Challenger R/T",
      "Coronet Super Bee",
      "Dart Swinger",
      "Power Wagon",
      "Charger SRT",
      "Viper GTS",
      "Durango SRT",
      "Challenger Demon",
      "Charger Hellcat Widebody",
      "Ram Rebel",
      "Magnum SRT8",
      "Neon SRT-4",
      "Viper RT/10",
      "Challenger T/A",
      "Super Bee",
      "Charger 1969",
      "Ram 2500",
      "Challenger Scat Pack",
      "Viper ACR-E",
      "Stealth"
    ]
  },
  "Plymouth": {
    "base": 2490,
    "models": [
      "Barracuda Formula S",
      "Cuda",
      "Road Runner",
      "Superbird",
      "Duster",
      "Fury GT",
      "GTX",
      "Belvedere",
      "Satellite",
      "Valiant"
    ]
  },
  "Chrysler": {
    "base": 2490,
    "models": [
      "300C SRT8",
      "PT Cruiser",
      "Crossfire",
      "Imperial",
      "LeBaron",
      "300 S",
      "Airflow",
      "New Yorker"
    ]
  },
  "Pontiac": {
    "base": 2490,
    "models": [
      "Firebird Trans Am",
      "GTO Judge",
      "Grand Prix",
      "Bonneville",
      "Fiero",
      "G8 GXP",
      "Solstice",
      "Tempest",
      "Catalina",
      "Grand Am"
    ]
  },
  "Buick": {
    "base": 2390,
    "models": [
      "Grand National GNX",
      "Regal GS",
      "Skylark",
      "Riviera",
      "GSX",
      "Century",
      "Wildcat",
      "Electra",
      "Encore GX"
    ]
  },
  "Cadillac": {
    "base": 2690,
    "models": [
      "CTS-V",
      "Escalade",
      "Eldorado",
      "CT5-V Blackwing",
      "ATS-V",
      "DeVille",
      "Fleetwood",
      "CT4-V",
      "Lyriq",
      "Cien Concept"
    ]
  },
  "GMC": {
    "base": 2590,
    "models": [
      "Sierra Denali",
      "Syclone",
      "Typhoon",
      "Hummer EV",
      "Canyon AT4",
      "Yukon AT4",
      "Savana",
      "Jimmy",
      "Vandura"
    ]
  },
  "Jeep": {
    "base": 2590,
    "models": [
      "Wrangler Rubicon",
      "Gladiator",
      "Grand Cherokee Trackhawk",
      "CJ5",
      "Cherokee XJ",
      "Compass",
      "Renegade",
      "Wagoneer",
      "Scrambler"
    ]
  },
  "Ram": {
    "base": 2590,
    "models": [
      "1500 TRX",
      "2500 Power Wagon",
      "ProMaster",
      "Rebel",
      "Limited",
      "Dakota"
    ]
  },
  "Shelby": {
    "base": 3190,
    "models": [
      "Cobra 427",
      "GT350",
      "GT500",
      "Daytona Coupe",
      "Series 1",
      "Mustang Super Snake",
      "Cobra Concept"
    ]
  },
  "Toyota": {
    "base": 2490,
    "models": [
      "Supra GR",
      "AE86 Trueno",
      "2000GT",
      "Celica GT-Four",
      "Land Cruiser",
      "MR2",
      "Camry TRD",
      "Hilux GR Sport",
      "Prius Prime",
      "Supra A90",
      "GR Yaris",
      "GR Corolla",
      "Tacoma TRD",
      "4Runner TRD",
      "Soarer",
      "Chaser JZX100",
      "Mark II",
      "Crown",
      "Century",
      "FJ Cruiser",
      "Celica Supra",
      "Starlet Glanza",
      "Altezza",
      "MR-S",
      "Tundra TRD",
      "bZ4X",
      "GR86",
      "C-HR GR Sport"
    ]
  },
  "Nissan": {
    "base": 2590,
    "models": [
      "Skyline GT-R R34",
      "Silvia S15",
      "370Z Nismo",
      "GT-R R35",
      "Patrol Supercharged",
      "Fairlady Z",
      "300ZX Twin Turbo",
      "Leaf Nismo",
      "Patrol Safari",
      "240SX",
      "180SX",
      "Laurel",
      "Gloria",
      "Pulsar GTI-R",
      "Stagea",
      "Figaro",
      "Sunny Truck",
      "Hardbody",
      "Titan",
      "Armada",
      "Z Proto",
      "GT-R Nismo",
      "Silvia K",
      "Cedric",
      "R32 GT-R"
    ]
  },
  "Honda": {
    "base": 2490,
    "models": [
      "Civic Type R",
      "NSX",
      "S2000",
      "Integra Type R",
      "Prelude",
      "CRX Si",
      "Accord",
      "Beat",
      "City Turbo II",
      "CR-Z",
      "S800",
      "Civic Si",
      "NSX-R",
      "Integra GS-R",
      "Odyssey",
      "Ridgeline",
      "Pilot",
      "Passport",
      "Element",
      "Fit"
    ]
  },
  "Mazda": {
    "base": 2490,
    "models": [
      "RX-7 FD",
      "MX-5 Miata",
      "RX-8",
      "Cosmo",
      "787B",
      "RX-3",
      "Familia",
      "Roadster",
      "CX-5",
      "323 GTX",
      "Autozam AZ-1",
      "BT-50"
    ]
  },
  "Subaru": {
    "base": 2490,
    "models": [
      "WRX STI",
      "BRZ",
      "Impreza 22B",
      "Legacy",
      "Forester",
      "SVX",
      "BRAT",
      "Alcyone",
      "Levorg",
      "Crosstrek"
    ]
  },
  "Mitsubishi": {
    "base": 2490,
    "models": [
      "Lancer Evolution IX",
      "3000GT",
      "Eclipse",
      "Galant VR-4",
      "Pajero",
      "Starion",
      "FTO",
      "Mirage Cyborg",
      "Delica",
      "Lancer Evo VI"
    ]
  },
  "Lexus": {
    "base": 2990,
    "models": [
      "LFA",
      "RC F",
      "IS F",
      "LC 500",
      "GS F",
      "SC 300",
      "LS 500",
      "NX F Sport",
      "RX 500h"
    ]
  },
  "Acura": {
    "base": 2790,
    "models": [
      "NSX",
      "Integra Type S",
      "RSX",
      "Legend",
      "TL Type-S",
      "MDX Type S",
      "NSX GT3 Evo"
    ]
  },
  "Infiniti": {
    "base": 2690,
    "models": [
      "G35",
      "Q60 Red Sport",
      "FX50",
      "V35 Skyline",
      "Project Black S"
    ]
  },
  "Hyundai": {
    "base": 2390,
    "models": [
      "Veloster N",
      "i30 N",
      "Genesis Coupe",
      "Elantra N",
      "Kona N",
      "Ioniq 5 N",
      "Tucson N Line",
      "Santa Cruz"
    ]
  },
  "Kia": {
    "base": 2390,
    "models": [
      "Stinger GT",
      "EV6 GT",
      "Ceed GT",
      "Sportage X-Pro",
      "Telluride"
    ]
  },
  "BMW": {
    "base": 2890,
    "models": [
      "M3 E46",
      "M4 GTS",
      "2002 Turbo",
      "M1",
      "Z4 M",
      "M5 CS",
      "i8",
      "M2",
      "507",
      "3.0 CSL",
      "M3 GTR",
      "M6",
      "850 CSi",
      "X5 M",
      "i4 M50",
      "M8 Competition",
      "E30 M3",
      "Z8",
      "1M Coupe"
    ]
  },
  "Mercedes-Benz": {
    "base": 2990,
    "models": [
      "300 SL",
      "AMG GT",
      "190E Evo II",
      "SLS AMG",
      "CLK GTR",
      "Unimog",
      "G-Wagon",
      "C63 AMG",
      "SLR McLaren",
      "AMG One",
      "E55 AMG",
      "500 SEC",
      "AMG GT Black Series",
      "SL 63",
      "EQS",
      "C111"
    ]
  },
  "Audi": {
    "base": 2890,
    "models": [
      "Quattro",
      "R8",
      "RS6 Avant",
      "Sport Quattro",
      "TT RS",
      "RS4",
      "R8 LMS",
      "e-tron GT",
      "RS3",
      "S1 Quattro",
      "90 Quattro",
      "R18",
      "TT Coupe"
    ]
  },
  "Volkswagen": {
    "base": 2390,
    "models": [
      "Golf GTI",
      "Beetle",
      "Bus",
      "Corrado VR6",
      "Scirocco",
      "Golf R",
      "ID.R",
      "Karmann Ghia",
      "Jetta GLI",
      "Golf Mk1",
      "Polo GTI",
      "Arteon",
      "T1 Pickup"
    ]
  },
  "Porsche": {
    "base": 3290,
    "models": [
      "911 Turbo S",
      "911 GT3 RS",
      "718 Cayman GT4",
      "Taycan Turbo",
      "918 Spyder",
      "Macan Turbo",
      "Panamera GTS",
      "911 Carrera S",
      "911 Targa 4S",
      "911 Speedster",
      "959",
      "935",
      "Carrera GT",
      "356 Speedster",
      "944 Turbo"
    ]
  },
  "Ferrari": {
    "base": 3790,
    "models": [
      "SF90 Stradale",
      "F8 Tributo",
      "812 Superfast",
      "Monza SP2",
      "Roma",
      "Portofino M",
      "LaFerrari",
      "Enzo",
      "California T",
      "Testarossa",
      "250 GTO",
      "288 GTO",
      "F40",
      "F50",
      "512 TR",
      "458 Speciale",
      "599 GTO",
      "F12 Berlinetta",
      "Daytona SP3"
    ]
  },
  "Lamborghini": {
    "base": 3690,
    "models": [
      "Aventador SVJ",
      "Huracan EVO",
      "Urus",
      "Sian FKP 37",
      "Countach LPI 800-4",
      "Gallardo LP570",
      "Veneno",
      "Reventon",
      "Diablo SV",
      "Murcielago LP640",
      "Miura",
      "Espada",
      "Jalpa",
      "Centenario",
      "SC20"
    ]
  },
  "McLaren": {
    "base": 3890,
    "models": [
      "P1 GTR",
      "720S",
      "GT",
      "765LT",
      "Speedtail",
      "Elva",
      "F1",
      "MP4-12C",
      "600LT",
      "570S",
      "Senna",
      "Artura",
      "675LT",
      "12C GT3",
      "Solus GT"
    ]
  },
  "Bugatti": {
    "base": 4290,
    "models": [
      "Chiron",
      "Veyron",
      "Bolide",
      "Divo",
      "Centodieci",
      "EB110",
      "Type 57SC",
      "Chiron Super Sport"
    ]
  },
  "Pagani": {
    "base": 4190,
    "models": [
      "Huayra",
      "Zonda R",
      "Utopia",
      "Imola",
      "Codalunga"
    ]
  },
  "Koenigsegg": {
    "base": 4290,
    "models": [
      "Jesko",
      "Agera RS",
      "Regera",
      "Gemera",
      "CC850",
      "One:1",
      "CCR"
    ]
  },
  "Rimac": {
    "base": 3990,
    "models": [
      "Nevera",
      "Concept One",
      "Concept Two"
    ]
  },
  "Aston Martin": {
    "base": 3490,
    "models": [
      "Vulcan",
      "DB5",
      "DBS",
      "Vantage",
      "Valhalla",
      "Valkyrie",
      "One-77",
      "DB11",
      "Victor",
      "V12 Speedster"
    ]
  },
  "Jaguar": {
    "base": 3190,
    "models": [
      "E-Type",
      "F-Type",
      "XJ220",
      "D-Type",
      "XKSS",
      "XE SV Project 8",
      "C-X75",
      "F-Pace SVR"
    ]
  },
  "Lotus": {
    "base": 3090,
    "models": [
      "Evija",
      "Elise",
      "Exige",
      "Esprit",
      "Emira",
      "Evora GT",
      "3-Eleven"
    ]
  },
  "Land Rover": {
    "base": 2890,
    "models": [
      "Defender",
      "Range Rover Sport",
      "Series III",
      "Discovery",
      "Velar"
    ]
  },
  "Bentley": {
    "base": 3690,
    "models": [
      "Continental GT",
      "Speed 6",
      "Blower",
      "Mulliner Bacalar"
    ]
  },
  "Rolls-Royce": {
    "base": 3990,
    "models": [
      "Phantom",
      "Cullinan",
      "Spectre",
      "Boat Tail"
    ]
  },
  "Tesla": {
    "base": 2790,
    "models": [
      "Roadster",
      "Model S Plaid",
      "Cybertruck",
      "Model 3 Performance",
      "Model X",
      "Model Y",
      "Semi"
    ]
  },
  "Rivian": {
    "base": 2890,
    "models": [
      "R1T",
      "R1S",
      "R3",
      "EDV"
    ]
  },
  "Lucid": {
    "base": 3190,
    "models": [
      "Air Sapphire",
      "Air Dream",
      "Gravity"
    ]
  },
  "Volvo": {
    "base": 2590,
    "models": [
      "850 T-5R",
      "240 Turbo",
      "P1800",
      "XC90",
      "C30 R-Design"
    ]
  },
  "Mini": {
    "base": 2390,
    "models": [
      "Cooper S",
      "Cooper Works",
      "Clubman",
      "Moke",
      "Countryman JCW"
    ]
  },
  "Fiat": {
    "base": 2290,
    "models": [
      "500 Abarth",
      "X1/9",
      "131 Abarth",
      "Dino",
      "Punto HGT"
    ]
  },
  "Alfa Romeo": {
    "base": 2790,
    "models": [
      "Giulia GTA",
      "4C",
      "8C Competizione",
      "Giulietta",
      "33 Stradale",
      "GTV",
      "155 V6 TI",
      "TZ2"
    ]
  },
  "Peugeot": {
    "base": 2490,
    "models": [
      "205 T16",
      "405 T16",
      "908 HDi",
      "206 WRC",
      "9X8"
    ]
  },
  "Renault": {
    "base": 2490,
    "models": [
      "5 Turbo",
      "Clio V6",
      "Alpine A110",
      "Megane RS",
      "R5 Turbo II"
    ]
  },
  "Alpine": {
    "base": 2890,
    "models": [
      "A110",
      "A310",
      "A442",
      "A220"
    ]
  },
  "Citroen": {
    "base": 2390,
    "models": [
      "DS",
      "2CV",
      "BX 4TC",
      "SM",
      "Visa Mille Pistes"
    ]
  },
  "Maserati": {
    "base": 3390,
    "models": [
      "MC20",
      "Ghibli",
      "GranTurismo",
      "Tipo 61",
      "Bora"
    ]
  },
  "De Tomaso": {
    "base": 3290,
    "models": [
      "Pantera",
      "Mangusta",
      "P72"
    ]
  },
  "AMC": {
    "base": 2290,
    "models": [
      "Gremlin",
      "Pacer",
      "Javelin AMX",
      "Hornet SC/360"
    ]
  },
  "International": {
    "base": 2490,
    "models": [
      "Scout II",
      "Harvester Metro",
      "Travelall"
    ]
  },
  "Hummer": {
    "base": 2790,
    "models": [
      "H1",
      "H2",
      "H3T",
      "EV Pickup"
    ]
  },
  "RUF": {
    "base": 3590,
    "models": [
      "CTR Yellowbird",
      "SCR",
      "RT12",
      "BTR"
    ]
  },
  "W Motors": {
    "base": 3890,
    "models": [
      "Lykan HyperSport",
      "Fenyr Supersport"
    ]
  }
};

function buildHwCarsRaw() {
  const list = [];
  let idx = 0;
  const luxury = new Set(["Bugatti","Koenigsegg","Pagani","Rimac","Rolls-Royce","W Motors"]);
  for (const [brand, { base, models }] of Object.entries(HW_BRAND_CATALOG)) {
    for (let i = 0; i < models.length; i++) {
      const model = models[i];
      let price = base + (i % 8) * 45 + (idx % 5) * 20;
      if (luxury.has(brand)) price = Math.max(price, 3800);
      price = Math.min(price, 4490);
      const name = brand === "Hot Wheels" ? `2025 ${model}` : `2025 ${brand} ${model}`;
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
