add_game_object_type("Internal_spawner_gold", "Internal_spawner_silver");

add_game_object(
	"Internal_spawner_gold",
	"Internal_spawner_gold",
	"3",
	"Internal_spawner_gold",
	""
);
add_game_object(
	"Internal_spawner_silver",
	"Internal_spawner_silver",
	"4",
	"Internal_spawner_silver",
	""
);

add_game_object_action("Internal_spawner_gold", (context) => {
	log("Ok");
});

add_scheduled_game_object_action("Internal_spawner_silver", 300, (context) => {
	log("OK");
});
