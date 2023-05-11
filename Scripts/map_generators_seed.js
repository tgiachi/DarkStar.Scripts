add_map_strategy(MAP_TYPE_CITY, (context) => {
	context.SetMapStrategy(MAP_GENERATOR_TYPE_CELLULAR_AUTOMATA);
	context.SetMapSize(50, 50);
	context.SetTerrainTiles("7296", "6272");

	return context;
});

add_map_strategy(MAP_TYPE_DUNGEON, (context) => {
	context.SetMapStrategy(MAP_GENERATOR_TYPE_DUNGEON);
	context.SetMapSize(50, 50);
	context.SetTerrainTiles("7296", "2");

	return context;
});

// Example of map generator
add_map_generator(MAP_TYPE_CITY, (context) => {
	const t = random_range(1, 10);
	const dice = parse_dice_exp("1d4+5");
	log("random range is " + t);
	log("dice expression 1d4+5 is" + dice);

	context.AddGameObjects(t, GAMEOBJECT_PROP_MUSHROOM);
	context.AddGameObjects(1, GAMEOBJECT_INTERNAL_SPAWNER_GOLD);
	//context:AddGameObjects(1, GAMEOBJECT_INTERNAL_SPAWNER_SILVER)
	context.AddNpcs(random_range(1, 5), NPC_TYPE_ANIMAL, NPC_SUBTYPE_CAT);
	context.AddNpcs(
		random_range(1, 5),
		NPC_TYPE_HUMAN,
		NPC_SUBTYPE_MUSHROOM_FINDER
	);

	return context;
});

add_map_generator(MAP_TYPE_DUNGEON, (context) => {
	return context;
});
