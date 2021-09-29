
const bild = document.getElementById("bild");
const prozent = document.getElementById("prozent");


async function download()
{
    bild.src = "loading.gif";


    const antwort = await fetch("http://localhost/blume2.jpg");
    const reader = antwort.body.getReader();
    const dateiGroesse = antwort.headers.get("Content-Length");

    let insgesamtGelesen = 0;
    let chunks = [];

    while(true)
    {
        const {done, value} = await reader.read();

        if(done)
        {
            // FERTIG
            break;
        }

        insgesamtGelesen += value.length;
        chunks.push(value)

        prozent.innerHTML = Math.floor(insgesamtGelesen / dateiGroesse * 100) + " %";
    }

    const blob = new Blob(chunks);

    let link = URL.createObjectURL(blob);

    bild.src = link;
    bild.style.width = "500px";
    prozent.innerHTML = "";
}