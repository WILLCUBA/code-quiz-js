var score = localStorage.getItem("score")
var initials = localStorage.getItem("User Initials")
var olScoresEl = document.getElementById("scores-container")
var btnClear = document.getElementById("clear")
var scores = []



var appendScores = function(scores) {
    var textToShowScores = " " + initials + "- " + score;
    scores.push(textToShowScores)
    for (let i = 0; i < scores.length; i++) {
        var liScoreEl = document.createElement("li")
        liScoreEl.textContent = textToShowScores;
        olScoresEl.appendChild(liScoreEl)
    }
}

appendScores(scores)

var removeChildNodes = function(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

btnClear.addEventListener("click", function() {
    removeChildNodes(olScoresEl)
})