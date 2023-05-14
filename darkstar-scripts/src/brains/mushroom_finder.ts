/**
 * This file contains all the brains for the AI.
 */


add_ai_brain_by_type("Human", "Mushroom_Finder", (context) => {
    context.LogInfo(
        "I'm {Name} and I'm looking for mushrooms!",
        context.NpcEntity.Name
        );
    context.SendNormalMessageAsync("I'm looking for mushrooms!");
    context.MoveRandomDirection();

    if (!context.Data) {
        context.Data = {
            current_step: 0,
            path:  context.CreateListOfPoints()
        }
    }
    if (context.Data.path.length > 0) { 
        if (context.Data.current_step >= context.Data.path.length) {
            context.LogInfo("Mmmhh yummy mushroom!");
            context.SendYellMessageAsync("I've found a yummy mushroom!");
            context.EnqueueObjectActionInCurrentLocation();
            context.Data.path = context.CreateListOfPoints()
            context.Data.current_step = 0;
            return context;
        }
        const next_step = context.Data.path[context.Data.current_step];
        const diff_steps = context.Data.path.length - context.Data.current_step;
        context.LogInfo(
            "I'm {Name} and i'm moving to {NewPos} - Step remaining: {StepRemain}",
            context.NpcEntity.Name,
            next_step,
            diff_steps
            );
        context.MoveToPosition(next_step)
        context.Data.current_step = context.Data.current_step + 1;
        
    }
    const mushrooms = context.GetGameObjectsInRangeByName(GAMEOBJECT_PROP_MUSHROOM)


    if (mushrooms.Count == 0) {
        context.SendNormalMessageAsync("Sigh, no mushroom found :( !")
        context.MoveRandomDirection()
    }
  else {
      context.LogInfo("My name is {Name} and I found mushrooms! {Mushrooms}", context.NpcEntity.Name, mushrooms);
      const random_mushroom = mushrooms.ToArray()[0]

        context.Data.path = context.GetPathToPosition(random_mushroom.PointPosition())
        context.Data.current_step = 0
  }
});