// priority: 0

ItemEvents.tooltip(event => {

    // Consistent Hammer Tooltips
    event.addAdvanced([
        '/(.*)hammer/'
    ], (item, advanced, text) => {
        text.remove(1)
        text.remove(1)
    })

    // Consistent Shield Tooltips
    event.addAdvanced([
        '/(.*)shield/'
    ], (item, advanced, text) => {
        text.remove(1)
        text.remove(1)
        text.remove(1)
    })

    // Disabled Items Tooltips
    event.addAdvanced([
        'sleep_tight:bedbug_spawn_egg',
        'sleep_tight:bedbug_eggs',
        'sleep_tight:night_bag',

        'iguanatweaksexpanded:enchanting_table',
        'iguanatweaksreborn:beacon',
    
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
        text.add(0, Text.of('§4Disabled'))
    })
})

MoreJSEvents.enchantmentTableTooltip((event) => {
    /*
     * `event.item`: The item in the enchanting slot
     * `event.secondItem`: Mostly lapis lazuli
     * `event.lines`: The tooltip lines
     * `event.player`: The player that is hovering over the slot
     * `event.level`: The player's level (overworld, etc.)
     * `event.slot`: The slot that is hovered over (0, 1 or 2)
     * `event.requiredLevel`: The required experience level to enchant
     * `event.clue`: The clue that is shown in the tooltip
     **/
    event.lines.clear()
})