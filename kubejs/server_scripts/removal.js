// priority: 2

console.log("Started removal.js")

//===================================================================================
// DISABLED ITEMS TO ERASE //
//===================================================================================

global.itemsToErase = [
    'sleep_tight:bedbug_eggs',
    'sleep_tight:night_bag',

    //'minecraft:totem_of_undying',
    'minecraft:trident',
    'minecraft:elytra',

    'minecraft:blast_furnace',
    'minecraft:fletching_table',
    'iguanatweaksexpanded:enchanting_table',
    'iguanatweaksreborn:beacon',
    'minecraft:smoker',

    'iguanatweaksexpanded:pumpkin_pulp',
    'iguanatweaksexpanded:altimeter',
    'iguanatweaksreborn:biome_compass',
    'iguanatweaksexpanded:repair_kit',
    'iguanatweaksexpanded:charcoal_layer',
    'iguanatweaksreborn:echo_lantern',
    'iguanatweaksexpanded:durium_shears',
    'iguanatweaksexpanded:quaron_fishing_rod',
    'minecraft:warped_fungus_on_a_stick',
    'yaam:dried_apple_slices',

    'iguanatweaksexpanded:golden_powered_rail',
    'iguanatweaksexpanded:nether_infused_powered_rail',

    'iguanatweaksreborn:solanum_neorossii',
    'iguanatweaksexpanded:solium_moss',
    'iguanatweaksexpanded:solarium_ball',

    'iguanatweaksexpanded:flint_sword',
    'iguanatweaksexpanded:flint_shovel',
    'iguanatweaksexpanded:flint_pickaxe',
    'iguanatweaksexpanded:flint_axe',
    'iguanatweaksexpanded:flint_hoe',
    'iguanatweaksexpanded:flint_hammer',

    'iguanatweaksexpanded:coated_copper_sword',
    'iguanatweaksexpanded:coated_copper_shovel',
    'iguanatweaksexpanded:coated_copper_pickaxe',
    'iguanatweaksexpanded:coated_copper_axe',
    'iguanatweaksexpanded:coated_copper_hoe',
    'iguanatweaksexpanded:coated_copper_hammer',

    // mb add
    'iguanatweaksexpanded:chained_copper_helmet',
    'iguanatweaksexpanded:chained_copper_chestplate',
    'iguanatweaksexpanded:chained_copper_leggings',
    'iguanatweaksexpanded:chained_copper_boots',

    'lost_aether_content:phoenix_sword',
    'lost_aether_content:phoenix_shovel',
    'lost_aether_content:phoenix_pickaxe',
    'lost_aether_content:phoenix_axe',
    'lost_aether_content:phoenix_hoe',

    'minecraft:netherite_upgrade_smithing_template',
    'iguanatweaksexpanded:soul_steel_upgrade_smithing_template',

    'minecraft:netherite_ingot',
    'minecraft:netherite_block',
    'minecraft:ancient_debris',
    'minecraft:netherite_scrap',
    'minecraft:netherite_shovel',
    'minecraft:netherite_pickaxe',
    'minecraft:netherite_axe',
    'minecraft:netherite_hoe',
    'iguanatweaksexpanded:netherite_hammer',
    'minecraft:netherite_sword',
    'minecraft:netherite_helmet',
    'minecraft:netherite_chestplate',
    'minecraft:netherite_leggings',
    'minecraft:netherite_boots',
    'aether:netherite_gloves',

    'iguanatweaksexpanded:soul_steel_nugget',
    'iguanatweaksexpanded:soul_steel_ingot',
    'iguanatweaksexpanded:soul_steel_block',
    'iguanatweaksexpanded:soul_steel_shovel',
    'iguanatweaksexpanded:soul_steel_pickaxe',
    'iguanatweaksexpanded:soul_steel_axe',
    'iguanatweaksexpanded:soul_steel_hoe',
    'iguanatweaksexpanded:soul_steel_hammer',
    'iguanatweaksexpanded:soul_steel_sword',
    'iguanatweaksexpanded:soul_steel_helmet',
    'iguanatweaksexpanded:soul_steel_chestplate',
    'iguanatweaksexpanded:soul_steel_leggings',
    'iguanatweaksexpanded:soul_steel_boots',

    'minecraft:shield',
    'shieldsplus:wooden_shield',
    'shieldsplus:stone_shield',
    'shieldsplus:iron_shield',
    'shieldsplus:golden_shield',
    'shieldsplus:diamond_shield',
    'shieldsplus:netherite_shield',
    'iguanatweaksexpanded:flint_shield',
    'iguanatweaksexpanded:copper_shield',
    'iguanatweaksexpanded:solarium_shield',
    'iguanatweaksexpanded:durium_shield',
    'iguanatweaksexpanded:keego_shield',
    'iguanatweaksexpanded:coated_copper_shield',
    'iguanatweaksexpanded:quaron_shield',
    'iguanatweaksexpanded:soul_steel_shield',
    'lost_aether_content:zanite_shield', 
    'lost_aether_content:gravitite_shield', 
    'lost_aether_content:shield_of_emile',
    
    'iguanatweaksexpanded:copper_ore_rock',
    'iguanatweaksexpanded:iron_ore_rock',
    'iguanatweaksexpanded:gold_ore_rock',
    'iguanatweaksexpanded:flint_rock',
    'iguanatweaksexpanded:poor_iron_ore',
    'iguanatweaksexpanded:rich_iron_ore',
    'iguanatweaksexpanded:poor_deepslate_iron_ore',
    'iguanatweaksexpanded:rich_deepslate_iron_ore',
    'iguanatweaksexpanded:poor_gold_ore',
    'iguanatweaksexpanded:rich_gold_ore',
    'iguanatweaksexpanded:poor_deepslate_gold_ore',
    'iguanatweaksexpanded:rich_deepslate_gold_ore',
    'iguanatweaksexpanded:poor_copper_ore',
    'iguanatweaksexpanded:rich_copper_ore',
    'iguanatweaksexpanded:poor_deepslate_copper_ore',
    'iguanatweaksexpanded:rich_deepslate_copper_ore',
    
    'betterbundles:copper_bundle',
    'betterbundles:iron_bundle',
    'betterbundles:silver_bundle',
    'betterbundles:gold_bundle',
    'betterbundles:diamond_bundle',
    'betterbundles:netherite_bundle',

    '/nec:(?!(black(.*)|blue(.*)|brown(.*)|cyan(.*)|gray(.*)|green(.*)|light_blue(.*)|light_gray(.*)|lime(.*)|magenta(.*)|orange(.*)|pink(.*)|purple(.*)|red(.*)|white(.*)|yellow(.*)))(.*)chest/',
    '/igleelib:(.*)/',

    // Birch Wood Deletion
    'minecraft:birch_planks',
    'minecraft:birch_stairs',
    'minecraft:birch_slab',
    'minecraft:birch_button',
    'minecraft:birch_pressure_plate',
    'minecraft:birch_trapdoor',
    'minecraft:birch_door',
    'minecraft:birch_fence_gate',
    'minecraft:birch_fence',
    'minecraft:birch_sign',
    'minecraft:birch_hanging_sign',
    'minecraft:birch_boat',
    'minecraft:birch_chest_boat',

    // Spruce Wood Deletion
    'minecraft:spruce_planks',
    'minecraft:spruce_stairs',
    'minecraft:spruce_slab',
    'minecraft:spruce_button',
    'minecraft:spruce_pressure_plate',
    'minecraft:spruce_trapdoor',
    'minecraft:spruce_door',
    'minecraft:spruce_fence_gate',
    'minecraft:spruce_fence',
    'minecraft:spruce_sign',
    'minecraft:spruce_hanging_sign',
    'minecraft:spruce_boat',
    'minecraft:spruce_chest_boat',

    // Acacia Wood Deletion
    'minecraft:acacia_planks',
    'minecraft:acacia_stairs',
    'minecraft:acacia_slab',
    'minecraft:acacia_button',
    'minecraft:acacia_pressure_plate',
    'minecraft:acacia_trapdoor',
    'minecraft:acacia_door',
    'minecraft:acacia_fence_gate',
    'minecraft:acacia_fence',
    'minecraft:acacia_sign',
    'minecraft:acacia_hanging_sign',
    'minecraft:acacia_boat',
    'minecraft:acacia_chest_boat',

    // Jungle Wood Deletion
    'minecraft:jungle_planks',
    'minecraft:jungle_stairs',
    'minecraft:jungle_slab',
    'minecraft:jungle_button',
    'minecraft:jungle_pressure_plate',
    'minecraft:jungle_trapdoor',
    'minecraft:jungle_door',
    'minecraft:jungle_fence_gate',
    'minecraft:jungle_fence',
    'minecraft:jungle_sign',
    'minecraft:jungle_hanging_sign',
    'minecraft:jungle_boat',
    'minecraft:jungle_chest_boat',

    // Dark Oak Wood Deletion
    'minecraft:dark_oak_planks',
    'minecraft:dark_oak_stairs',
    'minecraft:dark_oak_slab',
    'minecraft:dark_oak_button',
    'minecraft:dark_oak_pressure_plate',
    'minecraft:dark_oak_trapdoor',
    'minecraft:dark_oak_door',
    'minecraft:dark_oak_fence_gate',
    'minecraft:dark_oak_fence',
    'minecraft:dark_oak_sign',
    'minecraft:dark_oak_hanging_sign',
    'minecraft:dark_oak_boat',
    'minecraft:dark_oak_chest_boat',

    // Cherry Wood Deletion
    'minecraft:cherry_log',
    'quark:hollow_cherry_log',
    'minecraft:cherry_wood',
    'minecraft:cherry_planks',
    'minecraft:cherry_stairs',
    'minecraft:cherry_slab',
    'minecraft:cherry_button',
    'minecraft:cherry_pressure_plate',
    'minecraft:cherry_trapdoor',
    'minecraft:cherry_door',
    'minecraft:cherry_fence_gate',
    'minecraft:cherry_fence',
    'minecraft:cherry_sign',
    'minecraft:cherry_hanging_sign',
    'minecraft:cherry_boat',
    'minecraft:cherry_chest_boat',

    // Mangrove Wood Deletion
    'minecraft:mangrove_log',
    'quark:hollow_mangrove_log',
    'minecraft:mangrove_wood',
    'minecraft:mangrove_planks',
    'minecraft:mangrove_stairs',
    'minecraft:mangrove_slab',
    'minecraft:mangrove_button',
    'minecraft:mangrove_pressure_plate',
    'minecraft:mangrove_trapdoor',
    'minecraft:mangrove_door',
    'minecraft:mangrove_fence_gate',
    'minecraft:mangrove_fence',
    'minecraft:mangrove_sign',
    'minecraft:mangrove_hanging_sign',
    'minecraft:mangrove_boat',
    'minecraft:mangrove_chest_boat',

    // Bamboo Wood Deletion
    'minecraft:bamboo_planks',
    'minecraft:bamboo_stairs',
    'minecraft:bamboo_slab',
    'minecraft:bamboo_button',
    'minecraft:bamboo_pressure_plate',
    'minecraft:bamboo_trapdoor',
    'minecraft:bamboo_door',
    'minecraft:bamboo_fence_gate',
    'minecraft:bamboo_fence',
    'minecraft:bamboo_sign',
    'minecraft:bamboo_hanging_sign',
    //'minecraft:bamboo_boat',
    //'minecraft:bamboo_chest_boat',

    // Crimson Wood Deletion
    'minecraft:crimson_planks',
    'minecraft:crimson_stairs',
    'minecraft:crimson_slab',
    'minecraft:crimson_button',
    'minecraft:crimson_pressure_plate',
    'minecraft:crimson_trapdoor',
    'minecraft:crimson_door',
    'minecraft:crimson_fence_gate',
    'minecraft:crimson_fence',
    //'minecraft:crimson_nylium',
    //'minecraft:crimson_fungus',
    //'minecraft:crimson_roots',
    'minecraft:crimson_sign',
    'minecraft:crimson_hanging_sign',

    // Warped Wood Deletion
    'minecraft:warped_planks',
    'minecraft:warped_stairs',
    'minecraft:warped_slab',
    'minecraft:warped_button',
    'minecraft:warped_pressure_plate',
    'minecraft:warped_trapdoor',
    'minecraft:warped_door',
    'minecraft:warped_fence_gate',
    'minecraft:warped_fence',
    //'minecraft:warped_nylium',
    //'minecraft:warped_fungus',
    //'minecraft:warped_roots',
    'minecraft:warped_sign',
    'minecraft:warped_hanging_sign',

    // Skyroot Wood Deletion
    'aether:skyroot_planks',
    'aether:skyroot_bookshelf',
    'aether:skyroot_stairs',
    'aether:skyroot_slab',
    'aether:skyroot_button',
    'aether:skyroot_pressure_plate',
    'aether:skyroot_trapdoor',
    'aether:skyroot_door',
    'aether:skyroot_fence_gate',
    'aether:skyroot_fence',
    'aether:skyroot_sign',
    'aether:skyroot_hanging_sign',
    'aether:skyroot_boat',
    'aether:skyroot_chest_boat',
    'aether:skyroot_bucket',
    'aether:skyroot_water_bucket',
    'aether:skyroot_pufferfish_bucket',
    'aether:skyroot_salmon_bucket',
    'aether:skyroot_cod_bucket',
    'aether:skyroot_tropical_fish_bucket',
    'aether:skyroot_axolotl_bucket',
    'aether:skyroot_tadpole_bucket',
    'aether:skyroot_powder_snow_bucket',
    'aether:skyroot_milk_bucket',
    'aether:skyroot_remedy_bucket',
    'aether:skyroot_poison_bucket',
    'aether:skyroot_bed',

    // Stripped Wood Deletion
    'minecraft:stripped_oak_wood',
    'minecraft:stripped_oak_log',
    'minecraft:stripped_spruce_wood',
    'minecraft:stripped_spruce_log',
    'minecraft:stripped_birch_wood',
    'minecraft:stripped_birch_log',
    'minecraft:stripped_acacia_wood',
    'minecraft:stripped_acacia_log',
    'minecraft:stripped_jungle_wood',
    'minecraft:stripped_jungle_log',
    'minecraft:stripped_dark_oak_wood',
    'minecraft:stripped_dark_oak_log',
    'minecraft:stripped_cherry_wood',
    'minecraft:stripped_cherry_log',
    'minecraft:stripped_mangrove_log',
    'minecraft:stripped_mangrove_wood',
    'minecraft:stripped_crimson_stem',
    'minecraft:stripped_crimson_hyphae',
    'minecraft:stripped_warped_stem',
    'minecraft:stripped_warped_hyphae',
    'aether:stripped_skyroot_log',
    'aether:stripped_skyroot_wood',

    //'minecraft:nether_sprouts',
    //'minecraft:weeping_vines',
    //'minecraft:twisting_vines',
    //'minecraft:nether_wart_block',
    //'minecraft:warped_wart_block',

    'minecraft:frogspawn',
    'minecraft:tadpole_bucket',
    'minecraft:ochre_froglight',
    'minecraft:verdant_froglight',
    'minecraft:pearlescent_froglight',

    'minecraft:pitcher_pod',
    'minecraft:pitcher_plant',
    'minecraft:torchflower',
    'minecraft:torchflower_seeds',
    'minecraft:sniffer_egg',
    'minecraft:brush',
    'minecraft:suspicious_gravel',
    'minecraft:suspicious_sand',
    'minecraft:angler_pottery_sherd',
    'minecraft:archer_pottery_sherd',
    'minecraft:arms_up_pottery_sherd',
    'minecraft:blade_pottery_sherd',
    'minecraft:brewer_pottery_sherd',
    'minecraft:burn_pottery_sherd',
    'minecraft:danger_pottery_sherd',
    'minecraft:explorer_pottery_sherd',
    'minecraft:friend_pottery_sherd',
    'minecraft:heart_pottery_sherd',
    'minecraft:heartbreak_pottery_sherd',
    'minecraft:howl_pottery_sherd',
    'minecraft:miner_pottery_sherd',
    'minecraft:mourner_pottery_sherd',
    'minecraft:plenty_pottery_sherd',
    'minecraft:prize_pottery_sherd',
    'minecraft:sheaf_pottery_sherd',
    'minecraft:shelter_pottery_sherd',
    'minecraft:skull_pottery_sherd',
    'minecraft:snort_pottery_sherd',
    
    'supplementaries:sign_post_oak',
    'supplementaries:sign_post_birch',
    'supplementaries:sign_post_spruce',
    'supplementaries:sign_post_acacia',
    'supplementaries:sign_post_mangrove',
    'supplementaries:sign_post_cherry',
    'supplementaries:sign_post_bamboo',
    'supplementaries:sign_post_crimson',
    'supplementaries:sign_post_warped',
    'supplementaries:sign_post_dark_oak',
    'supplementaries:sign_post_jungle',
    'supplementaries:aether/sign_post_skyroot',
    'supplementaries:quark/sign_post_ancient',
    'supplementaries:quark/sign_post_azalea',
    'supplementaries:quark/sign_post_blossom',

    'minecraft:shulker_box',
    'minecraft:white_shulker_box',
    'minecraft:light_gray_shulker_box',
    'minecraft:gray_shulker_box',
    'minecraft:black_shulker_box',
    'minecraft:brown_shulker_box',
    'minecraft:red_shulker_box',
    'minecraft:orange_shulker_box',
    'minecraft:yellow_shulker_box',
    'minecraft:lime_shulker_box',
    'minecraft:green_shulker_box',
    'minecraft:cyan_shulker_box',
    'minecraft:light_blue_shulker_box',
    'minecraft:blue_shulker_box',
    'minecraft:purple_shulker_box',
    'minecraft:magenta_shulker_box',
    'minecraft:pink_shulker_box',

    // seriously wtf
    'minecraft:disc_fragment_5',
    'minecraft:music_disc_5',

    // Too Many Blocks
    'minecraft:calcite',
    '/quark:(.*)calcite(.*)/',

    'minecraft:shroomlight',

    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_button',
    'aether:holystone_button',
    'aether:holystone_pressure_plate',

    // Wood
    '/quark:(.*)vertical(.*)/',
    '/quark:(.*)post/',
    
    '/quark:(.*)ancient(.*)/',
    '/quark:(.*)blossom(.*)/',
    '/quark:(?!(azalea_leaf_carpet|azalea_hedge|flowering_azalea_leaf_carpet|flowering_azalea_hedge))(.*)azalea(.*)/',

    // Variants
    '/quark:(?!(iron_ladder))(.*)ladder/',
    '/quark:(.*)bookshelf/',
    '/quark:(.*)chest/',

    '/quark:(.*)limestone(.*)/',
    '/quark:(.*)jasper(.*)/',
    '/quark:(.*)shale(.*)/',

    // Misc
    'quark:diamond_heart',
    'quark:ravager_hide',
    'quark:forgotten_hat',
    'quark:torch_arrow',
    'quark:pickarang',
    'quark:flamerang',
    'quark:iron_rod',
    'quark:dragon_scale',
    'quark:blackstone_furnace',
    'quark:deepslate_furnace',
    'quark:ancient_tomb',
    'quark:ancient_fruit',
    'quark:seed_pouch',
    //'quark:pathfinders_quill',
    'quark:glow_shroom',
    'quark:glow_shroom_block',
    'quark:glow_shroom_stem',
    'quark:glow_shroom_ring',
    'quark:glow_lichen_growth',
    'quark:crab_leg',
    'quark:cooked_crab_leg',
    'quark:crab_shell',
    'quark:crab_bucket',
    //'quark:diamond_heart',
    '/quark:(.*)shard/',
    //'quark:dirty_glass',
    //'quark:dirty_glass_pane',

    'quark:rope',
    'quark:crate',
    'quark:backpack',
    'quark:hammer',
    'quark:tiny_potato',
    'quark:magnetized_block',
    'quark:magnet',
    'quark:pipe',
    'quark:encased_pipe',
    'quark:matrix_enchanter',

    'quark:chorus_fruit_block',
    'quark:golden_apple_crate',
    'quark:apple_crate',
    'quark:potato_crate',
    'quark:carrot_crate',
    'quark:golden_carrot_crate',
    'quark:beetroot_crate',
    'quark:glowberry_sack',
    'quark:berry_sack',
    'quark:cocoa_beans_sack',
    'quark:nether_wart_sack',
    'quark:gunpowder_sack',
    'quark:sugar_cane_block',
    'quark:cactus_block',
    'quark:bonded_ravager_hide',

    // Spawn Eggs // Mobs
    'quark:forgotten_spawn_egg',
    'quark:shiba_spawn_egg',
    'quark:toretoise_spawn_egg',
    'quark:crab_spawn_egg',
    'quark:stoneling_spawn_egg',
    'supplementaries:red_merchant_spawn_egg',
    'sleep_tight:bedbug_spawn_egg',
    'minecraft:husk_spawn_egg',
    'minecraft:stray_spawn_egg',
    //'minecraft:polar_bear_spawn_egg',
    'minecraft:panda_spawn_egg',
    'minecraft:camel_spawn_egg',
    'minecraft:llama_spawn_egg',
    'minecraft:trader_llama_spawn_egg',
    //'minecraft:wandering_trader_spawn_egg',
    //'minecraft:goat_spawn_egg',
    'minecraft:fox_spawn_egg',
    'minecraft:cat_spawn_egg',    
    'minecraft:tadpole_spawn_egg',
    'minecraft:frog_spawn_egg',
    'minecraft:strider_spawn_egg',
    'minecraft:sniffer_spawn_egg',
];

//===================================================================================
// INFO //
//===================================================================================

global.itemsToErase.forEach(item => {
    console.log(`[DISABLED]: ${item}`);
});

LootJS.modifiers((event) => {
    const modifiers = event.getGlobalModifiers();
    console.log(`Printing Registered Loot Modifiers...`)
    modifiers.forEach((modifier) => {
        console.log(`Loot Modifiers: ${modifier}`)
    });
});

//===================================================================================
// ERASE LOOT //
//===================================================================================

console.info("Removing Loot...");

LootJS.modifiers((event) => {
    //event.addBlockLootModifier(/.*/).removeLoot(itemsToErase)
    //event.addLootTableModifier(/.*/).removeLoot(itemsToErase)
    
    // Remove loot from every available LootType
    const lootTypes = [
      LootType.UNKNOWN,
      LootType.BLOCK,
      LootType.ENTITY,
      LootType.CHEST,
      LootType.FISHING,
      LootType.GIFT
  ];

  lootTypes.forEach((type) => {
      event.addLootTypeModifier(type).removeLoot(global.itemsToErase);
  });
});

//===================================================================================
// ERASE TAGS //
//===================================================================================

console.info("Removing Tags...");

ServerEvents.tags('item', event => {
    // Clear all item tags
    global.itemsToErase.forEach((itemID) => {
        event.removeAllTagsFrom(itemID);
    });
});

ServerEvents.tags('block', event => {
    // Clear all block tags
    global.itemsToErase.forEach((itemID) => {
        event.removeAllTagsFrom(itemID);
    });
});


//===================================================================================
// ERASE RECIPES //
//===================================================================================

console.info("Removing Recipes...");

ServerEvents.recipes(event => {

    // Remove input recipes
    global.itemsToErase.forEach((IngredientID) => {
        event.remove({ input: IngredientID });
    });

    // Remove output recipes
    global.itemsToErase.forEach((IngredientID) => {
        event.remove({ output: IngredientID });
    });
});

//===================================================================================
// FIN //
//===================================================================================










