// priority: 0

ItemEvents.tooltip(event => {

    // Blast Furnace Tooltips
    event.addAdvanced([
        'minecraft:blast_furnace',
    ], (item, advanced, text) => {
        text.add(Text.of('Requires a multi block structure to work'))
    })
    
    // Disabled Items Tooltips
    event.addAdvanced([
        'minecraft:blast_furnace',
        'minecraft:fletching_table',
        'minecraft:powered_rail',
        'iguanatweaksexpanded:enchanting_table',
        'iguanatweaksreborn:beacon',

        'sleep_tight:bedbug_spawn_egg',
        'sleep_tight:bedbug_eggs',
        'sleep_tight:night_bag',

        'iguanatweaksexpanded:copper_ore_rock',
        'iguanatweaksexpanded:iron_ore_rock',
        'iguanatweaksexpanded:gold_ore_rock',
        'iguanatweaksexpanded:cleansed_lapis',
        'iguanatweaksexpanded:ancient_lapis',
        'iguanatweaksexpanded:firestarter',

        '/iguanatweaksexpanded:flint(.*)/',
        '/iguanatweaksexpanded:chained_copper(.*)/',
        '/iguanatweaksexpanded:coated_copper(.*)/',
        '/(.*)shield/',
    ], (item, advanced, text) => {
        text.add(0, Text.of('§4§nDisabled'))
    })

    // Remove Redundant Tooltips // get ever item id that contains sword
    Ingredient.of(/sword|axe|pickaxe|shovel|hoe|hammer/).itemIds.forEach((itemId) => {
        event.addAdvanced(itemId, (item, advanced, text) => {
            //save every tooltip that not contains Attack Speed in an array
            const textElsArr = []
            for (let i = 1; i < text.length; i++) {
                if (/Attack Speed|Entity Reach/.test(text.get(i).string)) continue;
                textElsArr.push(text.get(i))
            }
            //remove every tooltip that is not the displayname of the item
            let name = text.get(0);
            text.removeIf((e) => e !== name)
      
            //add back every tooltip except for the ones with Attack Speed
            textElsArr.forEach((textEl) => {
              text.add(text.length, [textEl])
            })
        })
    })
})

MoreJSEvents.enchantmentTableTooltip((event) => {
    
    // Hides Enchanting Tooltips
    event.lines.clear()
})