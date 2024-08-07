Events.run(Trigger.update, () => {
    //check if unit type name is equal to name, then check if unit team is not the player team, then check if unit has guardian status
    const unit = Groups.unit.find(e =>
        e.type.name == "erekirliquefied-action" &&
        e.team != Vars.player.team &&
        e.hasEffect(StatusEffects.boss)
                    )
    if (unit){
        let actioVenit = Vars.tree.loadMusic("actio_venit");
    Reflect.invoke(SoundControl, Vars.control.sound, "play", [actioVenit], Music)
    }
})
