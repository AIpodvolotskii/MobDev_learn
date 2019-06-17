function changeColor(){
var clr=document.all.bgInput.value;
document.body.style.backgroundColor=clr;
}


function getOrientation(){
alert('Orientation is ' + screen.orientation.type);
}


screen.orientation.lock('landscape').then(function success() {
alert ("Successfully locked the orientation");
},
function error(errMsg) {
	alert ("Error locking the orientation :: " + errMsg);
});