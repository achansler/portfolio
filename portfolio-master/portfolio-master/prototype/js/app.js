$(document).foundation()

		$(window).load(function() {
		  $("#tab1").twentytwenty();
		});


		$(".tabs-title").click(function() {
			$("#tab2").twentytwenty();
		})

		$(".tabs-title").click(function() {
			$("#tab3").twentytwenty();
		})

		$(".tabs-title").click(function() {
			$("#tab4").twentytwenty();
		})


		$("div#secondary-button").on("click", function() {
			$("img.code2").removeClass("code2");
		});

		$("div#secondary-button-css").on("click", function() {
			$("img.code3").removeClass("code3");
		});


// 		$("button#no").on("click", function() {
// 	$("h1.big").text("WRONG");
// 	$("button#try-again").removeClass("hide");
// 	$("button#yes").addClass("hide");
// 	$("button#no").addClass("hide");
// });