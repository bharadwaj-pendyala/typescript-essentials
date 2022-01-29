/**
 * ES2015 new feature for-of syntax
 */


var array=[
    'Gotham',
    'Denver',
    'Brussells'
];


//prior to ES2015 (for in keyword) - grabbing index to reference value out of the array
for (var index in array){
    var value = array[index];
    console.log(`${index}: ${value}`);
}

// after ES2015 (for of keyword) - prints without having to use index to print out values of array
for (var value of array){
    console.log(`${value}`);
}