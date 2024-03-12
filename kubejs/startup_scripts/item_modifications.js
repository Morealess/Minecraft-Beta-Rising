// priority: 0

ItemEvents.modification(event => {

    // Fletching Table - Disable
    event.modify('minecraft:fletching_table', item => {
        item.burnTime = 0
    })
    // Fletching Table - Replace
    event.modify('iguanatweaksexpanded:fletching_table', item => {
        item.burnTime = 300 // 1.5 items
    })

})
