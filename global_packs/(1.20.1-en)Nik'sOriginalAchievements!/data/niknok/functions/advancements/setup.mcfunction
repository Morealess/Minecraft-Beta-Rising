execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add pigfly_riding dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add pigfly_goal dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add pigfly_current dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add pigfly_input dummy

execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add in_minecart dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add minecart_input_x dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add minecart_dest_x dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add minecart_input_z dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add minecart_dest_z dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add minecart_inp_xn dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add minecart_dest_xn dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add minecart_inp_zn dummy
execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add minecart_dest_zn dummy

execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add dia_valid_rec dummy

execute unless entity @a[advancements={niknok:minecraft/getting_wood=true}] run scoreboard objectives add dia_valid_rec dummy

scoreboard players set @p pig_riding 0
scoreboard players set @p pigfly_goal 0
scoreboard players set @p pigfly_current 0
scoreboard players set @p pigfly_input 0

scoreboard players set @p in_minecart 0
scoreboard players set @p minecart_input_x 0
scoreboard players set @p minecart_dest_x 0
scoreboard players set @p minecart_input_z 0
scoreboard players set @p minecart_dest_z 0
scoreboard players set @p minecart_inp_xn 0
scoreboard players set @p minecart_dest_xn 0
scoreboard players set @p minecart_inp_zn 0
scoreboard players set @p minecart_dest_zn 0

scoreboard players set @p dia_valid_rec 0





advancement revoke @p only niknok:technical/when_pigs_fly_ad1
advancement revoke @p only niknok:technical/on_a_rail_ad1
advancement revoke @p only niknok:technical/librarian_ad1
advancement revoke @p only niknok:technical/diamonds_to_you_ad1
advancement revoke @p only niknok:technical/monster_ad1