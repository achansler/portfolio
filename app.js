
$('#designSprintFullStudyReadLink').on('click', function() {
	$('div').removeClass('designSprintFullStudy');
  $('span').removeClass('designSprintFullStudy');
  $('div').removeClass('caseStudy');
  $('a#designSprintFullStudyReadLink').text('Close');
  $('a#designSprintFullStudyReadLink').addClass('closed');
});

$('a.closed').on('click', function() {
  console.log('hi');
  // $('div').addClass('designSprintFullStudy');
  // $('span').addClass('designSprintFullStudy');
  // $('div').addClass('caseStudy');
  // $('a').text('Read');
})
