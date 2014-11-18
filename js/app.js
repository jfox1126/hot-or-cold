
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//Pick a random number b/w 1 and 100
  	var actualNum = Math.floor((Math.random()*100)+1);
  	console.log(actualNum);

  	var measure = function () {
  		var guess = $('#userGuess').val();
  			console.log(guess);
  		var distance = Math.abs(guess - actualNum);
  			console.log(distance);
  		var feedback
  		if (distance === 0) {
	  		feedback = "Got it!";
	  	} else if (distance <= 5) {
	  		feedback = "Very Hot!";
	  	} else if (distance <= 10) {
	  		feedback = ("Hot!");
	  	} else if (distance <= 20) {
	  		feedback = "Lukewarm";
	  	} else if (distance <= 30) {
	  		feedback = "Cold";
	  	} else if (distance > 30) {
	  		feedback = "Ice Cold";
	  	};
	  	$('#feedback').text(feedback);
	  	$('#guessList').prepend('<li class = entry>'+guess+" - "+feedback+'</li>');
	  	$('#userGuess').val('');
  	};
  	var counter = 0;
  	$('#guessButton').click(function(event) {
  		counter ++;
  		measure();
  		$('#count').text(counter);
  		event.preventDefault();
  	});
  	$('.new').click (function() {
  		actualNum = Math.floor((Math.random()*100)+1);
  		console.log(actualNum);
  		$('#count').text("0");
  		$('#userGuess').val('');
  		$('#feedback').text('Make your Guess!');
  		counter = 0;
  		$('.entry').remove();
  	});
});


