// priority: 3

console.log("Started tags.js")

ServerEvents.tags('block', event => {

    // Replacing Job Blocks
    event.remove('c:villager_job_sites', 'minecraft:fletching_table')
    event.remove('forge:sites/villager_job', 'minecraft:fletching_table')
    event.remove('c:villager_job_sites', 'minecraft:blast_furnace')
    event.remove('forge:sites/villager_job', 'minecraft:blast_furnace')

    event.add('c:villager_job_sites', 'iguanatweaksexpanded:fletching_table')
    event.add('forge:sites/villager_job', 'iguanatweaksexpanded:fletching_table')
    event.add('c:villager_job_sites', 'iguanatweaksexpanded:blast_furnace')
    event.add('forge:sites/villager_job', 'iguanatweaksexpanded:blast_furnace')

    event.add('c:villager_job_sites', 'minecraft:furnace')
    event.add('forge:sites/villager_job', 'minecraft:furnace')

    // gay
    event.remove('minecraft:mineable/hoe', '/(.*)_leaves/')

    // Fixed Breaking
    event.remove('minecraft:needs_diamond_tool', ['supplementaries:safe', 'supplementaries:netherite_door', 'supplementaries:netherite_trapdoor'])
    event.add('minecraft:needs_iron_tool', ['supplementaries:safe', 'supplementaries:netherite_door', 'supplementaries:netherite_trapdoor', 'iguanatweaksexpanded:durium_block'])

    event.add('minecraft:mineable/pickaxe', 'iguanatweaksexpanded:keego_block')
    event.add('minecraft:needs_diamond_tool', 'iguanatweaksexpanded:keego_block')

    event.add('minecraft:mineable/pickaxe', 'supplementaries:hourglass')
})

ServerEvents.tags('item', event => {

    // Replacing Job Blocks
    event.remove('c:villager_job_sites', 'minecraft:fletching_table')
    event.remove('forge:sites/villager_job', 'minecraft:fletching_table')
    event.remove('c:villager_job_sites', 'minecraft:blast_furnace')
    event.remove('forge:sites/villager_job', 'minecraft:blast_furnace')

    event.add('c:villager_job_sites', 'iguanatweaksexpanded:fletching_table')
    event.add('forge:sites/villager_job', 'iguanatweaksexpanded:fletching_table')
    event.add('c:villager_job_sites', 'iguanatweaksexpanded:blast_furnace')
    event.add('forge:sites/villager_job', 'iguanatweaksexpanded:blast_furnace')

    event.add('c:villager_job_sites', 'minecraft:furnace')
    event.add('forge:sites/villager_job', 'minecraft:furnace')

    // Steel "Netherite"
    event.add('iguanatweaksreborn:world_immune', ['iguanatweaksexpanded:durium_block', 'iguanatweaksexpanded:durium_ingot', 'iguanatweaksexpanded:durium_nugget', 'supplementaries:netherite_door', 'supplementaries:netherite_trapdoor', 'iguanatweaksexpanded:durium_helmet', 'iguanatweaksexpanded:durium_chestplate', 'iguanatweaksexpanded:durium_leggings', 'iguanatweaksexpanded:durium_boots', 'iguanatweaksexpanded:durium_sword', 'iguanatweaksexpanded:durium_shears', 'iguanatweaksexpanded:durium_shield', 'iguanatweaksexpanded:durium_pickaxe', 'iguanatweaksexpanded:durium_axe', 'iguanatweaksexpanded:durium_shovel', 'iguanatweaksexpanded:durium_hoe', 'iguanatweaksexpanded:durium_hammer'])
    event.add('forge:ingots', 'iguanatweaksexpanded:durium_ingot')

    // no portable stacking
    event.add('fabrication:include_in_item_inventory_check', ['minecraft:shulker_box', 'minecraft:white_shulker_box', 'minecraft:orange_shulker_box', 'minecraft:magenta_shulker_box', 'inecraft:light_blue_shulker_box', 'minecraft:yellow_shulker_box', 'minecraft:lime_shulker_box', 'minecraft:pink_shulker_box', 'minecraft:gray_shulker_box', 'minecraft:light_gray_shulker_box', 'minecraft:cyan_shulker_box', 'minecraft:purple_shulker_box', 'minecraft:blue_shulker_box', 'minecraft:brown_shulker_box', 'minecraft:green_shulker_box', 'minecraft:red_shulker_box', 'minecraft:black_shulker_box', 'supplementaries:sack', 'supplementaries:safe', 'iguanatweaksexpanded:crate'])
    event.add('fabrication:exclude_from_item_inventory_check', 'minecraft:bundle')

    // misc
    event.remove('minecraft:villager_plantable_seeds', ['minecraft:carrot', 'minecraft:potato'])
    event.add('minecraft:villager_plantable_seeds', ['iguanatweaksreborn:carrot_seeds', 'iguanatweaksreborn:rooted_potato'])
    event.add('forge:seeds', ['iguanatweaksreborn:sweet_berry_seeds', 'iguanatweaksreborn:carrot_seeds', 'iguanatweaksreborn:rooted_potato'])

    event.remove('forge:stone', 'quark:myalite', 'quark:polished_myalite')
    event.add('minecraft:stone_tool_materials', ['#forge:stone', '#forge:cobblestone', 'minecraft:dripstone_block', 'quark:polished_dripstone', 'minecraft:tuff', 'quark:polished_tuff','minecraft:calcite', 'quark:polished_calcite'])

    event.removeAll('amendments:sets_on_fire')

    event.add('minecraft:coals', 'iguanatweaksexpanded:hellish_coal')

    event.add('minecraft:saplings', ['lost_aether_content:crystal_sapling', 'lost_aether_content:holiday_sapling'])
    
    event.add('minecraft:small_flowers', 'iguanatweaksreborn:cyan_flower')
    
    event.add('forge:eggs', ['quark:egg_parrot_red_blue', 'quark:egg_parrot_blue', 'quark:egg_parrot_green', 'quark:egg_parrot_yellow_blue', 'quark:egg_parrot_gray'])
    
    event.add('forge:slimeballs', 'quark:slime_in_a_bucket')

    event.add('forge:storage_blocks', ['iguanatweaksexpanded:quaron_block', 'iguanatweaksexpanded:keego_block', 'iguanatweaksexpanded:durium_block'])

    // gay
    event.remove('forge:rods/wooden', 'aether:skyroot_stick')
    event.add('forge:sticks', 'aether:skyroot_stick', 'minecraft:stick')
})
