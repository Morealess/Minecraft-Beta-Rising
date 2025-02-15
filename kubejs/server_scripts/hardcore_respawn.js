// priority: 0

console.log("Started hardcore_respawn.js")

PlayerEvents.respawned(event => {
  const { player, server, keepData } = event;

  // Ignore Creative and Spectator players
  if (player.isCreative() || player.isSpectator()) return;
  
  // Skip if the player keeps data (e.g., End portal)
  if (keepData) return;
  
  const world = player.level;  // Get the world the player is in
  const difficulty = world.difficulty;  // Get the difficulty from the world

  let healthMultiplier = 1; // Default multiplier (Easy/Peaceful)
  let healthUpdated = false; // Flag to track if health has been updated successfully

  switch (difficulty) {
    case 'PEACEFUL':
      healthMultiplier = 1;  // No change
      console.log(`[RESPAWN] Peaceful difficulty detected: no health adjustment.`);
      break;
    case 'EASY':
      healthMultiplier = 1;  // No change
      console.log(`[RESPAWN] Easy difficulty detected: no health adjustment.`);
      break;
    case 'NORMAL':
      healthMultiplier = 0.5;  // 50% health (Normal style)
      console.log(`[RESPAWN] Normal difficulty detected: health multiplier set to 50%.`);
      break;
    case 'HARD':
      healthMultiplier = 0.25;  // 25% health (Hard style)
      console.log(`[RESPAWN] Hard difficulty detected: health multiplier set to 25%.`);
      break;
  }

  const maxHealth = player.maxHealth; // Max health
  const newHealth = maxHealth * healthMultiplier;  // New health, based on difficulty

  let retries = 0; // Counter to track how many retries it takes to update health

  // Function to set and check the player's health
  function setHealth() {
    retries++;

    // Log how many times the setHealth function has been executed
    console.log(`[RESPAWN] Attempt to update health: ${retries} times.`);

    // If the health is already set successfully, stop further checks
    if (healthUpdated) return;

    // Log the health status and update if necessary
    if (player.health !== newHealth) {
      console.log(`[RESPAWN] Updated ${player.name.string}'s health to ${newHealth}`);
      player.setHealth(newHealth);
    } else {
      // Health is set successfully, mark as updated
      console.log(`[RESPAWN] ${player.name.string}'s health was set to ${newHealth} out of ${maxHealth}.`);
      healthUpdated = true;
      return;
    }

    // Schedule the next health check (only if health isn't updated yet)
    server.schedule(20, setHealth);
  }

  // Start the health check process
  server.schedule(1, setHealth);
});