//serpulo presets
const goldMountains = new SectorPreset("goldMountains", Planets.serpulo, 172);
goldMountains.captureWave = 30;
goldMountains.difficulty = 4;
/*goldMountains.objectives = Seq.with(
  new Objectives.SectorComplete(SectorPresets.stainedMountains),
  new Objectives.Research(Vars.content.getByName(ContentType.block, "goldmod-goldCrucible")),
  new Objectives.Research(Vars.content.getByName(ContentType.block, "goldmod-goldForge")),
  new Objectives.Research(Blocks.laserDrill)
);*/

const goldMines = new SectorPreset("goldMines", Planets.serpulo, 205);
goldMines.difficulty = 7;

const abandonedDesert = new SectorPreset("abandonedDesert", Planets.serpulo, 157);
abandonedDesert.captureWave = 30;
abandonedDesert.difficulty = 8;

const reignLair = new SectorPreset("eradLair", Planets.serpulo, 122);
reignLair.captureWave = 10;
reignLair.difficulty = 10;