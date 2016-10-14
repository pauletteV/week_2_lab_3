/***** JQuery stuff ******/

/*var $navHome = $(".nav-home");
var $navAbout = $(".nav-about");
var $navContact = $(".nav-contact");*/


/*$(".nav-home").hover(fadeOut, fadeIn);
$(".nav-about").hover(fadeOut, fadeIn);
$(".nav-contact").hover(fadeOut, fadeIn);

$(".nav-home").click(changeSize);
$(".nav-about").click(changeSize);
$(".nav-contact").click(changeSize);*/

$(".nav-home").hover(fadeOut, fadeIn).click(changeSize);
$(".nav-about").hover(fadeOut, fadeIn).click(changeSize);
$(".nav-contact").hover(fadeOut, fadeIn).click(changeSize);


function fadeOut (){
	$(this).fadeTo(.5, .25);
	//$navHome.fadeTo(.5, .25);
	
}

function fadeIn (){
	$(this).fadeTo(.5, 1);
	//$navHome.fadeTo(.5, 1);
}

function changeSize () {
	console.log("clicked");
	$(this).css("font-size", "20px");
}

/*how can I re-use the fadeIn & fadeOut function for each item?????I have to pass the function some reference to an object to
call the .fadeTo() on. Use the "this" keyword. "this" gets bound to a context... in this case it is the object context
*/