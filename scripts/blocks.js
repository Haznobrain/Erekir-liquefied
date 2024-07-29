Events.on(ContentInitEvent, e => {
    Vars.content.block("rhyolite").attributes.set(Attribute.get("underground-steam"), 0.4);
    Vars.content.block("rhyolite-crater").attributes.set(Attribute.get("underground-steam"), 0.5);
    Vars.content.block("rough-rhyolite").attributes.set(Attribute.get("underground-steam"), 0.3);
    Vars.content.block("regolith").attributes.set(Attribute.get("underground-steam"), 0.1);
    Vars.content.block("yellow-stone").attributes.set(Attribute.get("underground-steam"), 0.9);
    Vars.content.block("carbon-stone").attributes.set(Attribute.get("underground-steam"), 0.1);
    Vars.content.block("beryllic-stone").attributes.set(Attribute.get("underground-steam"), 1);
    Vars.content.block("crystalline-stone").attributes.set(Attribute.get("underground-steam"), 0.7);
    Vars.content.block("crystal-floor").attributes.set(Attribute.get("underground-steam"), 0.5);
    Vars.content.block("yellow-stone-plates").attributes.set(Attribute.get("underground-steam"), 1);
    Vars.content.block("red-stone").attributes.set(Attribute.get("underground-steam"), 1.1);
    Vars.content.block("dense-red-stone").attributes.set(Attribute.get("underground-steam"), 0.9);
    Vars.content.block("red-ice").attributes.set(Attribute.get("underground-steam"), 1.3);
    Vars.content.block("arkyic-stone").attributes.set(Attribute.get("underground-steam"), 1.1);
    Vars.content.block("rhyolite").attributes.set(Attribute.get("underground-steam"), 0.4);

    Vars.content.block("erekirliquefied-geothermal-steam-extractor").attribute = Attribute.get("underground-steam");
});
