//init
const crucible = extendContent(GenericCrafter, "goldCrucible", {});
const forge = extendContent(GenericCrafter, "goldForge", {});
const crusher = extendContent(GenericCrafter, "goldCrusher", {});
const scatter = extendContent(ItemTurret, "goldScatter", {});

module.exports = {
  crucible: crucible,
  forge: forge,
  crusher: crusher,
  scatter: scatter
}