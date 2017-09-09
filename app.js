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

$('div.githubTitle').on('click', function() {
	$('div.githubFullStudy').slideToggle('show');
	$('div.githubTitle').toggleClass('caseStudy');
	$('a').toggleClass('closeGithub');
  $('a.githubFullStudyReadLink').text('Close');
  if($('.closeGithub').is(':hidden')){
    $('a.githubFullStudyReadLink').text('Close');
  } else {
    $('a.githubFullStudyReadLink').text('Read');
  }
});

$('div.githubTitle2').on('click', function() {
	$('div.githubFullStudy2').slideToggle('show');
	$('div.githubTitle2').toggleClass('caseStudy');
	$('a').toggleClass('closeGithub2');
  $('a.githubFullStudyReadLink2').text('Close');
  if($('.closeGithub2').is(':hidden')){
    $('a.githubFullStudyReadLink2').text('Close');
  } else {
    $('a.githubFullStudyReadLink2').text('Read');
  }
});

$('a.email').hover(function(){
    $(this).hide().text('aachansler@gmail.com (Copy)').fadeIn("fast");
}, function() {
    $(this).hide().text('Email').fadeIn("fast");
});

$('a.email').on('click', function() {
	$(this).text('aachansler@gmail.com (Copied!)');
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


$('a.seeVotes').on('click', function() {
	$('a').toggleClass('switchLinkVotes');
	$('a.seeVotes').text('Look away ( ﾟoﾟ)');
		if($('.switchLinkVotes').is(':hidden')) {
			$('a.seeVotes').text('Look away ( ﾟoﾟ)');
		} else {
			$('a.seeVotes').text('See the votes ◕ ◡ ◕');
		}
});

$('a.seeVotes').on('click', function() {
	$('a.seeVotes').toggleClass('switchLinkVotes');
	$('a.seeVotes').text('Look away ( ﾟoﾟ)');
		if($('.switchLinkVotes').is(':hidden')) {
			$('a.seeVotes').text('Look away ( ﾟoﾟ)');
		} else {
			$('a.seeVotes').text('See the votes ◕ ◡ ◕');
		}
});

$('a.seeVotes').on('click', function() {
	$( 'img.votes' ).toggleClass( 'show' );
	$( 'div.votes' ).toggleClass( 'show' );
});

$('a#seeRedlines').on('click', function() {
	$('a').toggleClass('switchLinkFeedback');
	$('a#seeRedlines').text(' Look away 【•】_【•】');
		if($('.switchLinkFeedback').is(':hidden')) {
			$('a#seeRedlines').text(' Look away 【•】_【•】');
		} else {
			$('a#seeRedlines').text(' Look at the feedback ๏_๏');
		}
});

$('a#seeRedlines').on('click', function() {
	$('img.redlines').toggleClass('hideForClickRedlines');
	document.querySelector('#prototype').scrollIntoView({
  behavior: 'smooth'});
});

$('a.thankYouCopyUp').on('click', function() {
	document.querySelector('#work').scrollIntoView({
  behavior: 'smooth'});
});
