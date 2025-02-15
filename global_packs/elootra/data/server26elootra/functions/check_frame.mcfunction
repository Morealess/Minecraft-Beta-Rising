#
#called by: elootra:loop
#execute if entity @e[type=minecraft:item_frame,tag=!elo_tagged] run function elootra:check_frame
#

execute as @e[type=minecraft:item_frame,tag=!elo_tagged,nbt={Item:{id: "minecraft:elytra"}}] run data merge entity @s {Item:{id: "minecraft:totem_of_undying"}}
tag @e[type=minecraft:item_frame,tag=!elo_tagged] add elo_tagged