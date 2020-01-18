$(window).scroll(function() {
    $('video').each(function() {
        if ($(this).visible(true)) {
            $(this)[0].play();
        } else {
            $(this)[0].pause();
        }
    })
});




$(document).ready(function () {
    $("#fold").click(function () {
        $("#fold_p").fadeOut(function () {
            $("#fold_p").text(($("#fold_p").text() == 'Fold it') ? 'Expand it' : 'Fold it').fadeIn();
        })
    })
});


$(document).ready(function () {
    $("#facts").click(function () {
        $("#fold_p").fadeOut(function () {
            $("#fold_p").text(($("#fold_p").text() == 'Fold it') ? 'Expand it' : 'Fold it').fadeIn();
        })
    })
});
