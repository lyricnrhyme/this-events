//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navElem = document.getElementsByClassName("navi");
console.log(navElem);
for (var i=0; i<navElem.length; i++) {
	// console.log(navElem[i]);
	navElem[i].addEventListener("click", openNav);
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
