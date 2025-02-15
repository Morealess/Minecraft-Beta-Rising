// priority: 1

console.log("Started trades.js")

MoreJSEvents.villagerTrades(event => {

    /*
    interface TradeFilter {
        first: string | Item | Ingredient
        second: string | Item | Ingredient
        output: string | Item | Ingredient
        firstCount: number | Range
        secondCount: number | Range
        outputCount: number | Range
        level: number | Range
        professions: string | string[]
    }*/

    // This fixes a glitch where you could shift click trades to stack unstackable foods! And, well... looks better. +1

    // BUTCHERS //
    event.removeTrades({
        firstItem: "minecraft:chicken",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 1,
        professions: "minecraft:butcher",
    })
    event.addTrade("minecraft:butcher", 1, "minecraft:chicken", "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:porkchop",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 1,
        professions: "minecraft:butcher",
    })
    event.addTrade("minecraft:butcher", 1, "minecraft:porkchop", "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:rabbit",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 1,
        professions: "minecraft:butcher",
    })
    event.addTrade("minecraft:butcher", 1, "minecraft:rabbit", "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:emerald",
        secondItem: "minecraft:air",
        outputItem: "minecraft:cooked_porkchop",
        level: 2,
        professions: "minecraft:butcher",
    })
    event.addTrade("minecraft:butcher", 2, "minecraft:emerald", "minecraft:cooked_porkchop")

    event.removeTrades({
        firstItem: "minecraft:emerald",
        secondItem: "minecraft:air",
        outputItem: "minecraft:cooked_chicken",
        level: 2,
        professions: "minecraft:butcher",
    })
    event.addTrade("minecraft:butcher", 2, "minecraft:emerald", "minecraft:cooked_chicken")

    event.removeTrades({
        firstItem: "minecraft:mutton",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 3,
        professions: "minecraft:butcher",
    })
    event.addTrade("minecraft:butcher", 3, "minecraft:mutton", "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:beef",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 3,
        professions: "minecraft:butcher",
    })
    event.addTrade("minecraft:butcher", 3, "minecraft:beef", "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:sweet_berries",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 5,
        professions: "minecraft:butcher",
    })
    event.addTrade("minecraft:butcher", 5, Item.of("minecraft:sweet_berries", 8), "minecraft:emerald")

    // FARMERS //
    event.removeTrades({
        firstItem: "minecraft:potato",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 1,
        professions: "minecraft:farmer",
    })
    event.addTrade("minecraft:farmer", 1, Item.of("minecraft:potato", 8), "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:carrot",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 1,
        professions: "minecraft:farmer",
    })
    event.addTrade("minecraft:farmer", 1, Item.of("minecraft:carrot", 8), "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:beetroot",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 1,
        professions: "minecraft:farmer",
    })
    event.addTrade("minecraft:farmer", 1, Item.of("minecraft:beetroot", 8), "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:emerald",
        secondItem: "minecraft:air",
        outputItem: "minecraft:bread",
        level: 1,
        professions: "minecraft:farmer",
    })
    event.addTrade("minecraft:farmer", 1, "minecraft:emerald", "minecraft:bread")

    event.removeTrades({
        firstItem: "minecraft:emerald",
        secondItem: "minecraft:air",
        outputItem: "minecraft:pumpkin_pie",
        level: 2,
        professions: "minecraft:farmer",
    })
    event.addTrade("minecraft:farmer", 2, "minecraft:emerald", "minecraft:pumpkin_pie")

    event.removeTrades({
        firstItem: "minecraft:emerald",
        secondItem: "minecraft:air",
        outputItem: "minecraft:cookie",
        level: 3,
        professions: "minecraft:farmer",
    })
    event.addTrade("minecraft:farmer", 3, "minecraft:emerald", Item.of("minecraft:cookie", 8))

    event.removeTrades({
        firstItem: "minecraft:emerald",
        secondItem: "minecraft:air",
        outputItem: "minecraft:golden_carrot",
        level: 5,
        professions: "minecraft:farmer",
    })
    event.addTrade("minecraft:farmer", 5, "minecraft:emerald", "minecraft:golden_carrot")

    // FISHERMEN //
    event.removeTrades({
        firstItem: "minecraft:emerald",
        secondItem: "minecraft:cod",
        outputItem: "minecraft:cooked_cod",
        level: 1,
        professions: "minecraft:fisherman",
    })
    event.addTrade("minecraft:fisherman", 1, ["minecraft:emerald", "minecraft:cod"], "minecraft:cooked_cod")

    event.removeTrades({
        firstItem: "minecraft:cod",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 2,
        professions: "minecraft:fisherman",
    })
    event.addTrade("minecraft:fisherman", 2, "minecraft:cod", "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:emerald",
        secondItem: "minecraft:salmon",
        outputItem: "minecraft:cooked_salmon",
        level: 2,
        professions: "minecraft:fisherman",
    })
    event.addTrade("minecraft:fisherman", 2, ["minecraft:emerald", "minecraft:salmon"], "minecraft:cooked_salmon")

    event.removeTrades({
        firstItem: "minecraft:salmon",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 3,
        professions: "minecraft:fisherman",
    })
    event.addTrade("minecraft:fisherman", 3, "minecraft:salmon", "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:tropical_fish",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 4,
        professions: "minecraft:fisherman",
    })
    event.addTrade("minecraft:fisherman", 4, "minecraft:tropical_fish", "minecraft:emerald")

    event.removeTrades({
        firstItem: "minecraft:pufferfish",
        secondItem: "minecraft:air",
        outputItem: "minecraft:emerald",
        level: 5,
        professions: "minecraft:fisherman",
    })
    event.addTrade("minecraft:fisherman", 5, "minecraft:pufferfish", "minecraft:emerald")

    // OTHER //
    event.removeTrades({
        firstItem: "minecraft:emerald",
        secondItem: "minecraft:air",
        outputItem: "minecraft:shield",
        level: 3,
        professions: "minecraft:armorer",
    })

    // SAPLINGS // Majority prev unobtainable in beta worlds etc // 
    event.addTrade("minecraft:farmer", 3, Item.of("minecraft:emerald", 10), "minecraft:oak_sapling")
    event.addTrade("minecraft:farmer", 3, Item.of("minecraft:emerald", 10), "minecraft:spruce_sapling")
    event.addTrade("minecraft:farmer", 3, Item.of("minecraft:emerald", 10), "minecraft:birch_sapling")
    event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 10), "minecraft:jungle_sapling")
    event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 10), "minecraft:acacia_sapling")
    event.addTrade("minecraft:farmer", 4, Item.of("minecraft:emerald", 10), "minecraft:dark_oak_sapling")
    event.addTrade("minecraft:farmer", 5, Item.of("minecraft:emerald", 10), "minecraft:mangrove_propagule")
    event.addTrade("minecraft:farmer", 5, Item.of("minecraft:emerald", 10), "minecraft:cherry_sapling")
})




