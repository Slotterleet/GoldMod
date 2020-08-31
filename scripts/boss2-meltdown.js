const tmpColor = new Color();
const colors = [Color.valueOf("349e0955"), Color.valueOf("349e09aa"), Color.valueOf("349e09"), Color.white];
const tscales = [1, 0.7, 0.5, 0.2];
const strokes = [2, 1.5, 1, 0.3];
const lenscales = [1, 1.12, 1.15, 1.17];
const length = 220;

const bosslaser = extend(ContinuousLaserBulletType, {
	range: function(){
		return 220.0;
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
bosslaser.incendAmount = 2;

const weapon1 = extendContent(Weapon, "boss2", {
  load: function(){
    this.region = Core.atlas.find("goldmod-boss2");
  }
});
weapon1.bullet = bosslaser;
weapon1.x = -22;
weapon1.y = 0;
weapon1.reload = 80;
weapon1.inaccuracy = 0;
weapon1.alternate = true;
weapon1.shootSound = Sounds.laserbig;
weapon1.shootShake = 2;
weapon1.ignoreRotation = true;

const weapon2 = extendContent(Weapon, "boss2", {
  load: function(){
    this.region = Core.atlas.find("goldmod-boss2");
  }
});
weapon2.bullet = bosslaser;
weapon2.x = 22;
weapon2.y = 0;
weapon2.mirror = true;
weapon2.reload = 80;
weapon2.inaccuracy = 0;
weapon2.alternate = true;
weapon2.shootSound = Sounds.laserbig;
weapon2.shootShake = 2;
weapon2.ignoreRotation = true;

const boss = extendContent(UnitType, "boss2-meltdown", {});

boss.weapons.add(weapon1, weapon2);
boss.health = 20000;
boss.hitsize = 40;
boss.speed = 0.6;
boss.drag = 0.02;
boss.range = 220;
boss.flying = true;
boss.rotateWeapon = false;
boss.engineOffset = 21;
boss.engineSize = 5.3;
boss.rotatespeed = 0.1;
boss.baseRotateSpeed = 0.04;

boss.constructor = () => {
    const unit = extend(UnitEntity, {});
    return unit;
};