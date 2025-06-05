extends Area3D

func _on_body_entered(body):
	if body == get_node("/root/" + get_tree().current_scene.name + "/Character"):
		print("Footsteps played")
		$Foosteps.play()
		monitoring = false
