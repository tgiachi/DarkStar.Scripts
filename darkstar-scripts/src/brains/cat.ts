add_ai_brain_by_type("Animal", "Cat", (context) => {
    context.LogInfo("Meowww");
    context.SendNormalMessageAsync("Meowww");
    context.MoveRandomDirection();
});
