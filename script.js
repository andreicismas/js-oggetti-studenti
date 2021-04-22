// <!-- 

// Esercizio di oggi: Oggetti Studenti

// nome repo: js-oggetti-studenti

// Descrizione:








// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var student = {
    "nome": "andrei",
    "cognome": "cismasu",
    "eta": 33
}

var studentDiv = document.getElementById("")
// alternativa senza appici 

// var student ={
//     nome: "andrei",
//     cognome: "cismasu",
//     eta:33
// }

// il ciclo della variabile "object" student 

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var dati in student) {
    // Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
    console.log("lo studente è " + credenziali + ": " + student
    [credenziali]);

}


// Creare un array di oggetti di studenti.

// array vuoto

var listStudents = [];

// nuovi objects da pushare in array

var allievo1 = {};

allievo1.nome = "Coco";
allievo1.cognome = "Mimmo";
allievo1.eta = 21;
listStudents.push(allievo1)

var allievo2 = {};

allievo2.nome = "Marco";
allievo2.cognome = "Milvio";
allievo2.eta = 31;
listStudents.push(allievo2)


var allievo3 = {};

allievo3.nome = "Bebe";
allievo3.cognome = "Frank";
allievo3.eta = 34;
listStudents.push(allievo3)



// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. -->

//creo un nuovo oggetto da pushare in listStudents
var ultimoArrivato = {}


//push all'interno  array  listStudents
listStudents.push(ultimoArrivato);
console.log(listStudents)

// i prompt dati ultimo arrivato 
var nomeInput = yourName()
var cognomeInput = yourSecondName()
var etaUltimoArrivato = yourAgeIs()


ultimoArrivato.nome = nomeInput;
ultimoArrivato.cognome = cognomeInput;
ultimoArrivato.eta = etaUltimoArrivato;


// ciclo array aggiornato dopo il prompt

for (var i = 0; i < listStudents.length; i++) {
    console.log(listStudents[i].nome + " " + listStudents[i].cognome)
}

console.log("ultimo ogg arrivato e :", ultimoArrivato.nome);



document.getElementById("last-student").innerHTML =
    "Ultimo iscritto e" + " " + ultimoArrivato.nome + " " + ultimoArrivato.cognome + " e ha " + ultimoArrivato.eta + " " + "anni";



function yourName() {
    var nome = "";
    while (!isNaN(nome)) {
        nome = prompt("Qual é il tuo nome ");
        if (!isNaN(nome)) {
            alert("non sei umano? Inserisci un nome!");
        }
    }
    return nome
}

function yourSecondName() {
    var cognome = "";
    while (!isNaN(cognome)) {
        cognome = prompt("Qual é il tuo cognome ");
        if (!isNaN(cognome)) {
            alert("non sei umano? Inserisci un nome!");
        }
    }
    return cognome
}

function yourAgeIs() {
    var eta;
    while (isNaN(eta)) {
        eta = parseInt(prompt("Qual é il tuo eta "));
        if (isNaN(eta)) {
            alert("devi inserire dei numeri GENIO");
        }
    }
    return eta
}


