execute unless entity @e[type=minecraft:player,distance=1..6] run execute unless entity @e[type=minecraft:zombie,distance=1..6] run execute unless entity @e[type=minecraft:husk,distance=1..6] run execute unless entity @e[type=minecraft:drowned,distance=1..6] run execute unless entity @e[type=minecraft:zombie_villager,distance=1..6] run scoreboard players set @s dia_valid_rec 0
advancement revoke @s only niknok:technical/diamonds_to_you_ad1

execute if score @s dia_valid_rec matches 0 run execute if entity @e[type=minecraft:drowned, distance=1..6, limit=1] run scoreboard players set @s dia_valid_rec 1
execute if score @s dia_valid_rec matches 0 run execute if entity @e[type=minecraft:husk, distance=1..6, limit=1] run scoreboard players set @s dia_valid_rec 1
execute if score @s dia_valid_rec matches 0 run execute if entity @e[type=minecraft:player, distance=1..6, limit=1] run scoreboard players set @s dia_valid_rec 1
execute if score @s dia_valid_rec matches 0 run execute if entity @e[type=minecraft:zombie, distance=1..6, limit=1] run scoreboard players set @s dia_valid_rec 1
execute if score @s dia_valid_rec matches 0 run execute if entity @e[type=minecraft:zombie_villager, distance=1..6, limit=1] run scoreboard players set @s dia_valid_rec 1



execute if score @s dia_valid_rec matches 1 run execute if entity @e[type=minecraft:item,distance=..6,nbt={Item:{"id":"minecraft:diamond"}}] run scoreboard players set @s dia_valid_rec 2


execute if score @s dia_valid_rec matches 2 run execute if entity @e[type=minecraft:drowned, distance=..6, limit=1, nbt={HandItems:[{id:"minecraft:diamond", Count:1b}, {}]}] run advancement grant @s only niknok:minecraft/diamonds_to_you
execute if score @s dia_valid_rec matches 2 run execute if entity @e[type=minecraft:husk, distance=..6, limit=1, nbt={HandItems:[{id:"minecraft:diamond", Count:1b}, {}]}] run advancement grant @s only niknok:minecraft/diamonds_to_you
execute if score @s dia_valid_rec matches 2 run execute if entity @e[type=minecraft:player, distance=..6, limit=1, nbt={HandItems:[{id:"minecraft:diamond", Count:1b}, {}]}] run advancement grant @s only niknok:minecraft/diamonds_to_you
execute if score @s dia_valid_rec matches 2 run execute if entity @e[type=minecraft:zombie, distance=..6, limit=1, nbt={HandItems:[{id:"minecraft:diamond", Count:1b}, {}]}] run advancement grant @s only niknok:minecraft/diamonds_to_you
execute if score @s dia_valid_rec matches 2 run execute if entity @e[type=minecraft:zombie_villager, distance=..6, limit=1, nbt={HandItems:[{id:"minecraft:diamond", Count:1b}, {}]}] run advancement grant @s only niknok:minecraft/diamonds_to_you

execute unless entity @e[type=minecraft:item,distance=..6,nbt={Item:{"id":"minecraft:diamond"}}] run scoreboard players set @s dia_valid_rec 0