const silo = extendContent(ArtilleryTurret, "missileSilo", {
  load(){
    this.region = Core.atlas.find(this.name);
    this.baseRegion = Core.atlas.find(this.name + "-base");
  }, 
  draw(tile){
  Draw.rect(this.region,tile.drawx(),tile.drawy());
  Draw.rect(this.baseRegion,tile.drawx(),tile.drawy());
  }, 
  generateIcons(){
    return [
      this.region, this.baseRegion
      ];
  }
});

silo.health = 900;
silo.size = 3;
silo.inaccuracy = 0;
silo.reload = 600;
silo.recoil = 0;
silo.range = 480;
silo.targetAir = false;
silo.targetGround = true;