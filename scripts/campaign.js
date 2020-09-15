//planet Zuila
const zuilagen = extend(SerpuloPlanetGenerator, {});
zuilagen.arr = [
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sandWater, Blocks.stone, Blocks.stone],
  
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sandWater, Blocks.stone, Blocks.stone, Blocks.stone],
  
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sandWater, Blocks.stone, Blocks.stone, Blocks.stone],
  
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice],
  
  [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice],
  
  [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.dirt, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice],
  
  [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.dirt, Blocks.dirt, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.ice],
  
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.dirt, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
  
  [Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.dirt, Blocks.grass, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice],
  
  [Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
  
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
  
  [Blocks.sandWater, Blocks.sandWater, Blocks.sand, Blocks.grass, Blocks.dirt, Blocks.grass, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
  
  [Blocks.sandWater, Blocks.sand, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice]
  ];
zuilagen.scl = 4;
zuilagen.waterOffset = 0.07;
zuilagen.basegen = new BaseGenerator();
zuilagen.water = 2 / zuilagen.arr[0].length;
zuilagen.dec = [
  Blocks.grass, Blocks.dirt,
  Blocks.grass, Blocks.dirt,
  Blocks.water, Blocks.water,
  Blocks.darksandWater, Blocks.darksandWater
];
zuilagen.tars = [
  Blocks.grass, Blocks.shale,
  Blocks.dirt, Blocks.shale
  ];

const zuila = new JavaAdapter(Planet, {}, "zuila", Planets.sun, 3, 1.1);

zuila.generator = zuilagen;
zuila.startSector = 1;
zuila.hasAtmosphere = true;
zuila.atmosphereColor = Color.valueOf("f0e4a8");
zuila.meshLoader = () => new HexMesh(zuila, 8);
zuila.sectorSize = 4;
//end planet Zuila
//Zuila sector presets
const pl_zuila = Vars.content.getByName(ContentType.planet, "goldmod-zuila");
const gr1 = new JavaAdapter(SectorPreset, {}, "groundOne", pl_zuila, 1);
gr1.alwaysUnlocked = true;
gr1.captureWave = 2;