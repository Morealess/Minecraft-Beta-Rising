// priority: 0

JEIEvents.addItems(event => {

    // Missing
    event.add('iguanatweaksreborn:sweet_berry_seeds')
})

JEIEvents.hideItems(event => {

    // Replaced
    //event.hide('minecraft:blast_furnace')
    event.hide('minecraft:fletching_table')
    event.hide('iguanatweaksexpanded:enchanting_table')
    event.hide('iguanatweaksreborn:beacon')

    // Unused
    event.hide('sleep_tight:bedbug_spawn_egg')
    event.hide('sleep_tight:bedbug_eggs')
    event.hide('sleep_tight:night_bag')

    event.hide('iguanatweaksexpanded:copper_ore_rock')
    event.hide('iguanatweaksexpanded:iron_ore_rock')
    event.hide('iguanatweaksexpanded:gold_ore_rock')
    event.hide('iguanatweaksexpanded:flint_rock')
    event.hide('iguanatweaksexpanded:cleansed_lapis')
    event.hide('iguanatweaksexpanded:ancient_lapis')
    event.hide('iguanatweaksexpanded:firestarter')

    event.hide('minecraft:shield')
    event.hide('iguanatweaksexpanded:flint_shield')
    event.hide('iguanatweaksexpanded:coated_copper_shield')
    event.hide('iguanatweaksexpanded:solarium_shield')
    event.hide('iguanatweaksexpanded:durium_shield')
    event.hide('iguanatweaksexpanded:keego_shield')
    event.hide('iguanatweaksexpanded:quaron_shield')
    event.hide('iguanatweaksexpanded:soul_steel_shield')
    event.hide('shieldsplus:wooden_shield')
    event.hide('shieldsplus:stone_shield')
    event.hide('shieldsplus:iron_shield')
    event.hide('shieldsplus:golden_shield')
    event.hide('shieldsplus:diamond_shield')
    event.hide('shieldsplus:netherite_shield')

    event.hide('iguanatweaksexpanded:chained_copper_boots')
    event.hide('iguanatweaksexpanded:chained_copper_leggings')
    event.hide('iguanatweaksexpanded:chained_copper_helmet')
    event.hide('iguanatweaksexpanded:chained_copper_chestplate')

    event.hide('iguanatweaksexpanded:coated_copper_shovel')
    event.hide('iguanatweaksexpanded:coated_copper_sword')
    event.hide('iguanatweaksexpanded:coated_copper_axe')
    event.hide('iguanatweaksexpanded:coated_copper_pickaxe')
    event.hide('iguanatweaksexpanded:coated_copper_hoe')
    event.hide('iguanatweaksexpanded:coated_copper_hammer')

    event.hide('iguanatweaksexpanded:flint_shovel')
    event.hide('iguanatweaksexpanded:flint_sword')
    event.hide('iguanatweaksexpanded:flint_axe')
    event.hide('iguanatweaksexpanded:flint_pickaxe')
    event.hide('iguanatweaksexpanded:flint_hoe')
    event.hide('iguanatweaksexpanded:flint_hammer')
})

const JEI_RecipeTypes = Java.loadClass('mezz.jei.api.constants.RecipeTypes')

function HideAnvilRecipe(item) {
    global.jeiRuntime.getRecipeManager().createRecipeLookup(JEI_RecipeTypes.ANVIL).get().forEach(i => {    
        if (i.leftInputs[0] == item ||
            i.rightInputs[0] == item ||
            i.outputs[0] == item) {
                global.jeiRuntime.recipeManager.hideRecipes(JEI_RecipeTypes.ANVIL, [i])
        }
    })
}

// Hide Items From Anvil Tab
JEIEvents.removeRecipes(event => {

    HideAnvilRecipe('iguanatweaksexpanded:firestarter')

    HideAnvilRecipe('minecraft:shield')
    HideAnvilRecipe('iguanatweaksexpanded:flint_shield')
    HideAnvilRecipe('iguanatweaksexpanded:coated_copper_shield')
    HideAnvilRecipe('iguanatweaksexpanded:solarium_shield')
    HideAnvilRecipe('iguanatweaksexpanded:durium_shield')
    HideAnvilRecipe('iguanatweaksexpanded:keego_shield')
    HideAnvilRecipe('iguanatweaksexpanded:quaron_shield')
    HideAnvilRecipe('iguanatweaksexpanded:soul_steel_shield')
    HideAnvilRecipe('shieldsplus:wooden_shield')
    HideAnvilRecipe('shieldsplus:stone_shield')
    HideAnvilRecipe('shieldsplus:iron_shield')
    HideAnvilRecipe('shieldsplus:golden_shield')
    HideAnvilRecipe('shieldsplus:diamond_shield')
    HideAnvilRecipe('shieldsplus:netherite_shield')

    HideAnvilRecipe('iguanatweaksexpanded:chained_copper_boots')
    HideAnvilRecipe('iguanatweaksexpanded:chained_copper_leggings')
    HideAnvilRecipe('iguanatweaksexpanded:chained_copper_helmet')
    HideAnvilRecipe('iguanatweaksexpanded:chained_copper_chestplate') 

    HideAnvilRecipe('iguanatweaksexpanded:coated_copper_shovel')
    HideAnvilRecipe('iguanatweaksexpanded:coated_copper_sword')
    HideAnvilRecipe('iguanatweaksexpanded:coated_copper_axe')
    HideAnvilRecipe('iguanatweaksexpanded:coated_copper_pickaxe')
    HideAnvilRecipe('iguanatweaksexpanded:coated_copper_hoe')
    HideAnvilRecipe('iguanatweaksexpanded:coated_copper_hammer')

    HideAnvilRecipe('iguanatweaksexpanded:flint_shovel')
    HideAnvilRecipe('iguanatweaksexpanded:flint_sword')
    HideAnvilRecipe('iguanatweaksexpanded:flint_axe')
    HideAnvilRecipe('iguanatweaksexpanded:flint_pickaxe')
    HideAnvilRecipe('iguanatweaksexpanded:flint_hoe')
    HideAnvilRecipe('iguanatweaksexpanded:flint_hammer')
})
