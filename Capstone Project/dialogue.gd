extends CanvasLayer

@onready var textbox = $Label
var token = 0

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	add_text("Thank   god,   a   cabin.   I've   been   lost   for   hours.")



func hideTextbox():
	textbox.text = " "
	textbox.hide()

func showTextbox():
	textbox.show()
	
func add_text(text):
	textbox.text = text
	showTextbox()
	await get_tree().create_timer(5).timeout
	hideTextbox()
	

func _on_footsteps_body_entered(body: Node3D):
	if body == get_node("/root/" + get_tree().current_scene.name + "/Character") and token <= 0:
		add_text("What   the   hell   is   that   noise?")
		token+=1



func _door_entered() -> void:
	add_text("This   place   looks   abandoned,   I   guess   nobody   will   mind   if   I   stay   the   night.")
