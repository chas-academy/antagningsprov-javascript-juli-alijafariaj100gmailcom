

 function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    

    function sort (list){
        
        for (let siffra of list){
        if (siffra % 2 === 0){
            console.log(siffra,': jämt');
        } else{
            console.log(siffra,': udda')};
        }
    }
    let siffror = [1,3,6, 10, 29]
    sort(siffror)
}
uppg9()
module.exports = { uppg9 };