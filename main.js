//select input
var filter = document.querySelector("#filter");
// filter list by name
function filterNames() {
  // get value of user input
  var filterValue = filter.value;
  // get names
  var names = document.querySelectorAll("li a");
  // loop over names
  for (var i = 0; i < names.length; i++) {
    // compare names
    if (names[i].innerText.toUpperCase().includes(filterValue.toUpperCase())) {
      names[i].parentElement.style.display = "block";
    } else {
      names[i].parentElement.style.display = "none";
    }
  }
}

// add event listener to user input
filter.addEventListener("input", filterNames);
