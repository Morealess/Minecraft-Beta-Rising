execute unless entity @e[type=pig,distance=..2] run scoreboard players set @s pigfly_riding 0
execute unless entity @e[type=pig,distance=..2] run scoreboard players set @s pigfly_current 0
execute unless entity @e[type=pig,distance=..2] run scoreboard players set @s pigfly_goal 0
execute unless entity @e[type=pig,distance=..2] run scoreboard players set @s pigfly_input 5
advancement revoke @s only niknok:technical/when_pigs_fly_ad1




execute if score @s pigfly_riding matches 0 run execute if entity @e[type=pig, distance=..0.5, limit=1] run scoreboard players set @s pigfly_riding 1
execute if score @s pigfly_riding matches 1 run execute store result score @s pigfly_current run data get entity @s Pos[1]
execute if score @s pigfly_riding matches 2 run execute store result score @s pigfly_current run data get entity @s Pos[1]

execute if score @s pigfly_riding matches 1 run scoreboard players operation @s pigfly_goal = @s pigfly_current
execute if score @s pigfly_riding matches 1 run scoreboard players operation @s pigfly_goal -= @s pigfly_input
execute if score @s pigfly_riding matches 1 run execute if block ~ ~-1 ~ minecraft:air run execute if block ~ ~-2 ~ minecraft:air run execute if block ~ ~-3 ~ minecraft:air run execute if block ~ ~-4 ~ minecraft:air run execute if block ~ ~-5 ~ minecraft:air run scoreboard players set @s pigfly_riding 2



execute if score @s pigfly_riding matches 2 run execute if score @s pigfly_current <= @s pigfly_goal run advancement grant @s only niknok:minecraft/when_pigs_fly
execute if score @s pigfly_riding matches 2 run execute unless block ~ ~-1 ~ minecraft:air run scoreboard players set @s pigfly_riding 1