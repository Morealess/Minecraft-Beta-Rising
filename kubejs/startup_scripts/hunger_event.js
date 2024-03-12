// priority: 0

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.MobEffectEvent$Added", event => global.effects(event));
/**
 * 
 * @param {Internal.MobEffectEvent$Added} event 
 */
global.effects = event => {
    const { effectInstance, effectInstance: { descriptionId }, entity } = event;
    const effectDuration = effectInstance.duration;
    if (descriptionId === "effect.minecraft.hunger") {
        entity.server.scheduleInTicks(1, () => {
            entity.removeEffect("minecraft:hunger");
        });
        
        entity.potionEffects.add("minecraft:weakness", effectDuration);
        entity.potionEffects.add("minecraft:poison", effectDuration / 2);
    }
};
