//serpulo presets
const goldMountains = new JavaAdapter(SectorPreset, {}, "goldMountains", Planets.serpulo, 33);
goldMountains.captureWave = 30;
goldMountains.objectives = Seq.with(
  new Objectives.SectorComplete(SectorPresets.stainedMountains),
  new Objectives.Research(Vars.content.getByName(ContentType.block, "goldmod-goldCrucible")),
  new Objectives.Research(Vars.content.getByName(ContentType.block, "goldmod-goldForge")),
  new Objectives.Research(Blocks.laserDrill)
);

const goldMines = new JavaAdapter(SectorPreset, {}, "goldMines", Planets.serpulo, 34);

const abandonedDesert = new JavaAdapter(SectorPreset, {}, "abandonedDesert", Planets.serpulo, 103);
abandonedDesert.captureWave = 20;

const reignLair = new JavaAdapter(SectorPreset, {}, "eradLair", Planets.serpulo, 67);
reignLair.captureWave = 10;