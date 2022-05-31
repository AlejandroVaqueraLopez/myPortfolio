//this script is used to fix the style and height of an android screen when it shows the virtual keyboard
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; //&& ua.indexOf("mobile");

if(isAndroid){
	document.write('<meta name="viewport", user-scalable=no, content="width=device-width,height='+window.innerHeight+', initial-scale=1.0">');
}
