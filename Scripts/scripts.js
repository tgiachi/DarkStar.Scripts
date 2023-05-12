log("  ___            _     ___ _            ");
log(" |   \\ __ _ _ _| |__ / __| |_ __ _ _ _ ");
log(" | |) / _` | '_| / / \\__ \\  _/ _` | '_|");
log(" |___/\\__,_|_| |_\\_\\ |___/\\__\\__,_|_|  ");
set_server_name("Dark sun development server");
set_server_motd("Welcome to server!");
set_player_initial_gold(100);
/**
 * This file contains all the brains for the AI.
 */
add_ai_brain_by_type("Animal", "Cat", (context) => {
    context.LogInfo("Meowww");
    context.SendNormalMessageAsync("Meowww");
    context.MoveRandomDirection();
});
add_ai_brain_by_type("Human", "Mushroom_Finder", (context) => {
    context.LogInfo("I'm {Name} and I'm looking for mushrooms!", context.NpcEntity.Name);
    context.SendNormalMessageAsync("I'm looking for mushrooms!");
    context.MoveRandomDirection();
});
// 	if context.Data == nil then
//  		-- A* data in empty
//  		context.Data = {}
//  		context.Data["path"] = {}
//  		context.Data["current_step"] = 0
// 	end
// 	if #context.Data["path"] > 0 then
// 		if context.Data["current_step"] >= table.getn(context.Data["path"]) then
// 			context:LogInfo("Mmmhh yummy mushroom!")
// 			context:SendYellMessageAsync("I've found a yummy mushroom!")
// 			context:EnqueueObjectActionInCurrentLocation()
// 			context.Data["path"]:Clear()
// 			context.Data["current_step"] = 0
// 			return context
// 		end
// 		local next_step = context.Data["path"][context.Data["current_step"]]
// 		local diff_steps = context.Data["path"]:Count() - context.Data["current_step"]
// 		context:LogInfo("I'm {Name} and i'm moving to {NewPos} - Step remaining: {StepRemain}", context.NpcEntity.Name, next_step, diff_steps)
// 		if context:MoveToPosition(next_step) then
// 			next_step = next_step + 1
// 		end
// 	end
// 	local mushrooms = context:GetGameObjectsInRangeByName(GAMEOBJECT_PROP_MUSHROOM)
// 	if mushrooms.Count == 0  then
// 		context:SendNormalMessageAsync("Sigh, no mushroom found :( !")
// 		context:MoveRandomDirection()
// 	else
// 		context:LogInfo("My name is {Name} and I found mushrooms! {Mushrooms}", context.NpcEntity.Name, mushrooms);
// 		local random_mushroom = random_list(mushrooms)
// 		context.Data["path"] = context:GetPathToPosition(random_mushroom.PointPosition())
// 		context.Data["current_step"] = 0
// 	end
//  end
on_engine_ready_event(() => {
    log("Engine is ready from JS");
});
add_game_object_type("Prop_Chest", "Internal_spawner_gold", "Internal_spawner_silver");
add_game_object("Internal_spawner_gold", "Internal_spawner_gold", "3", "Internal_spawner_gold", "");
add_game_object("Internal_spawner_silver", "Internal_spawner_silver", "4", "Internal_spawner_silver", "");
add_game_object_action("Internal_spawner_gold", (context) => {
    log("Ok");
});
add_scheduled_game_object_action("Internal_spawner_silver", 300, (context) => {
    log("OK");
});
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
    context.AddNpcs(random_range(1, 5), NPC_TYPE_HUMAN, NPC_SUBTYPE_MUSHROOM_FINDER);
    return context;
});
add_map_generator(MAP_TYPE_DUNGEON, (context) => {
    return context;
});
add_text_content("PLAYER_WELCOME_SCROLL", "Welcome to the game! ${PLAYER_NAME}");
