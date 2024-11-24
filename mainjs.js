let score = 0;

document.getElementById("xaviers-face").onclick = function() {
    score = score + 1;
    document.getElementById("scoreboard").innerHTML = "Score: " + score;
}
document.getElementById("resetButton").onclick = function() {
    score = 0;
    document.getElementById("scoreboard").innerHTML = "Score: " + score;
}