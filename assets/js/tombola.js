// Creo il tabellone da 1 a 76

const creaTabelloneTombola = () => {
  const tabellone = document.getElementById("tab-numeri");
  for (let i = 0; i < 76; i++) {
    // Creo un div per ogni numero del tabellone e gli assegno la stessa classe
    const cellaNumero = document.createElement("div");
    cellaNumero.classList.add("numero");
    // Assegno un numero da 1 a 76 alla tabella in ordine
    const contenutoCellaNumero = document.createElement("h4");
    contenutoCellaNumero.innerText = i + 1;
    //console.log(contenutoCellaNumero.innerText);

    cellaNumero.appendChild(contenutoCellaNumero);
    tabellone.appendChild(cellaNumero);
  }
  //Creo il bottone per estrarre il numero
  const estrazioneNumero = document.getElementById("numero-estratto");
  const bottoneEstrazione = document.createElement("button");
  bottoneEstrazione.innerText = "Estrai Numero";
  estrazioneNumero.appendChild(bottoneEstrazione);

  bottoneEstrazione.addEventListener("click", (event) => {
    const estraiNumero = document.createElement("h5");
    estraiNumero.innerText = Math.round(Math.random() * 76);
    if (estraiNumero.innerText === estraiNumero.innertext) estraiNumero = false;
    console.log(estraiNumero.innerText);
    estrazioneNumero.appendChild(estraiNumero);
    /* if (contenutoCellaNumero.innerText === estraiNumero.innerText) {
      cellaNumero.style.colore = "red";
    } */
  });
};

//creaTabelloneTombola();

window.addEventListener("DOMContentLoaded", () => {
  creaTabelloneTombola();
});

//
