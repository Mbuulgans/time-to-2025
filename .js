// Set the countdown deadline (December 31, 2025)
var countDownDate = new Date("2025-12-31").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

 // Get the current date and time
 var now = new Date().getTime();

 // Calculate the distance between the current date and time and the countdown deadline
 var distance = countDownDate - now;

 // Calculate the days, hours, minutes, and seconds remaining
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Display the countdown timer in the document
 document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

 // If the countdown is finished, stop the countdown and display a message
 if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Countdown finished!";
 }
}, 1000);