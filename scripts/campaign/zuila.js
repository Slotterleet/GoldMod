//planet Zuila
const zuilagen = extend(SerpuloPlanetGenerator, {});
zuilagen.dec = ObjectMap.of(Blocks.grass, Blocks.dirt, Blocks.grass, Blocks.dirt, Blocks.water, Blocks.water, Blocks.darksandWater, Blocks.darksandWater);
zuilagen.tars = ObjectMap.of(Blocks.grass, Blocks.shale, Blocks.dirt, Blocks.shale);

const zuila = new JavaAdapter(Planet, {}, "zuila", Planets.sun, 3, 0.9);

zuila.generator = zuilagen;
zuila.startSector = 1;
zuila.hasAtmosphere = true;
zuila.atmosphereColor = Color.valueOf("f0e4a860");
zuila.meshLoader = function(){
  return new HexMesh(zuila, 7);
};

//end planet Zuila
//Zuila sector presets
const gr1 = new JavaAdapter(SectorPreset, {}, "groundOne", zuila, 1);
gr1.captureWave = 2;
//end Zuila sector presets