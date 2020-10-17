//planet Zuila
const zuilagen = extend(PlanetGenerator, {
  getColor(position){
    let block = getBlock(position);
    Tmp.c1.set(block.mapColor).a = 1 - block.albedo;
    return Tmp.c1;
  }
});
zuilagen.arr = [
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sandWater, Blocks.stone, Blocks.stone],
  
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sandWater, Blocks.stone, Blocks.stone, Blocks.stone],
  
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sandWater, Blocks.stone, Blocks.stone, Blocks.stone],
  
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice],
  
  [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.craters, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice],
  
  [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.stone, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice],
  
  [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.ice],
  
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.craters, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
  
  [Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.stone, Blocks.grass, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice],
  
  [Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
  
  [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
  
  [Blocks.sandWater, Blocks.sandWater, Blocks.sand, Blocks.grass, Blocks.stone, Blocks.grass, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
  
  [Blocks.sandWater, Blocks.sand, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice]
  ];
zuilagen.scl = 5;
zuilagen.waterOffset = 0.07;
zuilagen.basegen = new BaseGenerator();
zuilagen.water = 2 / zuilagen.arr[0].length;
zuilagen.dec = [
  Blocks.grass, Blocks.stone,
  Blocks.grass, Blocks.stone,
  Blocks.water, Blocks.water,
  Blocks.darksandWater, Blocks.darksandWater
];
zuilagen.tars = [
  Blocks.grass, Blocks.shale,
  Blocks.stone, Blocks.shale
  ];

//const rid = new Packages.arc.util.noise.RidgedPerlin(1, 2);
const noisez = new Packages.arc.util.noise.Simplex();

const zuila = new JavaAdapter(Planet, {}, "zuila", Planets.sun, 3, 1.1);

zuila.generator = new SerpuloPlanetGenerator(); //currently it has serpulo's gen until a custom one is ready
zuila.startSector = 1;
zuila.hasAtmosphere = true;
zuila.atmosphereColor = Color.valueOf("f0e4a890");
zuila.meshLoader = function(){
  return new HexMesh(zuila, 8);
};

//end planet Zuila
//Zuila sector presets
const pl_zuila = Vars.content.getByName(ContentType.planet, "goldmod-zuila");
const gr1 = new JavaAdapter(SectorPreset, {}, "groundOne", pl_zuila, 1);
gr1.alwaysUnlocked = true;
gr1.captureWave = 2;
//end Zuila sector presets
//functions
function getBlock(pos){
  let height = rawHeight(pos);
  Tmp.v31.set(pos);
  pos = Tmp.v33.set(pos).scl(zuilagen.scl);
  let rad = zuilagen.scl;
  let temp = Mathf.clamp(Math.abs(pos.y * 2) / rad);
  let tnoise = noisez.octaveNoise3D(7, 0.56, 1 / 3, pos.x, pos.y + 999, pos.z);
  temp = Mathf.lerp(temp, tnoise, 0.5);
  height = height * 1.2;
  height = Mathf.clamp(height);
  let tar = noisez.octaveNoise3D(4, 0.55, 0.5, pos.x, pos.y + 999, pos.z) * 0.3 + Tmp.v31.dst(0, 0, 1) * 0.2;
  let res = [
    Mathf.clamp(temp * zuilagen.arr.length, 0, zuilagen.arr[0].length - 1)][Mathf.clamp(height * zuilagen.arr[0].length, 0, zuilagen.arr[0].length - 1)
    ];
  if (tar > 0.5){
    return zuilagen.tars.get(res, res);
  } else {
    return res;
  };
};
function rawHeight(pos){
pos = Tmp.v33.set(pos);
pos.scl(zuilagen.scl);
  return (Mathf.pow(noisez.octaveNoise3D(7, 0.5, 1 / 3, pos.x, pos.y, pos.z), 2.3) + zuilagen.waterOffset) / (1 + zuilagen.waterOffset);
};
//end functions