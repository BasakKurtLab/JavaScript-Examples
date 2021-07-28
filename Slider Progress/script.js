const slider = document.getElementById("slider");
const progress = document.getElementById("progress");
let aktuell = 0;
const max = document.querySelectorAll("#slider>.slide").length;

let sure;
sureSifirla();

function next()
{
    //CHECK
    if(aktuell == max-1)
    {
        return;
    }

    //AKTION
    aktuell++;

    //UPDATE
    translateUpdate();
}

function prev()
{
    if(aktuell == 0)
    {
        return;
    }
    
    aktuell--;
    translateUpdate();
}

function translateUpdate()
{
    slider.style.transform = "translateX(-" + (aktuell*100) + "vw)";
    
    sureSifirla();
    progressSifirla();
}

function sureSifirla()
{
    clearTimeout(sure);
    sure = setTimeout(function()
    {
        next();
    }, 5000);
}

function progressSifirla()
{
    progress.style.animation = "none";
    
    setTimeout(function()
    {
        progress.style.animation = "";
    }, 0);
}