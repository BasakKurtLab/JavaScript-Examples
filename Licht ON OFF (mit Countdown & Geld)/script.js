var lichtEIN = document.getElementById("ein");
var lichtAUS = document.getElementById("aus");
var buttonEIN = document.getElementById("btn-ein");
var buttonAUS = document.getElementById("btn-aus");
var body = document.getElementById("body");
var text = document.getElementById("text");
var geldText = document.getElementById("geldText");
var zeitText = document.getElementById("zeitText");

var geld = 5;
var zeit = 0;

geldText.innerHTML = "Geld: " + geld;
zeitText.innerHTML = "Zeit: " + zeit;

var meinInterval;



function einschalten()
{
    if(geld > 0)
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

        geld--;
        geldText.innerHTML = "Geld: " + geld;
        geldText.style.color = "black";

        zeitText.style.color = "black";

        zeit = 10;
        zeitText.innerHTML = "Zeit: " + zeit;

        meinInterval = setInterval(zeitWeniger, 1000);
    }
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

    geldText.style.color = "white";

    zeitText.style.color = "white";
}

function zeitWeniger()
{
    zeit--;
    zeitText.innerHTML = "Zeit: " + zeit;

    if(zeit == 0)
    {
        clearInterval(meinInterval);
        ausschalten();
    }
}