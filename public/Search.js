/*THIS IS HTML DOMS FOR THE SCHOOL SEARCH PAGE (COMPREHENSIVE)*/

var slider = document.getElementById("cost-range");
var output = document.getElementById("demo");

output.innerText = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
  }

 