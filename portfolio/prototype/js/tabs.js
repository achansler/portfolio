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
