var letzte;
var suche = document.getElementById("suchleiste");

var istAktiv = false;

function aktivieren(el)
{
    if(el.classList.contains("aktiv") == false)
    {
        el.classList.add("aktiv");

        if(letzte != null)
        {
            letzte.classList.remove("aktiv");
        }

        letzte = el;
    }
    

    if(el.classList.contains("suchen") == true)
    {
        if(istAktiv == false)
        {
            suche.style.opacity = "1";
            istAktiv = true;
        }
        else
        {
            suche.style.opacity = "0";
            istAktiv = false;
        }

    }


}