add_ai_brain_by_type("Animal", "Cat", (context) => {
	context.LogInfo("Meowww");
	context.SendNormalMessageAsync("Meowww");
	context.MoveRandomDirection();
});

add_ai_brain_by_type("Human", "Mushroom_Finder", (context) => {
	context.LogInfo(
		"I'm {Name} and I'm looking for mushrooms!",
		context.NpcEntity.Name
	);
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
