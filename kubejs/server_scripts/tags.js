// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.tags('block', event => {

    // I never liked this tbh for some reason can't remove tag with datapack
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