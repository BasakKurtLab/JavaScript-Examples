const bilder = document.querySelectorAll("#bilder>img");
const lightbox = document.getElementById("lightbox");
const lightImg = document.querySelector("#lightbox img");
const kreuz = document.querySelector("#lightbox i");

bilder.forEach(
    function(element)
    {
        element.onclick = function()
        {
            lightbox.style.transform = "translateX(0)";
            const quelle = element.getAttribute("src");
            
            lightImg.setAttribute("src", quelle);

            setTimeout(function()
            {
                lightImg.style.transform = "scale(1)";
            }, 500);
            
        }
    }
);

kreuz.onclick = function()
{
    lightImg.style.transform = "scale(0)";
    setTimeout(function()
    {
        lightbox.style.transform = "translateX(100vw)";
    }, 500);
    
}