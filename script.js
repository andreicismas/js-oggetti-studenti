// <!-- 

// Esercizio di oggi: Oggetti Studenti

// nome repo: js-oggetti-studenti

// Descrizione:




// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. -->

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var student = {
    "nome": "andrei",
    "cognome": "cismasu",
    "eta": 33
}

var studentDiv = document.getElementById("proprieta-oggeto")
// alternativa senza appici 

// var student ={
//     nome: "andrei",
//     cognome: "cismasu",
//     eta:33
// }

// il ciclo della variabile "object" student 

for (var credenziali in student) {
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

allievo1.nome = "Marco";
allievo1.cognome = "Milvio";
allievo1.eta = 31;
listStudents.push(allievo1)


var allievo3 = {};

allievo1.nome = "Bebe";
allievo1.cognome = "Frank";
allievo1.eta = 34;
listStudents.push(allievo1)

// ciclo for per stampare la lunghezza del mio array"listStudents"

for(var i =0; i<listStudents.length; i++){
    console.log(listStudents[i])
}

