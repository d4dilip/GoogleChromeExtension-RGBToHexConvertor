function rgbToHex() { 
debugger;
var red=document.getElementById('r');
var green=document.getElementById('g');
var blue=document.getElementById('b');

var hexCode =convertNumberToHex(red.value)+convertNumberToHex(green.value)+convertNumberToHex(blue.value); 

var elem=document.getElementById('hexval');
  hexval.value="#"+hexCode;
    ShowColorSample('colorSample', hexCode);
 
}
function convertNumberToHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}

function ShowColorSample(id,sColor) {
 var elem;

 if (document.getElementById) {
  if (elem=document.getElementById(id)) {
   if (elem.style) elem.style.backgroundColor="#"+sColor;
  }
 }
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btnClick').addEventListener('click', rgbToHex);
	
});
