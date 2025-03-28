function sendText (){
    console.log('Hey Erica , do you want to hang out later today at 5pm ?')
}

let name= 'Erica'

function sendReminder(Deja, time){ // Corrected: Added 'time' parameter.
    console.log('Dear ' + Deja + ' your meeting is at ' + time + '.');
}
sendReminder('Sanjay',7);
sendReminder('Tiffany',5);
sendReminder('Oscar',3);
sendReminder('Anabelle',2);

let name ='Terrence'
let count = 1

function showAlert(){
    console.log(name+ ', wake up! This is your alarm number ' + count + '!');
    count +=1;
}

showAlert();
showAlert();
showAlert();
showAlert();

function calculate(){
    console.log('hello');
    console.log(2+2);
}

calculate();
calculate();

function calculateTax(){
    console.log(1000*0.1);
}

calculateTax();

function calculateTax(parameter1, parameter2){
    console.log(parameter1 * 0.1); 
}

calculateTax(2000, 0.3);
calculateTax(5000);

function calculateTax(cost, taxPercent = 0.1){

   console.log(cost * taxPercent);
}
calculateTax(100);
calculateTax(100, 0.2);