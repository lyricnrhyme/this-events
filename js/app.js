//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navElem = document.getElementsByClassName("navi");
// console.log(navElem);
for (var i=0; i<navElem.length; i++) {
	// console.log(navElem[i]);
	navElem[i].addEventListener("click", openNav);
}

var innerElem = document.getElementsByClassName("inner");
for (var i=0; i<innerElem.length; i++) {
	innerElem[i].style.display = "none";
}

function openNav() {
	// console.log("openNav test");
	var innerNav = this.querySelector(".inner");
	if(innerNav.style.display === "none") {
		innerNav.style.display = "block";
	}else{
		innerNav.style.display = "none";
	}
}



/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var menuElem = document.getElementsByClassName("name");
for (var i=0; i<menuElem.length; i++) {
	menuElem[i].addEventListener("click", revealMenu);
}

var menuDisplay = document.getElementsByClassName("menu");
menuDisplay.style.display = "none";

function revealMenu() {
	console.log("reveal menu");

	var menuRevealed = this.querySelector(".menu");
	if (menuRevealed.style.display === "none") {
		menuRevealed.style.display = "block";
	}else{
		menuRevealed.style.display = "none";
	}
}