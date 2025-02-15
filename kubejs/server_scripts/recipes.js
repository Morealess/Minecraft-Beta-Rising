// priority: 0

console.log("Started recipes.js")

ServerEvents.recipes(event => {

    // Supplementaries 'Steel' Safe
    event.shaped('supplementaries:safe', [
      'SSS',
      'SBK',
      'SSS'
    ], {
      B: 'iguanatweaksexpanded:crate',
      S: 'iguanatweaksexpanded:durium_ingot',
      K: 'supplementaries:key'
    }
  ).keepIngredient('supplementaries:key').id('supplementaries:safe');
  
    // Poison Darts
    event.shaped('8x aether:poison_dart', [
      'DDD',
      'DBD',
      'DDD'
    ], {
      B: Item.of('minecraft:potion', '{Potion:"aether:inebriation"}').weakNBT(),
      D: 'aether:golden_dart'
    }
  ).replaceIngredient(Item.of('minecraft:potion', '{Potion:"aether:inebriation"}'), 'minecraft:glass_bottle').id('aether:poison_dart');
  
    // Bamboo Blocks
    event.shapeless('minecraft:stripped_bamboo_block', ['minecraft:bamboo_block', '#minecraft:axes']).damageIngredient('#minecraft:axes', 1).id('minecraft:bamboo_stripping');
});

// Missing Compostables...
ServerEvents.compostableRecipes(event=>{
    event.add(['lost_aether_content:crystal_sapling', 'lost_aether_content:holiday_sapling'], 0.3);
    event.add(['iguanatweaksreborn:carrot_seeds', 'iguanatweaksreborn:sweet_berry_seeds', 'iguanatweaksreborn:rooted_potato'], 0.3);
    event.add('iguanatweaksreborn:cyan_flower', 0.65);
});