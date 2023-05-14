add_map_strategy(MAP_TYPE_DUNGEON, (context) => {
    context.SetMapStrategy(MAP_GENERATOR_TYPE_DUNGEON);
    context.SetMapSize(50, 50);
    context.SetTerrainTiles("7296", "2");

    return context;
});



add_map_generator(MAP_TYPE_DUNGEON, (context) => {
    return context;
});
