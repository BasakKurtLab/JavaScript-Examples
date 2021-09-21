
const loginForm = document.getElementById("loginForm");
const profil = document.getElementById("userProfile");
const bn = document.getElementById("bn");
const pw = document.getElementById("pw");

const warenkorb = [];


// check if logged in
if(Cookies.get("eingeloggt") == "1")
{
    loginForm.style.display = "none";

    if(Cookies.get("warenkorb"))
    {
        const liste = JSON.parse(Cookies.get("warenkorb"));

        for(p of liste)
        {
            warenkorb.push(p);
            document.getElementById("warenkorb").innerHTML += p.name + " - " + p.preis + "<br>";
        }

    }
}
else
{
    profil.style.display = "none";
}


function login()
{
    if(bn.value == "admin" && pw.value == "123")
    {
        if(document.getElementById("eingeloggtCheck").checked)
        {
            let datum = new Date();
            datum.setFullYear(datum.getFullYear() + 1);
            Cookies.set("eingeloggt", 1, { expires: datum });
        }
        else
        {
            Cookies.set("eingeloggt", 1);
        }

        profil.style.display = "block";
        loginForm.style.display = "none";
    }
}

function hinzufugen(produkt, preis)
{
    warenkorb.push({
        name: produkt,
        preis
    });
    document.getElementById("warenkorb").innerHTML += produkt + " - " + preis + "<br>";
    
    Cookies.set("warenkorb", JSON.stringify(warenkorb));
    
}
