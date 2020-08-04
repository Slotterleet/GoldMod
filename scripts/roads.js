//region gold road
const boost1 = extendContent(StatusEffect, "boost1", {});
boost1.speedMultiplier = 1.5;

const road1 = extendContent(Floor, "goldRoad", {
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name + "1");
  },
  draw(tile){
    Draw.rect(this.region,tile.drawx(),tile.drawy());
  },
  drawLayer(tile){}, 
  generateIcons(){
    return [
      Core.atlas.find(this.name)
      ];
  }
});
road1.status = boost1;
road1.statusDuration = 10;
//endregion gold road
//region shiny road
const boost2 = extendContent(StatusEffect, "boost2", {});
boost2.speedMultiplier = 2;

const road2 = extendContent(Floor, "shinyRoad", {
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name + "1");
  },
  draw(tile){
    Draw.rect(this.region,tile.drawx(),tile.drawy());
  },
  drawLayer(tile){}, 
  generateIcons(){
    return [
      Core.atlas.find(this.name)
      ];
  }
});
road2.status = boost2;
road2.statusDuration = 10;
//endregion shiny road
//region palla road
const boost3 = extendContent(StatusEffect, "boost3", {});
boost3.speedMultiplier = 2.5;

const road3 = extendContent(Floor, "pallaRoad", {
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name + "1");
  },
  draw(tile){
    Draw.rect(this.region,tile.drawx(),tile.drawy());
  },
  drawLayer(tile){}, 
  generateIcons(){
    return [
      Core.atlas.find(this.name)
      ];
  }
});
road3.status = boost3;
road3.statusDuration = 10;
//endregion palla road