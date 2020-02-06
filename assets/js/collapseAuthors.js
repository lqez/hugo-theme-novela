let collapsed = true;

var collElem = document.getElementById("collapsedCoauthors");
if (collElem) {
  collElem.addEventListener("click", displayCoauthors);
}

var uncollElem = document.getElementById("uncollapsedAction");
if (uncollElem) {
  uncollElem.addEventListener("click", hideCoauthors);
}

function displayCoauthors(){
    document.getElementById("uncollapsedCoauthors").classList.remove("hidden");
}

function hideCoauthors(){
    document.getElementById("uncollapsedCoauthors").classList.add("hidden");
}
