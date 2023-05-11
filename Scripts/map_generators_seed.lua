


-- Example of map generator
add_map_generator(MAP_TYPE_CITY, function (context)
	

	t = random_range(1, 10)
	dice = parse_dice_exp("1d4+5")
	print ("random range is " .. t)
	print ("dice expression 1d4+5 is" .. dice)

	context:AddGameObjects(t, GAMEOBJECT_PROP_MUSHROOM)
	context:AddGameObjects(1, GAMEOBJECT_INTERNAL_SPAWNER_GOLD)
	--context:AddGameObjects(1, GAMEOBJECT_INTERNAL_SPAWNER_SILVER)
	context:AddNpcs(random_range(1, 5), NPC_TYPE_ANIMAL, NPC_SUBTYPE_CAT)
	context:AddNpcs(random_range(1, 5), NPC_TYPE_HUMAN, NPC_SUBTYPE_MUSHROOM_FINDER)

	return context
end)




