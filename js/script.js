// il mio M.O
// scrivo un ciclo for che mi stampi i numeri da 1 a 100 in console
//If n % 3 = 0 && n % 5 = 0  print FizzBuzz
// Else if n % 3 = 0  print Fizz
// else if n % 5 = 0 Buzz
// else print   Number

for(i=0; i<100; i++){

let a = i+1 ;
let style_div = "style1";

if (a%3==0 && a%5==0){
    style_div = "style2";
    a = "FizzBuzz";
    console.log(a);

} else if (a%3==0){
    style_div = "style3";
    a = "Fizz"
    console.log(a);
    
}else if (a%5==0){
    style_div = "style4";
    a = "Buzz";
    console.log(a);
    
}else{
    console.log(a);
}

let div = document.createElement("div");
div.className = style_div;
   let singleBox = document.getElementById("box");
   div.append(a);
   singleBox.append(div);
   console.log(singleBox)

}
