const ssectors = require('campaign/serpulo');
const zsectors = require('campaign/zuila');
const csectors = require('campaign/cori');

const blocks = require('blocks');
const items = require('items');
const liquids = require('liquids');
const units = require('units');

function newNode(parent, content, req, objectives){
  var parnode = TechTree.get(parent);
  var node = new TechTree.TechNode(parnode, content, req != null ? req : content.researchRequirements());
  var used = new ObjectSet();
  
  if (objectives != null){
    node.objectives.addAll(objectives);
  }
}
//region blocks
newNode(Blocks.surgeSmelter, blocks.sa_smelter, null, Seq.with(new Objectives.SectorComplete(ssectors.reignLair)));
newNode(Blocks.oilExtractor, blocks.drillStation, null, Seq.with(new Objectives.Research(liquids.moltenGold)));
//endregion
//region items & liquids
newNode(Items.thorium, items.goldOre, null, Seq.with(new Objectives.Produce(items.goldOre)));
newNode(items.goldOre, liquids.moltenGold, null, Seq.with(new Objectives.Produce(liquids.moltenGold)));
newNode(liquids.moltenGold, items.goldIngot, null, Seq.with(new Objectives.Produce(items.goldIngot)));
newNode(items.goldIngot, items.shinyAlloy, null, Seq.with(new Objectives.Produce(items.shinyAlloy)));
newNode(items.shinyAlloy, items.palladium, null, Seq.with(new Objectives.Produce(items.palladium)));
//endregion
//region sectors
newNode(SectorPresets.stainedMountains, ssectors.goldMountains, null, Seq.with(new Objectives.SectorComplete(SectorPresets.stainedMountains), new Objectives.Research(Blocks.laserDrill), new Objectives.Research(blocks.crucible), new Objectives.Research(blocks.forge)));
newNode(ssectors.goldMountains, ssectors.goldMines, null, Seq.with(new Objectives.SectorComplete(ssectors.goldMountains), new Objectives.Research(units.gDagger)));
newNode(SectorPresets.saltFlats, ssectors.abandonedDesert, null, Seq.with(new Objectives.SectorComplete(SectorPresets.saltFlats), new Objectives.Research(blocks.scatter), new Objectives.Research(blocks.crusher)));
newNode(SectorPresets.planetaryTerminal, ssectors.reignLair, null, Seq.with(new Objectives.SectorComplete(SectorPresets.planetaryTerminal), new Objectives.SectorComplete(SectorPresets.nuclearComplex), new Objectives.SectorComplete(ssectors.goldMines), new Objectives.SectorComplete(ssectors.abandonedDesert)));

newNode(ssectors.reignLair, zsectors.gr1, null, Seq.with(new Objectives.SectorComplete(ssectors.reignLair), new Objectives.Research(Blocks.interplanetaryAccelerator)));
newNode(zsectors.gr1, zsectors.frozenPass, null, Seq.with(new Objectives.SectorComplete(zsectors.gr1)));
newNode(zsectors.gr1, zsectors.goldRidge, null, Seq.with(new Objectives.SectorComplete(zsectors.gr1)));
newNode(zsectors.goldRidge, zsectors.cavernRetreat, null, Seq.with(new Objectives.SectorComplete(zsectors.goldRidge)));
newNode(zsectors.cavernRetreat, zsectors.derelictLab, null, Seq.with(new Objectives.SectorComplete(zsectors.cavernRetreat), new Objectives.SectorComplete(zsectors.frozenPass), new Objectives.Research(items.apShell2), new Objectives.Research(items.heShell2), new Objectives.Research(items.rocket2)));

newNode(zsectors.derelictLab, csectors.pallaCrags, null, Seq.with(new Objectives.SectorComplete(zsectors.derelictLab)));
newNode(csectors.pallaCrags, csectors.scrapWasteland, null, Seq.with(new Objectives.SectorComplete(csectors.scrapWasteland), new Objectives.Produce(items.palladium)));
//endregion