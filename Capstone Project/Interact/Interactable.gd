extends CollisionObject3D
class_name Interactable

@export var connect_door = StaticBody3D


@export var prompt_message = "Interact"
@export var prompt_input = "interact"

#displays on screen prompt to interact when the player is hovering an interactable object
func get_prompt():
	var key_name = ""
	for action in InputMap.action_get_events(prompt_input):
		if action is InputEventKey:
			key_name = action.as_text_physical_keycode()
			break
	return prompt_message + "\n[" + key_name + "]"

func interact(body, collider):
	#runs when door is interacted with
	if collider.name == "Door":
		$DoorOpen.play()
		var destination = connect_door.global_transform.origin
		body.global_transform.origin = destination
		emit_signal("door_entered")
		
		
