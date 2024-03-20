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

    // Weaker Chainmail 
    event.modify('minecraft:chainmail_helmet', item => {
        item.maxDamage = 82
      })
      event.modify('minecraft:chainmail_chestplate', item => {
        item.maxDamage = 120
      })
      event.modify('minecraft:chainmail_leggings', item => {
        item.maxDamage = 112
      })
      event.modify('minecraft:chainmail_boots', item => {
        item.maxDamage = 98
      })
})
