document.addEventListener("DOMContentLoaded", function() {

	$("input").keyup(function() {
		$("li").remove();
		var val = $("input").val();
		$.get("https://www.googleapis.com/books/v1/volumes?q=" + val)
			.done(function(data) {
				var min = Math.min(5,data.items.length);
				var append = "";
				for (var i=0; i<min; i++){
					append+='<li class="list-group-item">' + data.items[i].volumeInfo.title + '</li>';
				}
				$("ul").append(append);
			});
	});
});


