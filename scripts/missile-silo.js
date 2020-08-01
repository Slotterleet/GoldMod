const silo = extendContent(ArtilleryTurret, "missileSilo", {
  load(){
    this.super$load();
    this.baseRegion = Core.atlas.find(this.name + "-base");
    this.region = Core.atlas.find(this.name);
    this.topRegion = Core.atlas.find(this.name + "-light");
  }, 
  draw(tile){
  Draw.rect(this.baseRegion,tile.drawx(),tile.drawy());
  Draw.rect(this.topRegion,tile.drawx(),tile.drawy());
  }, 
  generateIcons(){
    return [
      Core.atlas.find(this.name + "-base"), 
      Core.atlas.find(this.name), 
      Core.atlas.find(this.name + "-light")
      ];
  }
});

silo.health = 900;
silo.size = 3;
silo.inaccuracy = 0;
silo.reload = 600;
silo.recoil = 0;
silo.range = 540;
silo.targetAir = false;
silo.targetGround = true;