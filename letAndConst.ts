/**
 * using let and const rather than var
 * undesirable beahavior of var - we can print var defined variable inside loop outside of the loop
 * let refers to defining any keywords
 * const refers to constant values
 */


var contianer = document.getElementById('container');


for (var x =0; x<=5; x++){
    var counter = x;
}

console.log(counter)
//outputs 5


for (var x =0; x<=5; x++){
    let counter = x;
}

console.log(counter)
//outputs error can't find variable 


for (var x =0; x<=5; x++){
    const counter = x;
    counter = 1;
}

console.log(counter)
//outputs erro cannot assing constant 