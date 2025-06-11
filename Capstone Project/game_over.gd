extends CanvasLayer



func _on_button_pressed() -> void: #restart
	Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)
	get_tree().change_scene_to_file("res://Main Scene.tscn")
	



func _on_button_2_pressed() -> void: #quit
	get_tree().quit()
	
