const silo = extendContent(ItemTurret, "missileSilo", {
  load(){
    this.super$load();
    this.baseRegion = Core.atlas.find(this.name + "-base");
    this.region = Core.atlas.find(this.name);
    this.topRegion = Core.atlas.find(this.name + "-light");
  }, 
  draw(tile){
    Draw.rect(Core.atlas.find(this.name + "-base"), tile.drawx(), tiledrawy());
    if (this.hasAmmo(tile)){
      Draw.rect(Core.atlas.find(this.name), tile.drawx(), tile.drawy());
      Draw.rect(Core.atlas.find(this.name + "-light"), tile.drawx(), tile.drawy());
    };
  },
  icons(){
    return [
        this.baseRegion,
        this.region,
        this.topRegion
      ];
  }
});