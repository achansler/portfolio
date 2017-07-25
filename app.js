// console.log('hi')
//
// $('#designSprintFullStudyReadLink').on('click', function() {
// 	$('div').removeClass('designSprintFullStudy');
//   $('span').removeClass('designSprintFullStudy');
//   $('div').removeClass('caseStudy');
//   $('a#designSprintFullStudyReadLink').text('Close');
//   $('a#designSprintFullStudyReadLink').addClass('closed');
// });

$('a.designSprintFullStudyReadLink').on('click', function() {
	$( 'div.designSprintFullStudy' ).toggleClass( 'show' );
	$( 'span.designSprintFullStudy' ).toggleClass( 'show' );
	$('div.designTitle').removeClass('caseStudy');
	$('a.designSprintFullStudyReadLink').text('Close');
	//make sure that "Close" goes back to Read

	// put the class back on the title
	//add a nice slide animation

});

$('a.bloomingdalesFullStudyReadLink').on('click', function() {
	$( 'div.bloomingdalesFullCaseStudy' ).toggleClass( 'show' );
	$( 'span.bloomingdalesFullCaseStudy' ).toggleClass( 'show' );
	$('div.bloomingdalesTitle').removeClass('caseStudy');
	$('a.bloomingdalesFullStudyReadLink').text('Close');
	//make sure that "Close" goes back to Read

	// put the class back on the title
	//add a nice slide animation

});

$('a.bambooFullStudyReadLink').on('click', function() {
	$( 'div.bambooFullStudy' ).toggleClass( 'show' );
	$( 'span.bambooFullStudy' ).toggleClass( 'show' );
	$('div.bambooTitle').removeClass('caseStudy');
	$('a.bambooFullStudyReadLink').text('Close');
	//make sure that "Close" goes back to Read

	// put the class back on the title
	//add a nice slide animation

});

$('a.seeVotes').on('click', function() {
	$( 'img.votes' ).toggleClass( 'show' );
	$( 'div.votes' ).toggleClass( 'show' );
	$(' a.seeVotes' ).text( 'Look away ( ﾟoﾟ)' );
	//make sure that "Close" goes back to Read

	// put the class back on the title
	//add a nice slide animation

});

// $('#seeVotes').on('click', function() {
// 	$('div').removeClass('hideForClickVotes');
// 	$('img').removeClass('hideForClickVotes');
// 	$('a.seeVotes').text('Look away ( ﾟoﾟ)');
// });



$('.toggle').click(function(e) {
  	e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});



$('a#seeRedlines').on('click', function() {
	$('img').removeClass('hideForClickRedlines');
	document.querySelector('#prototype').scrollIntoView({
  behavior: 'smooth'});
});
