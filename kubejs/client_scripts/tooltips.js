// priority: 0

ItemEvents.tooltip((event) => {

    // Disabled Items Tooltips Indication
    global.itemsToErase.forEach(itemID => {
        event.addAdvanced(itemID, (item, advanced, text) => {
            // Retrieve the original name of the item
            const originalName = item.getDisplayName().getString();

            // Remove the default item name
            text.remove(0);

            // Add the name back but with red and strike-through formatting
            text.add(0, Text.of(`§4§m${originalName}`));
        });
    });
    
    // Fix Modern Tooltips To Match Legacy Tooltips
    Ingredient.of(/hoe|hammer/).itemIds.forEach((itemId) => {
        event.addAdvanced(itemId, (item, advanced, text) => {
            // Iterate over all tooltip lines
            for (let i = 0; i < text.length; i++) {
                let tooltip = text.get(i); // Get the tooltip Text object
                let tooltipString = tooltip.getString().trimStart(); // Get the actual string and remove leading spaces

                // Check if the tooltip matches one of the relevant patterns
                if (/Forge Cooldown|Scythe Radius|Till Cooldown/.test(tooltipString)) {
                    // Final tooltip
                    tooltipString = `+${tooltipString}`;

                    // Remove the original tooltip
                    text.remove(tooltip);

                    // Add the recolored tooltip
                    text.add(1, `§9${tooltipString}`);
                }
            }
        });
    });

    // Remove Redundant Tooltips
    Ingredient.of(/minecraft:firework_rocket/).itemIds.forEach((itemId) => {
        event.addAdvanced(itemId, (item, advanced, text) => {
            //save every tooltip that doesnt contain Flight Duration in an array
            const textElsArr = []
            for (let i = 1; i < text.length; i++) {
                if (/Flight Duration/.test(text.get(i).string)) continue;
                textElsArr.push(text.get(i));
            }
            //remove every tooltip that is not the displayname of the item
            let name = text.get(0);
            text.removeIf((e) => e !== name);
      
            //add back every tooltip except for the ones with Flight Duration
            textElsArr.forEach((textEl) => {
              text.add(text.length, [textEl]);
            });
        });
    });

    // Misc
    event.add("supplementaries:sack", "§cSlows down if 2 or more are carried");
    event.add("supplementaries:safe", "§7§oKey Lockable");

    event.add(["iguanatweaksexpanded:keego_helmet", "iguanatweaksexpanded:keego_chestplate", "iguanatweaksexpanded:keego_leggings", "iguanatweaksexpanded:keego_boots", "iguanatweaksexpanded:keego_shovel", "iguanatweaksexpanded:keego_pickaxe", "iguanatweaksexpanded:keego_axe", "iguanatweaksexpanded:keego_hoe", "iguanatweaksexpanded:keego_hammer", "iguanatweaksexpanded:keego_sword"], [Text.empty(), "§bMomentum Based"]);

    // Hold Shift Tooltip
    event.addAdvanced(Ingredient.of("minecraft:enchanted_book"), (item, advanced, text) => {
      if (event.shift) {
      } else {
        text.add("§6Hold §eShift §6to view enchantment descriptions");
      }
    });
});

MoreJSEvents.enchantmentTableTooltip((event) => {
    // Hides Enchanting Tooltips
    event.lines.clear();
});