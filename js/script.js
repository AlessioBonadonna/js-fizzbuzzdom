// il mio M.O
// scrivo un ciclo for che mi stampi i numeri da 1 a 100 in console
//If n % 3 = 0 && n % 5 = 0  print FizzBuzz
// Else if n % 3 = 0  print Fizz
// else if n % 5 = 0 Buzz
// else print   Number

for(i=0; i<100; i++){

let a = i+1 ;   
if (a%3==0 && a%5==0){
    console.log("FizzBuzz");

} else if (a%3==0){
    console.log("Fizz");
    
}else if (a%5==0){
    console.log("Buzz")
    
}else{
    console.log(a);
}

}