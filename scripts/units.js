const gNova = extendContent(UnitType, "goldenNova", {});
gNova.constructor = () => extend(MechUnitLegacyNova, {});
const nova_abil = new JavaAdapter(RepairFieldAbility, {}, 5, 180, 60);
gNova.abilities.add(nova_abil);

const gPulsar = extendContent(UnitType, "goldenPulsar", {});
gPulsar.constructor = () => extend(MechUnitLegacyPulsar, {});

const pulsar_abil = new JavaAdapter(ShieldRegenFieldAbility, {}, 50, 100, 300, 60);
gPulsar.abilities.add(pulsar_abil);

const gp_weapon = extendContent(Weapon, "gHealShotgun", {});
gp_weapon.top = false;
gp_weapon.x = 5;
gp_weapon.y = 0.5;
gp_weapon.shake = 2.2;
gp_weapon.shootY = 2.5;
gp_weapon.reload = 38;
gp_weapon.shots = 3;
gp_weapon.inaccuracy = 30;
gp_weapon.shotDelay = 0.5;
gp_weapon.spacing = 0;
gp_weapon.ejectEffect = Fx.none;
gp_weapon.recoil = 2.5;
gp_weapon.shootSound = Sounds.pew;

const gp_bullet = extend(LightningBulletType, {});
gp_bullet.lightningColor = gp_bullet.hitColor = Color.valueOf("98ffa9");
gp_bullet.damage = 45;
const lightning = new JavaAdapter(BulletType, {}, 0.0001, 0);
lightning.collidesTeam = true;
lightning.status = StatusEffects.shocked;
lightning.statusDuration = 10;
lightning.hittable = false;
lightning.healPercent = 6;
lightning.despawnEffect = Fx.none;
gp_bullet.lightningType = lightning;
gp_weapon.bullet = gp_bullet;

gPulsar.weapons.add(gp_weapon);

const gQuasar = extendContent(UnitType, "goldenQuasar", {});
gQuasar.constructor = () => extend(MechUnit, {});
const quasar_abil = new JavaAdapter(ForceFieldAbility, {}, 60, 0.3, 400, 360);
gQuasar.abilities.add(quasar_abil);

const gCrawler = extendContent(UnitType, "goldenCrawler", {});
gCrawler.constructor = () => extend(MechUnit, {});
gCrawler.defaultController = () => extend(SuicideAI, {});

const hammer = extendContent(UnitType, "hammer", {});
hammer.constructor = () => extend(UnitEntity, {});
hammer.defaultController = () => extend(BuilderAI, {});

const ghost = extendContent(UnitType, "ghost", {});
ghost.constructor = () => extend(UnitEntity, {});
ghost.defaultController = () => extend(MinerAI, {});