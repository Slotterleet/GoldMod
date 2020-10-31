const palladium = extendContent(Item, "palladium", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-palladium"), 500, Vars.content.getByName(ContentType.item, "goldmod-researchPoint"), 40)
  }
});

const shinyAlloy = extendContent(Item, "shinyAlloy", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-researchPoint"), 40)
  }
});
const pallaEnriched = extendContent(Item, "pallaEnriched", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-palladium"), 12500)
  }
});

const goldOre = extendContent(Item, "goldOre", {
  researchRequirements(){
    return ItemStack.with(Items.titanium, 500, Items.thorium, 250)
  }
});

const apShell1 = extendContent(Item, "apShell1", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-goldCrushed"), 800, Items.titanium, 800)
  }
});

const heShell1 = extendContent(Item, "heShell1", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-goldCrushed"), 800, Items.blastCompound, 800)
  }
});

const rocket1 = extendContent(Item, "rocket1", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-goldCrushed"), 800, Items.pyratite, 800)
  }
});

const apShell2 = extendContent(Item, "apShell2", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-shinyAlloy"), 800)
  }
});

const heShell2 = extendContent(Item, "heShell2", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-shinyAlloy"), 800)
  }
});

const rocket2 = extendContent(Item, "rocket2", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-shinyAlloy"), 800)
  }
});

const apShell3 = extendContent(Item, "apShell3", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-palladium"), 800)
  }
});

const heShell3 = extendContent(Item, "heShell3", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-palladium"), 800)
  }
});

const rocket3 = extendContent(Item, "rocket3", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-palladium"), 800)
  }
});

const apShell4 = extendContent(Item, "apShell4", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-pallaEnriched"), 800)
  }
});

const heShell4 = extendContent(Item, "heShell4", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-pallaEnriched"), 800)
  }
});

const rocket4 = extendContent(Item, "rocket4", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-pallaEnriched"), 800)
  }
});

const goldCrushed = extendContent(Item, "goldCrushed", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 2500)
  }
});

const moltenGold = extendContent(Liquid, "moltenGold", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-goldOre"), 4000)
  }
});

const gDagger = extendContent(UnitType, "goldenDagger", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 600, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 300)
  }
});
gDagger.constructor = function(){
  return extend(MechUnit, {});
};

const gMace = extendContent(UnitType, "goldenMace", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 1500, Items.graphite, 1500, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 750)
  }
});
gMace.constructor = function(){
  return extend(MechUnit, {});
};

const gFortress = extendContent(UnitType, "goldenFortress", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 3000, Items.titanium, 2500, Items.metaglass, 1500, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 1500)
  }
});
gFortress.constructor = function(){
  return extend(MechUnit, {});
};

const gScepter = extendContent(UnitType, "goldenScepter", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 5000, Items.graphite, 5000, Items.titanium, 6750, Items.plastanium, 3750, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 3000)
  }
});
gScepter.constructor = function(){
  return extend(MechUnit, {});
};

const gReign = extendContent(UnitType, "boss1", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 15000, Items.surgeAlloy, 15000, Items.phaseFabric, 7500, Items.plastanium, 20000, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 20000, Vars.content.getByName(ContentType.item, "goldmod-shinyAlloy"), 1500)
  }
});
gReign.constructor = function(){
  return extend(MechUnit, {});
};

const gCrawler = extendContent(UnitType, "goldenCrawler", {
  researchRequirements(){
    return ItemStack.with(Items.blastCompound, 100, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 150)
  }
});
gCrawler.defaultController = () => extend(SuicideAI, {});
gCrawler.constructor = function(){
  return extend(MechUnit, {});
};

const gAtrax = extendContent(UnitType, "goldenAtrax", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 1500, Items.graphite, 1500, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 750)
  }
});
gAtrax.constructor = function(){
  return extend(LegsUnit, {});
};

const gSpiroct = extendContent(UnitType, "goldenSpiroct", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 3000, Items.titanium, 2500, Items.metaglass, 1500, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 1500)
  }
});
gSpiroct.constructor = function(){
  return extend(LegsUnit, {});
};

const gArkyid = extendContent(UnitType, "goldenArkyid", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 5000, Items.graphite, 5000, Items.titanium, 6750, Items.plastanium, 3750, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 3000)
  }
});
gArkyid.constructor = function(){
  return extend(LegsUnit, {});
};

const gToxopid = extendContent(UnitType, "goldenToxopid", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 15000, Items.surgeAlloy, 15000, Items.phaseFabric, 7500, Items.plastanium, 20000, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 20000, Vars.content.getByName(ContentType.item, "goldmod-shinyAlloy"), 1500)
  }
});
gToxopid.constructor = function(){
  return extend(LegsUnit, {});
};

const gFlare = extendContent(UnitType, "goldenFlare", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 600, Items.titanium, 300, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 300)
  }
});
gFlare.constructor = function(){
  return extend(UnitEntity, {});
};

const gHorizon = extendContent(UnitType, "goldenHorizon", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 1500, Items.graphite, 1500, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 750)
  }
});
gHorizon.constructor = function(){
  return extend(UnitEntity, {});
};

const gZenith = extendContent(UnitType, "goldenZenith", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 3000, Items.titanium, 2500, Items.metaglass, 1500, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 1500)
  }
});
gZenith.constructor = function(){
  return extend(UnitEntity, {});
};

const gAntumbra = extendContent(UnitType, "goldenAntumbra", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 5000, Items.graphite, 5000, Items.titanium, 6750, Items.plastanium, 3750, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 3000)
  }
});
gAntumbra.constructor = function(){
  return extend(UnitEntity, {});
};

const gEclipse = extendContent(UnitType, "goldenEclipse", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 15000, Items.surgeAlloy, 15000, Items.phaseFabric, 7500, Items.plastanium, 20000, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 20000, Vars.content.getByName(ContentType.item, "goldmod-shinyAlloy"), 1500)
  }
});
gEclipse.constructor = function(){
  return extend(UnitEntity, {});
};

const ghost = extendContent(UnitType, "ghost", {
  researchRequirements(){
    return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-shinyAlloy"), 600)
  }
});

ghost.defaultController = () => extend(MinerAI, {});
ghost.constructor = function(){
  return extend(MinerUnit, {});
};

const teleBlue = extendContent(UnitType, "teleBlue", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 1500, Items.graphite, 1500, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 750)
  }
});
teleBlue.constructor = function(){
  return extend(UnitEntity, {});
};

function tele(name){
  return extendContent(UnitType, name, {
    researchRequirements(){
      return ItemStack.with(Vars.content.getByName(ContentType.item, "goldmod-shinyAlloy"), 300)
    }
  });
};

const teleRed = tele("teleRed");
teleRed.constructor = function(){
  return extend(UnitEntity, {});
};

const teleGreen = tele("teleGreen");
teleGreen.constructor = function(){
  return extend(UnitEntity, {});
};

const teleYellow = tele("teleYellow");
teleYellow.constructor = function(){
  return extend(UnitEntity, {});
};

const hammer = extendContent(UnitType, "hammer", {
  researchRequirements(){
    return ItemStack.with(Items.silicon, 3000, Items.titanium, 2500, Items.metaglass, 1500, Vars.content.getByName(ContentType.item, "goldmod-goldIngot"), 1500)
  }
});
hammer.constructor = function(){
  return extend(BuilderMinerUnit, {});
};