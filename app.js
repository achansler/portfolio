$('div.designSprintTitle').on('click', function() {
	$( 'span.designSprintFullStudy' ).toggleClass('show');
	$( 'div.designSprintFullStudy' ).slideToggle('show');
	$('div.designTitle').toggleClass('caseStudy');
});

$('a.read').click(function() {
    $(this).text('Close');
    if($('.show').is(':hidden')){
          $(this).text('Close');
    } else {
          $(this).text('Read');
    }
});



$('div.bloomingdalesTitle').on('click', function() {
	$('div.bloomingdalesTitle').toggleClass('caseStudy');
	$('div.bloomingdalesFullCaseStudy').slideToggle('show');
});

$('div.bambooTitle').on('click', function() {
	$('div.bambooTitle').toggleClass('caseStudy');
	$('div.bambooFullCaseStudy').slideToggle('show');
});


$('a.seeVotes').on('click', function() {
	$( 'img.votes' ).toggleClass( 'show' );
	$( 'div.votes' ).toggleClass( 'show' );
	$(' a.seeVotes' ).text( 'Look away ( ﾟoﾟ)' );
	//make sure that "Close" goes back to Read

	// put the class back on the title
	//add a nice slide animation

});




// $('.toggle').click(function(e) {
//   	e.preventDefault();
//
//     var $this = $(this);
//
//     if ($this.next().hasClass('show')) {
//         $this.next().removeClass('show');
//         $this.next().slideUp(350);
//     } else {
//         $this.parent().parent().find('li .inner').removeClass('show');
//         $this.parent().parent().find('li .inner').slideUp(350);
//         $this.next().toggleClass('show');
//         $this.next().slideToggle(350);
//     }
// });

$('a#seeRedlines').on('click', function() {
	$('img').removeClass('hideForClickRedlines');
	document.querySelector('#prototype').scrollIntoView({
  behavior: 'smooth'});
});


$('a.thankYouCopyUp').on('click', function() {
	document.querySelector('#work').scrollIntoView({
  behavior: 'smooth'});
});
