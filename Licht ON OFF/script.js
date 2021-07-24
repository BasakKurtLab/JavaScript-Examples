var lichtEIN = document.getElementById("ein");
var lichtAUS = document.getElementById("aus");
var buttonEIN = document.getElementById("btn-ein");
var buttonAUS = document.getElementById("btn-aus");
var body = document.getElementById("body");
var text = document.getElementById("text");

function einschalten()
{
    lichtEIN.style.opacity = "100%";
    lichtAUS.style.opacity = "0";

    body.style.backgroundColor = "white";
    text.style.color = "black";
    text.innerHTML = "Licht: an";

    buttonEIN.style.backgroundColor = "#db7100";
    buttonEIN.style.color = "white";
    buttonAUS.style.backgroundColor = "#6b6b6b";
    buttonAUS.style.color = "#acacac";
}

function ausschalten()
{
    lichtEIN.style.opacity = "0";
    lichtAUS.style.opacity = "100%";

    body.style.backgroundColor = "black";
    text.style.color = "white";
    text.innerHTML = "Licht: aus";

    buttonAUS.style.backgroundColor = "#db7100";
    buttonAUS.style.color = "white";
    buttonEIN.style.backgroundColor = "#6b6b6b";
    buttonEIN.style.color = "#acacac";
}