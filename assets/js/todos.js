$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newTodo + "</li>");
	};
})

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
})