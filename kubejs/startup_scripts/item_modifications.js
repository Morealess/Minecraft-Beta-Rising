// priority: 0

ItemEvents.modification(event => {

    // EMI fix
    event.modify(global.itemsToErase, item => {
        item.burnTime = 0;
    })

    // Fletching Table - Replace
    event.modify('iguanatweaksexpanded:fletching_table', item => {
        item.burnTime = 300 // 1.5 items
    })

    // Viable Firewood
    event.modify('yaam:firewood', item => {
        item.burnTime = 2000 // 10 items
    })

    // New Diamond Level Tools
    event.modify([
        'iguanatweaksexpanded:keego_shovel', 'iguanatweaksexpanded:keego_pickaxe', 'iguanatweaksexpanded:keego_axe', 'iguanatweaksexpanded:keego_hoe', 'iguanatweaksexpanded:keego_hammer', 'iguanatweaksexpanded:keego_sword', //'iguanatweaksexpanded:solarium_shovel', 'iguanatweaksexpanded:keego_helmet', 'iguanatweaksexpanded:keego_chestplate', 'iguanatweaksexpanded:keego_leggings', 'iguanatweaksexpanded:keego_boots', 'iguanatweaksexpanded:keego_shield',
        'iguanatweaksexpanded:solarium_pickaxe', 'iguanatweaksexpanded:solarium_axe', 'iguanatweaksexpanded:solarium_hoe', 'iguanatweaksexpanded:solarium_hammer', 'iguanatweaksexpanded:solarium_sword', //'iguanatweaksexpanded:solarium_helmet', 'iguanatweaksexpanded:solarium_chestplate', 'iguanatweaksexpanded:solarium_leggings', 'iguanatweaksexpanded:solarium_boots', 'iguanatweaksexpanded:solarium_shield',
        'iguanatweaksexpanded:soul_steel_shovel', 'iguanatweaksexpanded:soul_steel_pickaxe', 'iguanatweaksexpanded:soul_steel_axe', 'iguanatweaksexpanded:soul_steel_hoe', 'iguanatweaksexpanded:soul_steel_hammer', 'iguanatweaksexpanded:soul_steel_sword', //'iguanatweaksexpanded:soul_steel_helmet', 'iguanatweaksexpanded:soul_steel_chestplate', 'iguanatweaksexpanded:soul_steel_leggings', 'iguanatweaksexpanded:soul_steel_boots', 'iguanatweaksexpanded:soul_steel_shield',
        'minecraft:netherite_shovel', 'minecraft:netherite_pickaxe', 'minecraft:netherite_axe', 'minecraft:netherite_hoe', 'iguanatweaksexpanded:netherite_hammer', 'minecraft:netherite_sword'//, 'minecraft:netherite_helmet', 'minecraft:netherite_chestplate', 'minecraft:netherite_leggings', 'minecraft:netherite_boots', 'shieldsplus:netherite_shield'
    ], item => {
        item.setTier(tier => {
            tier.level = 3
        })
    })

    // Emerald Repairing // ONLY TOOLS WILL SHOW IN EMI ;( armor functionality here is missing/broken, so I'm relying on Quark's "Diamond Repair" tweak to make armor repairable with emeralds );
    event.modify(['iguanatweaksexpanded:solarium_shovel', 'iguanatweaksexpanded:solarium_pickaxe', 'iguanatweaksexpanded:solarium_axe', 'iguanatweaksexpanded:solarium_hoe', 'iguanatweaksexpanded:solarium_hammer', 'iguanatweaksexpanded:solarium_sword'], item => {
        item.setTier(tier => {
            tier.repairIngredient = 'minecraft:emerald';
        });
    });

    // Craftable Obsidian Armor?
    //event.modify(['aether:obsidian_helmet', 'aether:obsidian_chestplate', 'aether:obsidian_leggings', 'aether:obsidian_boots', 'aether:obsidian_gloves'], item => {
    //  item.rarity = 'common'
    //})
});

BlockEvents.modification(event => {
    // Proper & CRISPY Steel Sound
    event.modify('iguanatweaksexpanded:durium_block', block => { block.setSoundType('netherite_block') })
})
