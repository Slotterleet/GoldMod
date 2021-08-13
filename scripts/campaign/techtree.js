const ssectors = require('campaign/serpulo');
const blocks = require('blocks');
const units = require('units');

function newNode(parent, content, req, objectives){
  var parnode = TechTree.get(parent);
  var node = new TechTree.TechNode(parnode, content, req != null ? req : content.researchRequirements());
  var used = new ObjectSet();
  
  if (objectives != null){
    node.objectives.addAll(objectives);
  }
}

newNode(SectorPresets.stainedMountains, ssectors.goldMountains, null, Seq.with(new Objectives.SectorComplete(SectorPresets.stainedMountains), new Objectives.Research(Blocks.laserDrill), new Objectives.Research(blocks.crucible), new Objectives.Research(blocks.forge)));
newNode(ssectors.goldMountains, ssectors.goldMines, null, Seq.with(new Objectives.SectorComplete(ssectors.goldMountains), new Objectives.Research(units.gDagger)));
newNode(SectorPresets.saltFlats, ssectors.abandonedDesert, null, Seq.with(new Objectives.SectorComplete(SectorPresets.saltFlats), new Objectives.Research(blocks.scatter), new Objectives.Research(blocks.crusher)));
newNode(SectorPresets.planetaryTerminal, ssectors.reignLair, null, Seq.with(new Objectives.SectorComplete(SectorPresets.planetaryTerminal), new Objectives.SectorComplete(SectorPresets.nuclearComplex), new Objectives.SectorComplete(ssectors.goldMines), new Objectives.SectorComplete(ssectors.abandonedDesert)));