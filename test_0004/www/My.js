function changeColor(){
var clr=document.all.bgInput.value;
document.body.style.backgroundColor=clr;
}


function getOrientation(){
alert('Orientation is ' + screen.orientation.type);
}