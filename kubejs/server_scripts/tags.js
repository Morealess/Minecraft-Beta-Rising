// priority: 0

ServerEvents.tags('block', event => {

    // gay
    event.remove('minecraft:mineable/hoe', '/(.*)_leaves/')

})

ServerEvents.tags('item', event => {

    // Removes disabled armor from JEI 
    event.remove('minecraft:trimmable_armor', [
        'iguanatweaksexpanded:chained_copper_boots',
        'iguanatweaksexpanded:chained_copper_leggings',
        'iguanatweaksexpanded:chained_copper_helmet',
        'iguanatweaksexpanded:chained_copper_chestplate'
    ])
})