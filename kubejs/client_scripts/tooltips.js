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

        'iguanatweaksexpanded:chained_copper_boots',
        'iguanatweaksexpanded:chained_copper_leggings',
        'iguanatweaksexpanded:chained_copper_helmet',
        'iguanatweaksexpanded:chained_copper_chestplate',
    
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
