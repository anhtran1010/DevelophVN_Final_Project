/*HTML DOMS for search page*/
var slider = document.getElementById("cost-range");
var output = document.getElementById("demo");

output.innerText = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
  }

/*Review page*/
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
		
btn.onclick = ()=>{
	widget.style.display = "none";
	post.style.display = "block";
	editBtn.onclick = ()=>{
	widget.style.display = "block";
	post.style.display = "none";
	}
return false;
}

/*Tab DOMS in single school pages*/
// eslint-disable-next-line no-unused-vars
function opentab(event, tabname) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabname).style.display = "block";
	event.currentTarget.className += " active";
  }

 