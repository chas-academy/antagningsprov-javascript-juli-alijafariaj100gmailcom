function uppg8(){
    let people = [
        {name : 'Ali' , age : 26},
        {name : 'peter', age: 33},
        {name :'Ahad', age : 24},
        {name : 'Mats', age : 45},
        {name :'Olf', age : 38}
    ]
    function employees (list){
        for(let person of list){
            if (person.age > 30){
                console.log(person.name);
            }
        }
            }
    employees(people)
// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
// anropa funktionen och skicka med arrayen som argument
}
uppg8()
module.exports = { uppg8 };