const gfore = extendContent(ItemTurret, "goldForeshadow", {});
gfore.unitSort = (u, x, y) => -u.maxHealth;