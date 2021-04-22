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

var studentDiv = document.getElementById("proprieta-oggeto")
// alternativa senza appici 

// var student ={
    //     nome: "andrei",
    //     cognome: "cismasu",
    //     eta:33
    // }
    
    // il ciclo della variabile "object" student 
    
    // Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
    for (var credenziali in student) {
        // Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
        console.log("lo studente è " + credenziali + ": " + student
        [credenziali]);
        
    }
    
    studentDiv.innerHTML=student

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



// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. -->

//creo un nuovo oggetto da pushare in listStudents
var ultimoArrivato = {}


//push all'interno  array  listStudents
listStudents.push(ultimoArrivato);
console.log(listStudents)

// i prompt dati ultimo arrivato 
var nomeInput = prompt("inserisci il nome utente");
var cognomeInput = prompt("inserisci il cognome utente");

while (isNaN(etaUltimoArrivato)) {
    var etaUltimoArrivato = parseInt(prompt("inserisci età utente"));
}

ultimoArrivato.nome = nomeInput;
ultimoArrivato.cognome = cognomeInput;
ultimoArrivato.eta = etaUltimoArrivato;

console.log("ultimo ogg arrivato e :", ultimoArrivato);


