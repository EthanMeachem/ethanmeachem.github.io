extends RayCast3D

@onready var prompt = $Prompt

func _physics_process(delta: float) -> void:
	prompt.text = ""
	
	#gets collider
	if is_colliding():
		var collider = get_collider()
		
		#changes prompt if interactable
		if collider is Interactable:
			prompt.text = collider.get_prompt()
			
			#sends signal if interacted
			if Input.is_action_just_pressed(collider.prompt_input):
				collider.interact(owner,collider)
