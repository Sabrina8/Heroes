

// Set the first character as shown
$('.hero:first-child').addClass('shown');

var name = $('.shown').attr('title');
// Get the name and apply to the h1
$('h1.name').text(name);


//Stuff going on when NEXT button is clicked
$('button.next').on('click', function(){

	if( $('.shown').is(':last-child')){
		$('.shown')
		.removeClass('shown')
		.siblings('.hero')
		.first()
		.addClass('shown');
	}

	else{
		$('.shown').removeClass('shown').next().addClass('shown');
		}
	var name = $('.shown').attr('title');

	$('h1.name').hide().slideUp('fast').text(name).fadeIn();

});

//Stuff going on when PREV button is clicked
$('button.prev').on('click', function(){

	if( $('.shown').is(':first-child')){
		$('.shown')
		.removeClass('shown')
		.siblings('.hero')
		.last()
		.addClass('shown');
	}
	else{
		$('.shown').removeClass('shown').prev().addClass('shown');
		
		}
	var name = $('.shown').attr('title');
	$('h1.name').hide().slideUp('fast').text(name).fadeIn();
});