// priority: 0
console.log("Started commands.js")

// Define blocked commands and their required vanilla permission level (0–4)
const commandMap = {

    // exploitable
    "hidearmor": { permissionLevel: 1 },       // OP ≥1 required
    "showarmor": { permissionLevel: 1 },       // OP ≥1 required

    // debug
    "kjs": { permissionLevel: 2 },       // OP ≥2 required
    "kubejs": { permissionLevel: 2 },       // OP ≥2 required
    "forge": { permissionLevel: 2 },       // OP ≥2 required
    "mct": { permissionLevel: 2 },       // OP ≥2 required
    "placebo": { permissionLevel: 2 },       // OP ≥2 required
    "openguiscreen": { permissionLevel: 2 },       // OP ≥2 required
    "closeguiscreen": { permissionLevel: 2 },       // OP ≥2 required
    "fmvariable": { permissionLevel: 2 },       // OP ≥2 required

    // other
    "aether": { permissionLevel: 2 },       // OP ≥2 required
    "collective": { permissionLevel: 2 },       // OP ≥2 required
    "linkart": { permissionLevel: 2 },       // OP ≥2 required
    "mrfc": { permissionLevel: 2 },       // OP ≥2 required
    "structure_gel": { permissionLevel: 2 },       // OP ≥2 required
    "tame": { permissionLevel: 2 },       // OP ≥2 required

    // child lock
    "defaultoptions": { permissionLevel: 4 },       // OP ≥4 required
    "forgery": { permissionLevel: 4 },       // OP ≥4 required
    "forgery:client": { permissionLevel: 4 },       // OP ≥4 required
}

// Block unauthorized player's command
ServerEvents.command(event => {
    const { parseResults, input, commandName } = event
    const source = parseResults.getContext().getSource()

    // Only process player commands
    if (!source.isPlayer()) return
    const player = source.getPlayer()

    // OP Bypass
    if (source.hasPermission(4)) return

    // Check if the command is in the blocked list
    const cmd = commandMap[commandName]
    if (cmd) {
        // Block execution if player doesn't have sufficient permission level
        if (cmd.permissionLevel && !source.hasPermission(cmd.permissionLevel)) {
            player.tell(Text.red(`You cannot use /${input}`))
            event.cancel()
            console.log(`[KubeJS] Blocked ${player.username} from using /${input}`)
        }
    }
})
