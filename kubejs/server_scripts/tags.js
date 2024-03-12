// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.tags('block', event => {

    // I never liked this tbh for some reason can't remove tag with datapack
    event.remove('minecraft:mineable/hoe', '/(.*)_leaves/')

})