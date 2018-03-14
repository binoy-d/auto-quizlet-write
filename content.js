
    window.onload = function() {

        setInterval(function () {
            document.getElementById('user-answer').value = "booty";
            document.getElementById("js-learnModeAnswerButton").click();
var aTags = document.getElementsByClassName("UILink");
var searchText = "Override: I was right";
var found;

for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent == searchText) {
    found = aTags[i];
    break;
  }
}
            found.click();
        }, 100);
    };
