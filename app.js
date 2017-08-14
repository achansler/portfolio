$('div.designTitle').on('click', function() {
	$('span.designSprintFullStudy').toggleClass('show');
	$('div.designSprintFullStudy').slideToggle('show');
	$('div.designTitle').toggleClass('caseStudy');
	$('a').toggleClass('closeDesign');
  $('a.designSprintFullStudyReadLink').text('Close');
  	if($('.closeDesign').is(':hidden')){
    	$('a.designSprintFullStudyReadLink').text('Close');
    } else {
    	$('a.designSprintFullStudyReadLink').text('Read');
    }
});



$('div.bloomingdalesTitle').on('click', function() {
	$('div.bloomingdalesTitle').toggleClass('caseStudy');
	$('div.bloomingdalesFullCaseStudy').slideToggle('show');
	$('a').toggleClass('closeBloomingdales');
	$('a.bloomingdalesFullStudyReadLink').text('Close');
		if($('.closeBloomingdales').is(':hidden')){
			$('a.bloomingdalesFullStudyReadLink').text('Close');
		} else {
			$('a.bloomingdalesFullStudyReadLink').text('Read');
		}
});

$('div.bambooTitle').on('click', function() {
	$('div.bambooTitle').toggleClass('caseStudy');
	$('div.bambooFullCaseStudy').slideToggle('show');
	$('a').toggleClass('closeBamboo');
	$('a.bambooFullStudyReadLink').text('Close');
		if($('.closeBamboo').is(':hidden')){
			$('a.bambooFullStudyReadLink').text('Close');
		} else {
			$('a.bambooFullStudyReadLink').text('Read');
		}
});


$('a.seeVotes').on('click', function() {
	$( 'img.votes' ).toggleClass( 'show' );
	$( 'div.votes' ).toggleClass( 'show' );
	$(' a.seeVotes' ).text( 'Look away ( ﾟoﾟ)' );

});


$('a#seeRedlines').on('click', function() {
	$('img').removeClass('hideForClickRedlines');
	document.querySelector('#prototype').scrollIntoView({
  behavior: 'smooth'});
});


$('a.thankYouCopyUp').on('click', function() {
	document.querySelector('#work').scrollIntoView({
  behavior: 'smooth'});
});
