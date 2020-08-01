const silo = extendContent(Turret, "missileSilo", {
  load(){
    this.region = Core.atlas.find(this.name);
    this.baseRegion = Core.atlas.find(this.name + "-base");
  }, 
  Draw.rect(this.region,tile.drawx(),tile.drawy());
  Draw.rect(this.baseRegion,tile.drawx(),tile.drawy());
});