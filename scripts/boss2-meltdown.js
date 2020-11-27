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


const weapon = extendContent(Weapon, "boss2", {});
weapon.bullet = bosslaser;
weapon.x = 22;
weapon.y = 0;
weapon.mirror = true;
weapon.reload = 80;
weapon.inaccuracy = 0;
weapon.alternate = true;
weapon.shootSound = Sounds.laserbig;
weapon.shake = 2;
weapon.ignoreRotation = true;
weapon.continuous = true;

const boss = extendContent(UnitType, "boss2-meltdown", {});

boss.weapons.add(weapon);
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

boss.constructor = () => extend(UnitEntity, {});