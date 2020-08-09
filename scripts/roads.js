//region gold road
const boost1 = extendContent(StatusEffect, "boost1", {});
boost1.speedMultiplier = 1.25;

const road1 = extendContent(DoubleOverlayFloor, "goldRoad", {
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name);
  },
  draw(tile){
    Draw.rect(this.region,tile.drawx(),tile.drawy());
  },
  drawLayer(tile){}, 
  generateIcons(){
    return [
      Core.atlas.find(this.name)
      ];
  }, 
unitOn(tile,unit){
    unit.applyEffect(boost1,1);
  },
  update(tile){
    this.super$update(tile);
    Units.nearby(tile.worldx(),tile.worldy(),blocksize,blocksize,cons(e => {
      this.unitOn(tile,e);
    }));
  }
});
//endregion gold road
//region shiny road
const boost2 = extendContent(StatusEffect, "boost2", {});
boost2.speedMultiplier = 1.50;

const road2 = extendContent(DoubleOverlayFloor, "shinyRoad", {
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name);
  },
  draw(tile){
    Draw.rect(this.region,tile.drawx(),tile.drawy());
  },
  drawLayer(tile){}, 
  generateIcons(){
    return [
      Core.atlas.find(this.name)
      ];
  }, 
unitOn(tile,unit){
    unit.applyEffect(boost2,1);
  },
  update(tile){
    this.super$update(tile);
    Units.nearby(tile.worldx(),tile.worldy(),blocksize,blocksize,cons(e => {
      this.unitOn(tile,e);
    }));
  }
});
//endregion shiny road
//region palla road
const boost3 = extendContent(StatusEffect, "boost3", {});
boost3.speedMultiplier = 1.75;

const road3 = extendContent(DoubleOverlayFloor, "pallaRoad", {
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name);
  },
  draw(tile){
    Draw.rect(this.region,tile.drawx(),tile.drawy());
  },
  drawLayer(tile){}, 
  generateIcons(){
    return [
      Core.atlas.find(this.name)
      ];
  }, 
unitOn(tile,unit){
    unit.applyEffect(boost3,1);
  },
  update(tile){
    this.super$update(tile);
    Units.nearby(tile.worldx(),tile.worldy(),blocksize,blocksize,cons(e => {
      this.unitOn(tile,e);
    }));
  },
});
//endregion palla road