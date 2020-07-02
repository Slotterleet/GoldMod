const tmpColor = new Color();
const colors = [Color.valueOf("ec745855"), Color.valueOf("ec7458aa"), Color.valueOf("ff9c5a"), Color.white];
const tscales = [1, 0.7, 0.5, 0.2];
const strokes = [2, 1.5, 1, 0.3];
const lenscales = [1, 1.12, 1.15, 1.17];
const length = 220;

const gmdLaser = extend(BasicBulletType, {
  update(b){
    if(b.timer.get(1, 5)){
      Damage.collideLine(b, b.getTeam(), this.hitEffect, b.x, b.y, b.rot(), length, true);
    }
  },
  draw(b){
    var baseLen = length * b.fout();

    Lines.lineAngle(b.x, b.y, b.rot(), baseLen);
      for(var s = 0; s < colors.length; s++){
        Draw.color(tmpColor.set(colors[s]).mul(1 + Mathf.absin(Time.time(), 1, 0.1)));
         for(var i = 0; i < tscales.length; i++){
           Tmp.v1.trns(b.rot() + 180, (lenscales[i] - 1) * 35);
           Lines.stroke((9 + Mathf.absin(Time.time(), 0.8, 1.5)) * b.fout() * strokes[s] * tscales[i]);
           Lines.lineAngle(b.x + Tmp.v1.x, b.y + Tmp.v1.y, b.rot(), baseLen * lenscales[i], CapStyle.none);
         }
      }
    Draw.reset();
  }
});

gmdLaser.speed = 0.01;
gmdLaser.lifetime = 16;
gmdLaser.pierce = true;
gmdLaser.hitSize = 6;
gmdLaser.drawSize = 400;
gmdLaser.collides = true;
gmdLaser.collidesGround = true;
gmdLaser.collidesAir = true;
gmdLaser.collidesTiles = true;
gmdLaser.damage = 210;
gmdLaser.shootEffect = Fx.none;
gmdLaser.smokeEffect = Fx.none;
gmdLaser.despawnEffect = Fx.none;
gmdLaser.hitEffect = Fx.none;

const goldmeltdown = extendContent(LaserTurret, "goldMeltdown", {
  load(){
    this.super$load();

    this.region = Core.atlas.find(this.name);
    this.heatRegion = Core.atlas.find(this.name + "-heat");
  },

  draw(tile){
    Draw.rect(this.baseRegion, tile.drawx(), tile.drawy())
    Draw.color();
  }
});

goldmeltdown.shootType = gmdLaser;
goldmeltdown.update = true;
