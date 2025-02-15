// priority: 0

// Specify the path to your config file
let configPath = 'config/nostalgic_tweaks/nostalgic_tweaks.json';

// Attempt to read the config file contents
let config = JsonIO.read(configPath);

// Initialize config if it is null
if (!config) {
    console.warn("Config file is missing or empty. Initializing a new config object.");
    config = {}; // Create a new empty object if config is null
}

// Define the mod-loaded status only once for the current scope
let isStaminaModLoaded = Platform.isLoaded('stamina');
let shouldDisableSprint = !isStaminaModLoaded;

// Log the expected state for clarity
console.info(`Stamina mod loaded: ${isStaminaModLoaded}. Setting disableSprint to: ${shouldDisableSprint}`);

// Update only if necessary to avoid redundant writes
if (config.gameplay.disableSprint !== shouldDisableSprint) {
    config.gameplay.disableSprint = shouldDisableSprint;

    // Attempt to write to the config file
    let writeSuccess = JsonIO.write(configPath, config);
        
    if (writeSuccess) {
        console.info("Configuration file updated successfully.");
    } else {
        console.error("Restart Minecraft to apply changes to Disable/Enable Sprinting! (unfortunately mandatory until this script is revisited...idk).");
    }
} else {
    console.info("No changes needed. Configuration already matches the expected state.");
}


