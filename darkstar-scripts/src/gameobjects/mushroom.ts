add_game_object_type("Prop_Mushroom")
add_game_object("Mushroom", "Delicius mushroom", "*Mushroom*", "Prop_Mushroom", "");

add_game_object_action("Prop_Mushroom", (context) => {
    log("Bye bye mushroom!")
    context.RemoveMySelf()
});