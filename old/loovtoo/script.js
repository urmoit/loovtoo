// JavaScript-i kommentaar: see fail lisab käitumist

// Pane footerisse õige aasta
document.getElementById("aasta").textContent = new Date().getFullYear();

// Näitab/interaktiivne kast iga sektsiooni all
function naitaNaidet(teema) {
    const kast = document.getElementById(teema + "-naide");
    kast.classList.remove("hidden");

    if (teema === "html") {
        kast.innerHTML = `
            <label>Trüki oma nimi ja vajuta Enter:</label><br>
            <input id="nimi" placeholder="Sinu nimi">
            <button onclick="tervita()">Tervita</button>
            <p id="tervitus"></p>
        `;
    }

    if (teema === "css") {
        kast.innerHTML = `
            <p id="muudetav">See tekst muutub.</p>
            <button onclick="muudaVarvi()">Muuda värvi</button>
        `;
    }

    if (teema === "js") {
        kast.innerHTML = `
            <button onclick="loeKonsooli()">Kirjuta konsooli</button>
            <p>(Ava F12 → Console, et näha sõnumit)</p>
        `;
    }
}

// Abifunktsioonid
function tervita() {
    const nimi = document.getElemetById("nimi").value || "külaline"
    document.getElementById("tervitus").textContent = "Tere, " + nimi + "!"
}

function muudaVarvi() {
    const p = document.getElementById("muudetav");
    p.style.color = "#" + Math.floor(Math.radom()*16777215).toString(16);
}

function loeKonsooli() {
    console.log("Tere, maailm! See sõnm tuli JavaScriptist.");
}