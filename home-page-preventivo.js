console.log('Inizio js');

const preventivo = document.getElementById('preventivo');

const nome = document.getElementById('nome');

const cognome = document.getElementById('cognome');

const email = document.getElementById('email');

const tipoLavoro = document.getElementById('tipoLavoro');

const messaggio = document.getElementById('messaggio');

const sconto = document.getElementById('sconto');

const privacy = document.getElementById('privacy');


preventivo.addEventListener('submit', function(e) {
    e.preventDefault();

    
    let opzioneSelezionataText = tipoLavoro.options[tipoLavoro.selectedIndex].text;

    const oreLavoro = 10;
    
    let prezzo = 0 ;
    console.log(prezzo);

    if(tipoLavoro.value === 'backend') {
        prezzo = 20.50 * oreLavoro;

    } else if ( tipoLavoro.value === 'frontend') {

        prezzo =  15.30 * oreLavoro;

    } else if (tipoLavoro.value === 'analisi') {
        prezzo =  33.60 * oreLavoro;
    };

    console.log('prezzo: ', prezzo);

    console.log(preventivo.value, nome.value, cognome.value, email.value, tipoLavoro.value, messaggio.value, sconto.value, privacy.value);
    
    
    

});