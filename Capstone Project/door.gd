extends Interactable

func _on_interacted(body):
	print("working")
	$doorOpen.play()
