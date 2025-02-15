execute unless entity @e[type=minecraft:minecart,distance=..1] run scoreboard players set @s in_minecart 0
advancement revoke @s only niknok:technical/on_a_rail_ad1


execute if score @s in_minecart matches 0 run execute if entity @e[type=minecraft:minecart,distance=..1] run scoreboard players set @s in_minecart 1


execute if score @s in_minecart matches 1..2 store result score @s minecart_input_x run data get entity @s Pos[0]
execute if score @s in_minecart matches 1 run execute store result score @s minecart_dest_x run data get entity @s Pos[0]

execute if score @s in_minecart matches 1..2 store result score @s minecart_input_z run data get entity @s Pos[2]
execute if score @s in_minecart matches 1 run execute store result score @s minecart_dest_z run data get entity @s Pos[2]

execute if score @s in_minecart matches 1..2 store result score @s minecart_inp_xn run data get entity @s Pos[0]
execute if score @s in_minecart matches 1 run execute store result score @s minecart_dest_xn run data get entity @s Pos[0]

execute if score @s in_minecart matches 1..2 store result score @s minecart_inp_zn run data get entity @s Pos[2]
execute if score @s in_minecart matches 1 run execute store result score @s minecart_dest_zn run data get entity @s Pos[2]

execute if score @s in_minecart matches 0 run scoreboard players set @s minecart_dest_x 0
execute if score @s in_minecart matches 0 run scoreboard players set @s minecart_dest_z 0

execute if score @s in_minecart matches 0 run scoreboard players set @s minecart_dest_xn 0
execute if score @s in_minecart matches 0 run scoreboard players set @s minecart_dest_zn 0

execute if score @s in_minecart matches 1 run scoreboard players remove @s minecart_dest_x 1000
execute if score @s in_minecart matches 1 run scoreboard players remove @s minecart_dest_z 1000
execute if score @s in_minecart matches 1 run scoreboard players add @s minecart_dest_xn 1000
execute if score @s in_minecart matches 1 run scoreboard players add @s minecart_dest_zn 1000

execute if score @s in_minecart matches 1 run scoreboard players set @s in_minecart 2

execute if score @s in_minecart matches 2 run execute if score @s minecart_input_x < @s minecart_dest_x run scoreboard players set @s in_minecart 3
execute if score @s in_minecart matches 2 run execute if score @s minecart_input_z < @s minecart_dest_z run scoreboard players set @s in_minecart 3
execute if score @s in_minecart matches 2 run execute if score @s minecart_inp_xn > @s minecart_dest_xn run scoreboard players set @s in_minecart 3
execute if score @s in_minecart matches 2 run execute if score @s minecart_inp_zn > @s minecart_dest_zn run scoreboard players set @s in_minecart 3

execute if score @s in_minecart matches 3 run advancement grant @s only niknok:minecraft/on_a_rail