// priority: 0

JEIEvents.hideItems(event => {

    // Replaced
    //event.hide('minecraft:blast_furnace')
    event.hide('minecraft:fletching_table')
    event.hide('iguanatweaksexpanded:enchanting_table')
    event.hide('iguanatweaksreborn:beacon')

    // Unused
    event.hide('iguanatweaksexpanded:copper_ore_rock')
    event.hide('iguanatweaksexpanded:iron_ore_rock')
    event.hide('iguanatweaksexpanded:gold_ore_rock')
    event.hide('iguanatweaksexpanded:flint_rock')
    event.hide('iguanatweaksexpanded:cleansed_lapis')
    event.hide('iguanatweaksexpanded:ancient_lapis')
    event.hide('iguanatweaksexpanded:firestarter')

    event.hide('iguanatweaksexpanded:chained_copper_boots')
    event.hide('iguanatweaksexpanded:chained_copper_leggings')
    event.hide('iguanatweaksexpanded:chained_copper_helmet')
    event.hide('iguanatweaksexpanded:chained_copper_chestplate')

    event.hide('sleep_tight:bedbug_spawn_egg')
    event.hide('sleep_tight:bedbug_eggs')
    event.hide('sleep_tight:night_bag')

    event.hide('/iguanatweaksexpanded:(.*)flint/')
    event.hide('/(.*)_shield/')

})

//Item.of('iguanatweaksexpanded:flint_shield', '{Damage:0}')

    // Rly dude
    //event.hide(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 4))
    //event.hide(('minecraft:enchanted_book').enchant('iguanatweaksreborn:bane_of_sssss'), 1)

    /*event.hide(Item.of('minecraft:enchanted_book', `{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1}]}`))

    event.hide(Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:protection",lvl:1}]}'))

    event.hide(Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}'))

    event.hide(Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"${minecraft:unbreaking}",lvl:${1}s}]}'))*/



    //event.hide(Item.of('minecraft:enchanted_book', {key: flame}))


    //event.hide(Item.of('minecraft:enchanted_book', '{Enchantments:[{id:"iguanatweaksreborn:sharpness",lvl:1}]}'))
    //event.hide(Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"iguanatweaksreborn:sharpness",lvl:1s}]}'))
    //event.hide(Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"iguanatweaksreborn:smite",lvl:1}]}'))


//    JEIEvents.hideItems(e => {
//        e.hide('minecraft:enchanted_book')
//        e.hide(Item.of('minecraft:enchanted_book', {key: flame}))
//        e.hide(Item.of('minecraft:enchanted_book').ignoreNBT())
//      })

/*
This is gonna sound really stupid, but try to make an enchantement recipe, do event.create() but give it the name of the effect, so like event.create(apotheosis:bleeding) and then add ".unobtainable".
(I think it's that, can't look at it rn)*/



































JEIEvents.addItems(event => {

    // Missing
    event.add('iguanatweaksreborn:sweet_berry_seeds')
})


//    JEIEvents.hideItems(e => {
//        e.hide('minecraft:enchanted_book')
//        e.hide(Item.of('minecraft:enchanted_book', {key: flame}))
//        e.hide(Item.of('minecraft:enchanted_book').ignoreNBT())
//      })









/*

// priority: 9999

function getMaxEnchants() {
    let enchants = {};
    Ingredient.of("@minecraft").stacks.forEach((item) => {
      if (item.getId() !== "minecraft:enchanted_book") return;
      let nbt = item.getNbt();
      for (let enchant of nbt.StoredEnchantments) {
        enchants[enchant.id] = Math.max(enchants[enchant.id] || 0, enchant.lvl);
      }
    });
    return enchants;
  }
  
  function isModifiedPotion(item) {
    if (
      item.getNbt().Potion.indexOf("long") !== -1 ||
      item.getNbt().Potion.indexOf("strong") !== -1 ||
      item.getNbt().Potion.indexOf("thick") !== -1 ||
      item.getNbt().Potion.indexOf("mundane") !== -1
    ) {
      return true;
    }
  }
  
  function emiHide() {
    console.info("Hiding items from EMI...");
  
    let potions = [
      "minecraft:potion",
      "minecraft:lingering_potion",
      "minecraft:splash_potion",
      "minecraft:tipped_arrow",
    ];
  
    let maxEnchants = getMaxEnchants();
  
    // == Hide low-level enchants and modified potions
  
    let obj = {
      removed: [],
    };
  
    Ingredient.of("@minecraft")
      .getStacks()
      .forEach((item) => {
        let itemId = item.getId();
        if (potions.includes(itemId)) {
          if (isModifiedPotion(item)) {
            let potionId = item.getNbt().Potion;
            obj.removed.push(`item:${itemId}{Potion:'${potionId}'}`);
          }
        } else if (itemId == "minecraft:enchanted_book") {
          let nbt = item.getNbt();
          for (let enchant of nbt.StoredEnchantments) {
            if (
              !(enchant.lvl == maxEnchants[enchant.id])
            ) {
              obj.removed.push(
                `item:${itemId}{StoredEnchantments:[{id:'${enchant.id}',lvl:${enchant.lvl}s}]}`
              );
            }
          }
        }
      });
  
    JsonIO.write("kubejs/assets/emi/index/stacks/hidden_stacks.json", obj);
  }
  
  emiHide()
  */