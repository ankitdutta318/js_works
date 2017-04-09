// Check off specific To-Dos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function() {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").on("keypress", function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
		$(this).val('');
	}
});

$(".fa-pencil-square-o").on("click", function() {
	$("input[type='text").fadeToggle();
});