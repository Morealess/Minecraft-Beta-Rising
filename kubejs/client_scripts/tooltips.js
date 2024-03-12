// priority: 0

ItemEvents.tooltip(event => {

    // Consistent Tooltips
    event.addAdvanced([
        'iguanatweaksexpanded:wooden_hammer',
        'iguanatweaksexpanded:stone_hammer',
        'iguanatweaksexpanded:iron_hammer',
        'iguanatweaksexpanded:golden_hammer',
        'iguanatweaksexpanded:diamond_hammer',
        'iguanatweaksexpanded:netherite_hammer',
        'iguanatweaksexpanded:flint_hammer',
        'iguanatweaksexpanded:keego_hammer',
        'iguanatweaksexpanded:durium_hammer',
        'iguanatweaksexpanded:copper_hammer',
        'iguanatweaksexpanded:coated_copper_hammer',
        'iguanatweaksexpanded:solarium_hammer',
        'iguanatweaksexpanded:quaron_hammer',
        'iguanatweaksexpanded:soul_steel_hammer'
    ], (item, advanced, text) => {
        text.remove(1)
        text.remove(1)
    })


    // Disabled Items Tooltips
    event.addAdvanced([
        'iguanatweaksexpanded:enchanting_table',
        'iguanatweaksreborn:beacon',
    
        'iguanatweaksexpanded:copper_ore_rock',
        'iguanatweaksexpanded:iron_ore_rock',
        'iguanatweaksexpanded:gold_ore_rock',
        'iguanatweaksexpanded:cleansed_lapis',
        'iguanatweaksexpanded:ancient_lapis',
    
        'sleep_tight:bedbug_spawn_egg',
        'sleep_tight:bedbug_eggs',
        'sleep_tight:night_bag',

        '/iguanatweaksexpanded:(.*)flint/',
        '/(.*)_shield/'
        
    ], (item, advanced, text) => {
        text.remove(0)
        text.add(Text.of('§4Disabled'))
    })
})




/*
const $MinecraftForge = Java.loadClass('net.minecraftforge.common.MinecraftForge')
const $EventPriority = Java.loadClass('net.minecraftforge.eventbus.api.EventPriority')
const $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')
if ($KubeJS.startupScriptManager.firstLoad) {
  $MinecraftForge.EVENT_BUS.addListener($EventPriority.LOW, false, Java.loadClass('net.minecraftforge.event.entity.player.ItemTooltipEvent'), event => global.tooltips(event))
}

// blacklisted tooltips
const blacklist = [
    "attribute.name.generic.luck",
    "forge.swim_speed",
    "attribute.name.generic.attack_speed",
    "attribute.name.generic.movement_speed",
    "attribute.name.generic.knockback_resistance",
    "forge.entity_gravity"
];


// remove blacklisted tooltips
global.tooltips = (event) => {

    for(let i of blacklist) {
        let blacklisted = Text.translate(i).string;
        event.toolTip.removeIf(comp => comp.toFlatList().stream().anyMatch(flatComp => flatComp.string.includes(blacklisted)));
    }

}
*/