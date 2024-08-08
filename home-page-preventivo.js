console.log('Inizio js');

const formPreventivo = document.getElementById('form-preventivo');

const email = document.getElementById('email');

const tipoLavoro = document.getElementById('tipoLavoro');

const sconto = document.getElementById('sconto');

const tabellaRisultato = document.getElementById('tabella-risultato');


formPreventivo.addEventListener('submit', function(e) {
    e.preventDefault();

    
    let opzioneSelezionataText = tipoLavoro.options[tipoLavoro.selectedIndex].text;

    const oreLavoro = 10;
    
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

    for (let i = 0 ; i < codiceSconto.length; i++) {
        console.log(sconto.value)
        console.log(codiceSconto[i], 'Codice Sconto')

        if(sconto.value === codiceSconto[i]) {

            sconto_applicato = (prezzo * 25/100);
            
            prezzo = prezzo -  sconto_applicato;

        }

    }

    if(sconto_applicato === 0 && sconto.value != '') {
        sconto_applicato = 'Codice sconto non valido'
    }

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

   document.getElementById('prezzo-calcolato').innerHTML = prezzo.toFixed(2) + '€';
   
   document.getElementById('sconto-applicato').innerHTML = sconto_applicato;

});