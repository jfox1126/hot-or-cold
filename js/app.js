
$(document).ready(function(){
	
	//Display information modal box
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//Pick a random number b/w 1 and 100
  	var actualNum = Math.floor((Math.random()*100)+1);
  	console.log(actualNum);

  	//Establish guess Counter variable
  	var counter = 0;

  	//Measure distance of guess from actualNum
  	var measure = function () {
  		var guess = Math.round($('#userGuess').val());
  		var distance = Math.abs(guess - actualNum);
  			//console.log(distance);
  		var feedback;
  		//Convert distance to hot/cold
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
	  	//Post feedback
	  	$('#feedback').text(feedback);
		$('#guessList').prepend('<li class = entry>'+guess+" - "+feedback+'</li>');
  	};

  	//Press button to play game
  	$('#guessButton').click(function(event) {
  		guess = Math.round($('#userGuess').val());
  			console.log(guess);
  		//Ensure guess is a number
  		if (isNaN(guess) || guess <0 || guess>100) {
			alert("Must input nubmers between 0-100!");
	  		$('#feedback').text('Make your Guess!');
	  	}
  		else {
  			counter ++;
  			measure();
  			$('#count').text(counter);	  			
  		};
  		//
  		$('#userGuess').val('');	
  		event.preventDefault(); 
  	});

  	//New game
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


