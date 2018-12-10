menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
};

var menuElem = document.getElementById('allPage');
var titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};

var menuElem = document.getElementById('inf');
var titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};