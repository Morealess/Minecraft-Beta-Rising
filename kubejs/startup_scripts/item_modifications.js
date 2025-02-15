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
    event.modify(['iguanatweaksexpanded:keego_shovel', 'iguanatweaksexpanded:keego_pickaxe', 'iguanatweaksexpanded:keego_axe', 'iguanatweaksexpanded:keego_hoe', 'iguanatweaksexpanded:keego_hammer', 'iguanatweaksexpanded:keego_sword', 'iguanatweaksexpanded:solarium_shovel', 'iguanatweaksexpanded:solarium_pickaxe', 'iguanatweaksexpanded:solarium_axe', 'iguanatweaksexpanded:solarium_hoe', 'iguanatweaksexpanded:solarium_hammer', 'iguanatweaksexpanded:solarium_sword'], item => {
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
