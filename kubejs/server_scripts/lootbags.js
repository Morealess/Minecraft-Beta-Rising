// priority: 0

console.log("Started lootbags.js")

const commonLootBag = Item.of(
    'lootbags:loot_bag',
    '{Color:11184810,Loot:"lootbags:loot_bags/common",Name:"Common Lootbag",Type:"COMMON"}'
);

const uncommonLootBag = Item.of(
    'lootbags:loot_bag',
    '{Color:5635925,Loot:"lootbags:loot_bags/uncommon",Name:"Uncommon Lootbag",Type:"UNCOMMON"}'
);

const rareLootBag = Item.of(
    'lootbags:loot_bag',
    '{Color:170,Loot:"lootbags:loot_bags/rare",Name:"Rare Lootbag",Type:"RARE"}'
);

const epicLootBag = Item.of(
    'lootbags:loot_bag',
    '{Color:11141290,Loot:"lootbags:loot_bags/epic",Name:"Epic Lootbag",Type:"EPIC"}'
);

const legendaryLootBag = Item.of(
    'lootbags:loot_bag',
    '{Color:16755200,Loot:"lootbags:loot_bags/legendary",Name:"Legendary Lootbag",Type:"LEGENDARY"}'
);

LootJS.modifiers((event) => {
    event
        .addLootTypeModifier([LootType.ENTITY])
        .matchEntity((entity) => {
            entity.anyType("#mobs_buffs:hostiles");
        })
        .randomChanceWithEnchantment("minecraft:looting", [0.01, 0.015, 0.02, 0.025]) 
        .addWeightedLoot([
            commonLootBag.withChance(50),
            uncommonLootBag.withChance(30),
            rareLootBag.withChance(15),
            epicLootBag.withChance(10),
            legendaryLootBag.withChance(5),
        ]);
});