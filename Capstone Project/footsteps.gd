extends Area3D
var token = 0

func _on_body_entered(body):
	if body == get_node("/root/" + get_tree().current_scene.name + "/Character") and token <= 0:
		print("Footsteps played")
		$Foosteps.play()
		monitoring = false
		token+=1
		
