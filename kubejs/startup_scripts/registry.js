// priority: 0

let music_list = {
  dog: 145   // duration in seconds
};

// put sound to .minecraft\kubejs\assets\kubejs\sounds (sound must be .ogg mono otherwise it will not be 3-dimensional)
// also you need to add sound to sounds.json (.minecraft\kubejs\assets\kubejs) 
StartupEvents.registry('sound_event', event => {
  Object.keys(music_list).forEach(key => {
      event.create(`music.${key}`) 
  });
});

StartupEvents.registry('item', event => {
  Object.keys(music_list).forEach((key) => {
    let value = music_list[key]  
      event.create(`minecraft:music_disc_${key}`, "music_disc")
          .song(`kubejs:music.${key}`, value)
          .texture(`kubejs:item/music_disc_${key}`) // put textures file to .minecraft\kubejs\assets\kubejs\textures\item
          .tag("creeper_drop_music_discs") // 1.20+ music discs require special tag to enable jukebox functionality (if you want music discs to be obtainable from creepers then use "creeper_drop_music_discs" tag insted)
          .translationKey(`item.kubejs.music_disc_${key}`) //To set disc description add lang file (en_us.json, ru_ru.json, etc.) to the .minecraft\kubejs\assets\kubejs\lang and add entry for every translation key
        });
});

// AETHER POTIONS ;)
const $PotionBuilder = Java.loadClass("dev.latvian.mods.kubejs.misc.PotionBuilder");
StartupEvents.registry("potion", event => {

  event.createCustom("aether:remedy", () => {
    return new $PotionBuilder("remedy")
      .effect("aether:remedy", 30 * 20) // 30 seconds duration
      .createObject()
  });

  event.createCustom("aether:inebriation", () => {
    return new $PotionBuilder("inebriation")
      .effect("aether:inebriation", 30 * 20) // 30 seconds duration
      .createObject()
  });
});

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("aether:white_flower", "minecraft:awkward", "aether:remedy");
  event.addPotionBrewing("aether:purple_flower", "minecraft:awkward", "aether:inebriation");
});

// Custom Spawn Eggs
const $ForgeSpawnEggItem = Java.loadClass('net.minecraftforge.common.ForgeSpawnEggItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $EntityType = Java.loadClass('net.minecraft.world.entity.EntityType')
StartupEvents.registry('item', event => {
    event.createCustom('minecraft:illusioner_spawn_egg', () => 
        new $ForgeSpawnEggItem(() => $EntityType.ILLUSIONER, 9804699, 4547222, new $ItemProperties())).displayName("Sheepmangician Spawn Egg")
  })

// New Butcher's Job Block
StartupEvents.registry('minecraft:point_of_interest_type', event => {
  event.create('minecraft:butcher').block(Blocks.FURNACE)
});

