var viewportheight = document.querySelector('#fixedwrapper').offsetHeight;
var position = 0;
document.querySelector("#scrollhud").innerHTML = 'Scroll: ' + position + ' px <br> Alto de pantalla: ' + viewportheight + ' px';
var htmlcss = document.querySelector('#html5css3');
var javascript = document.querySelector('#javascript');
var intro = document.querySelector('#intro');
var frontend = document.querySelector('#frontend');
var diseno = document.querySelector('#diseno');
var ilustracion = document.querySelector('#ilustracion');
var marketing = document.querySelector('#marketing');
var contacto = document.querySelector('#contacto');
function scrollshow(obj, minscrollmultip, maxscrollmultip){
  if(position >= (minscrollmultip * viewportheight) && position <= (maxscrollmultip * viewportheight)){
    obj.style.opacity = 1;
  }
  else{
    obj.style.opacity = 0;
  }
}
window.onload = function(){scrollshow(intro, 0, 1);};
function render(){
  position = window.pageYOffset;
  document.querySelector("#scrollhud").innerHTML = 'Scroll: ' + position + ' px <br> Alto de pantalla: ' + viewportheight + ' px';
  scrollshow(intro, 0, 1);
  scrollshow(frontend, 1, 2);
  scrollshow(diseno, 2, 3);
  scrollshow(ilustracion, 3, 4);
  scrollshow(marketing, 4, 5);
  scrollshow(contacto, 5, 6);
};

window.onscroll = render;
document.onkeydown =  function (e) {
	if (e.keyCode == '38') {
		window.scrollTo(0, (position-viewportheight));
	}
	else if (e.keyCode == '40') {
		window.scrollTo(0, (position+viewportheight));
	}
	else if (e.keyCode == '37') {
		window.scrollTo(0, (position-viewportheight-1));
	}
 else if (e.keyCode == '39') {
		window.scrollTo(0, (position+viewportheight+1));
 };
	render;
}
