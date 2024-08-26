console.log('Inizio js');

const formPreventivo = document.getElementById('form-preventivo');

const email = document.getElementById('email');

const tipoLavoro = document.getElementById('tipoLavoro');

const sconto = document.getElementById('sconto');

const tabellaRisultato = document.getElementById('tabella-risultato');


//Inizio BONUS
//array di oggetti in base al tipo di lavoro 

    const lavoroScelto = [
        {
            value:"",
            text:"Seleziona una opzione"
        },
        {
            value:"backend",
            text:"Sviluppo backend"
        },
        {
            value:"frontend",
            text:"Sviluppo frontend"
        },
        {
            value:"analisi",
            text:"Analisi progettuale"
        },

    ];

    for (let i=0; i<lavoroScelto.length; i ++ ){

        console.log(lavoroScelto[i]);

        // prima creo l'elemento option
        let option = document.createElement('option'); //createElement(nome_tag) crea un elemento html in questo caso option 
        option.value = lavoroScelto[i].value;
        option.innerHTML = lavoroScelto[i].text;

        // aggiungo la option creata alla mia select
        tipoLavoro.appendChild(option);

    }

//Fine BOUS


formPreventivo.addEventListener('submit', function(e) {
    e.preventDefault();

    //Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).
    const oreLavoro = 10;
    
    //se l'utente non seleziona un tipo di lavoro il prezzo è uguale a zero.
    let prezzo = 0;
    let sconto_applicato = 0;
    //console.log(prezzo);


    if(tipoLavoro.value === 'backend') {
        prezzo = 20.50 * oreLavoro;

    } else if ( tipoLavoro.value === 'frontend') {

        prezzo =  15.30 * oreLavoro;

    } else if (tipoLavoro.value === 'analisi') {
        prezzo =  33.60 * oreLavoro;
    }

    //inserire lo sconto con un array.
    let codiceSconto = [
        'YHDNU32',
        'JANJC63',
        'PWKCN25',
        'SJDPO96',
        'POCIE24',
    ];
    
    //caso 1: inserisce un codice sconto sbagliato if (...== 0 && sconto.value != '') 
    //caso 2: non inserisce un codice sconto => quando sconto == 0 (...== 0 && sconto.value == '')
    //caso 3: inserisce codice sconto valido 


    if(sconto.value != '') {
        // significa che l'utente ha scritto 

        // ciclo l'array start
        for (let i = 0 ; i < codiceSconto.length; i++) {
            console.log(sconto.value)
            console.log(codiceSconto[i], 'Codice Sconto')
    
            if(sconto.value === codiceSconto[i]) {
                
                //calcolo lo sconto applicato
                sconto_applicato = (prezzo * 25/100);

                //ricalcolo prezzo
                prezzo = prezzo -  sconto_applicato;
    
            }
        }
        // ciclo l'array end

    }

    //il programma è finito!!

    // stampo i risultati calcolati
    // grazie alla funzione removeAttribute() rimuovo
    tabellaRisultato.removeAttribute('style');

    if(email.value === '') {
        document.getElementById('email-preventivo').innerHTML = 'Nessuna email';
    }else {
        document.getElementById('email-preventivo').innerHTML = email.value;
    }

    if(tipoLavoro.value === '') {
        document.getElementById('tipo-preventivo').innerHTML = 'Nessuna selezione';
    }else {
        document.getElementById('tipo-preventivo').innerHTML = tipoLavoro.value;
    }

    if(sconto.value === '') {
        document.getElementById('sconto-preventivo').innerHTML = 'Nessuno sconto';
    }else {
        document.getElementById('sconto-preventivo').innerHTML = sconto.value;
    }


    console.log('prezzo: ', prezzo);

   // console.log(preventivo.value, nome.value, cognome.value, email.value, tipoLavoro.value, messaggio.value, sconto.value, privacy.value);
    
   document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + '€';

   document.getElementById('prezzo-tabella').innerHTML = prezzo.toFixed(2) + '€';
   
   document.getElementById('sconto-applicato').innerHTML = sconto_applicato;

});