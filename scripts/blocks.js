//init
const crucible = extendContent(GenericCrafter, "goldCrucible", {});
const forge = extendContent(GenericCrafter, "goldForge", {});
const crusher = extendContent(GenericCrafter, "goldCrusher", {});
const sa_smelter = extendContent(GenericSmelter, "shinyAlloySmelter", {});
const scatter = extendContent(ItemTurret, "goldScatter", {});
const drillStation = extendContent(Fracker, "goldDrillStation", {});

module.exports = {
  crucible: crucible,
  forge: forge,
  crusher: crusher,
  sa_smelter: sa_smelter,
  scatter: scatter,
  drillStation: drillStation
}