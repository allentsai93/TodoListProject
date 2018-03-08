// Check off specific todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").prepend("<li>" + "<span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});


$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
	if ($("span").children().hasClass("fa-plus")) {
		$("#toggle-form").html("<i class='fas fa-minus'></i>");
	} else {
		$("#toggle-form").html("<i class='fas fa-plus'></i>");
	};
});
