const silo = extendContent(ItemTurret, "missileSilo", {
  load(){
    this.super$load();
    this.baseRegion = Core.atlas.find(this.name + "-base");
    this.region = Core.atlas.find(this.name);
    this.topRegion = Core.atlas.find(this.name + "-light");
  }, 
  draw(){
    Draw.rect(Core.atlas.find(this.name + "-base"), x, y);
    if (this.hasAmmo()){
      Draw.rect(Core.atlas.find(this.name), x, y);
      Draw.rect(Core.atlas.find(this.name + "-light"), x, y);
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