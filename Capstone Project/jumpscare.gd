extends Area3D

var animationPlayer
func _ready():
	animationPlayer = get_node("/root/" + get_tree().current_scene.name + "/HouseInterior/Jumpscares/AnimationPlayer")

func _on_body_entered(body):
	if body == get_node("/root/" + get_tree().current_scene.name + "/Character"):
		print("Jumpscare played")
		$ScareSound.play()
		animationPlayer.play("JumpScare")
		
