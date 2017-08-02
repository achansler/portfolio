$('a.read').on('click', function() {
	$('a.read').text('Close');
	$('a.read').addClass('close');
})

$('a.close').on('click', function() {
	console.log('hi');
})


$('a.designSprintFullStudyReadLink').on('click', function() {
	$( 'div.designSprintFullStudy' ).toggleClass( 'show' );
	$( 'span.designSprintFullStudy' ).toggleClass( 'show' );
	$('div.designTitle').toggleClass('caseStudy');
});

$('a.bloomingdalesFullStudyReadLink').on('click', function() {
	$( 'div.bloomingdalesFullCaseStudy' ).toggleClass( 'show' );
	$( 'span.bloomingdalesFullCaseStudy' ).toggleClass( 'show' );
	$('div.bloomingdalesTitle').toggleClass('caseStudy');
	$('a.bloomingdalesFullStudyReadLink').text('Close');
});

$('a.bambooFullStudyReadLink').on('click', function() {
	$( 'div.bambooFullStudy' ).toggleClass( 'show' );
	$( 'span.bambooFullStudy' ).toggleClass( 'show' );
	$('div.bambooTitle').toggleClass('caseStudy');
	$('a.bambooFullStudyReadLink').text('Close');
});


$('a.seeVotes').on('click', function() {
	$( 'img.votes' ).toggleClass( 'show' );
	$( 'div.votes' ).toggleClass( 'show' );
	$(' a.seeVotes' ).text( 'Look away ( ﾟoﾟ)' );
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
