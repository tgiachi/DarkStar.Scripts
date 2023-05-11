add_game_object_type(
	"Internal_spawner_gold",
	"Internal_spawner_silver"
	)

add_game_object("Internal_spawner_gold", "Internal_spawner_gold", "3", "Internal_spawner_gold", "" )
add_game_object("Internal_spawner_silver", "Internal_spawner_silver", "4", "Internal_spawner_silver", "" )


add_game_object_action("Internal_spawner_gold", function ( context )
	print "OK"
end)

add_scheduled_game_object_action("Internal_spawner_silver", 300, function (context)

	print "OK 12"
end)