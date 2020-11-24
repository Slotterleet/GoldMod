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
