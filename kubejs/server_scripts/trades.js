// priority: 0

MoreJSEvents.villagerTrades((event) => {

    // Disable Trading  
    event.removeVanillaTrades()
})

MoreJSEvents.updateWandererOffers((event) => {

    // Disable Wandering Trader
    event.deleteAddedOffers();
})

