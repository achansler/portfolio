$('div.designSprintFullStudy').on('click', function() {
	$( 'span.designSprintFullStudy' ).toggleClass( 'show' );
	$('div.designTitle').toggleClass('caseStudy');
	//make sure that "Close" goes back to Read

	// put the class back on the title
	//add a nice slide animation

});

$('a.read').click(function() {
    $(this).text('Close');
    if($('.show').is(':hidden')){
          $(this).text('Close');
    } else {
          $(this).text('Read');
    }
});



$('a.bloomingdalesFullStudyReadLink').on('click', function() {
	$( 'div.bloomingdalesFullCaseStudy' ).toggleClass( 'show' );
	$( 'span.bloomingdalesFullCaseStudy' ).toggleClass( 'show' );
	$('div.bloomingdalesTitle').toggleClass('caseStudy');
	$('a.bloomingdalesFullStudyReadLink').text('Close');
	//make sure that "Close" goes back to Read

	// put the class back on the title
	//add a nice slide animation

});

$('a.bambooFullStudyReadLink').on('click', function() {
	$( 'div.bambooFullStudy' ).toggleClass( 'show' );
	$( 'span.bambooFullStudy' ).toggleClass( 'show' );
	$('div.bambooTitle').toggleClass('caseStudy');
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
