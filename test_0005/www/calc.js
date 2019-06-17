function sum()
{
var a=parseFloat(document.getElementById('t1').value);
var b=parseFloat(document.getElementById('t2').value);
c=a+b;
document.getElementById('res').value=c;
}

function sub()
{
var a=parseFloat(document.getElementById('t1').value);
var b=parseFloat(document.getElementById('t2').value);
c=a-b;
document.getElementById('res').value=c;
}

function mul()
{
var a=parseFloat(document.getElementById('t1').value);
var b=parseFloat(document.getElementById('t2').value);
c=a*b;
document.getElementById('res').value=c;
}

function div()
{
var a=parseFloat(document.getElementById('t1').value);
var b=parseFloat(document.getElementById('t2').value);
if (b === 0)
	c= NaN;
else
	c=a/b;
document.getElementById('res').value=c;
}

function sqrt()
{
var a=parseFloat(document.getElementById('t1').value);
var b=parseFloat(document.getElementById('t2').value);
c = Math.sqrt(a)
document.getElementById('res').value=c;
}