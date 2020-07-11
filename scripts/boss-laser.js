const tmpColor = new Color();
const colors = [Color.valueOf("349e0955"), Color.valueOf("349e09aa"), Color.valueOf("349e09"), Color.white];
const tscales = [1, 0.7, 0.5, 0.2];
const strokes = [2, 1.5, 1, 0.3];
const lenscales = [1, 1.12, 1.15, 1.17];
const length = 220;

const bosslaser = extend(BasicBulletType, {
  update(b){
    if(b.timer.get(1, 5)){
      Damage.collideLine(b, b.getTeam(), this.hitEffect, b.x, b.y, b.rot(), length, true);
    }
  }, 
	range: function(){
		return 220.0;
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

bosslaser.speed = 0.01;
bosslaser.lifetime = 16;
bosslaser.pierce = true;
bosslaser.hitSize = 6;
bosslaser.drawSize = 400;
bosslaser.collides = true;
bosslaser.collidesGround = true;
bosslaser.collidesAir = true;
bosslaser.collidesTiles = true;
bosslaser.damage = 70;
bosslaser.shootEffect = Fx.none;
bosslaser.smokeEffect = Fx.none;
bosslaser.despawnEffect = Fx.none;
bosslaser.hitEffect = Fx.none;
bosslaser.keepVelocity = false;

const bossweapon = extendContent(Weapon, "boss2", {
  load: function(){
    this.region = Core.atlas.find("goldmod-boss2-equip");
  }
});
bossweapon.bullet = bosslaser;
bossweapon.length = 4;
bossweapon.width = 22;
bossweapon.reload = 80;
bossweapon.inaccuracy = 0;
bossweapon.alternate = true;
bossweapon.shootSound = Sounds.laserbig;
bossweapon.shootShake = 2;
bossweapon.ignoreRotation = true;

const boss = extendContent(UnitType, "boss2-meltdown", {
  load(){
    this.weapon.load();
    this.region = Core.atlas.find(this.name);
  }
});

boss.weapon = bossweapon;
boss.health = 20000;
boss.mass = 25;
boss.hitsize = 40;
boss.speed = 0.01;
boss.maxVelocity = 0.6;
boss.drag = 0.02;
boss.range = 220;
boss.flying = true;
boss.rotateWeapon = false;
boss.engineOffset = 21;
boss.engineSize = 5.3;
boss.rotatespeed = 0.1;
boss.baseRotateSpeed = 0.04;

boss.create(prov(() => extend(HoverUnit, {})));