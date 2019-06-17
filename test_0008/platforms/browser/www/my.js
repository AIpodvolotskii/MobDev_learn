var ball = document.querySelector('.ball'); 
var garden = document.querySelector('.garden'); 
var output = document.querySelector('.output'); 
var maxX = garden.clientWidth - ball.clientWidth; 
function handleOrientation(event) { 
var x = event.beta; 
output.innerHTML = "beta : " + x + "\n"; 
if (x > 90) { x = 90}; 
if (x < -90) { x = -90}; 
x += 90; 
ball.style.top = (maxX*x/180 - 10) + "px"; 
if (x<90.5 && x>89.5)
if (x<90.5 && x>89.5) 
navigator.notification.beep(1); 

} 
window.addEventListener('deviceorientation', handleOrientation);