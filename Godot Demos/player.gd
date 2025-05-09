extends CharacterBody2D


# Called when the node enters the scene tree for the first time.
func _ready():
	position = Vector2(200,100)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	var direction = Input.get_vector("left","right","up","down") 
	var speed = 400
	#position += Vector2(1,0) * 50 * delta
	#$PlayerImage.rotation += 0.1 * delta
	velocity = direction * speed
	move_and_slide()
