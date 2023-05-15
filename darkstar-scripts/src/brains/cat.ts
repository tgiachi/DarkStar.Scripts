add_npc_type("Animal", "Cat", "*Cat_*")
add_npc_type("Animal", "Dog", "*Dog_*")


add_ai_brain_by_type("Animal", "Cat", (context) => {
    context.LogInfo("Meowww");
    context.SendNormalMessageAsync("Meowww");
    context.MoveRandomDirection();
});

add_ai_brain_by_type("Animal", "Dog", (context) => {
    context.LogInfo("Woof!");
    context.SendNormalMessageAsync("Woof!");
    context.MoveRandomDirection();
});