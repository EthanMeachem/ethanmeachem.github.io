extends Area3D
var token = 0

var animationPlayer
func _ready():
	animationPlayer = get_node("/root/" + get_tree().current_scene.name + "/HouseInterior/Jumpscares/AnimationPlayer")

func _on_body_entered(body):
	if body == get_node("/root/" + get_tree().current_scene.name + "/Character") and token <= 0:
		print("Jumpscare played")
		$ScareSound.play()
		animationPlayer.play("JumpScare")
		token+=1
		await get_tree().create_timer(0.75).timeout
		Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)
		get_tree().change_scene_to_file("res://game_over.tscn")
		
