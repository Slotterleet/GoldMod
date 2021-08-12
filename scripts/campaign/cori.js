const zuila = require('campaign/zuila');

const cori = new JavaAdapter(Planet, {}, "cori", zuila.zuila, 2, 0.4);
cori.generator = new SerpuloPlanetGenerator();
cori.startSector = 7;
cori.hasAtmosphere = true;
cori.atmosphereColor = Color.valueOf("1c7fa690");
cori.meshLoader = function(){
  return new HexMesh(cori, 7);
};

const pallaCrags = new JavaAdapter(SectorPreset, {}, "pallaCrags", cori, 7);
pallaCrags.captureWave = 20;

module.exports = {
  cori: cori,
  pallaCrags: pallaCrags
}