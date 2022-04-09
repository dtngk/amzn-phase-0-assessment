// 1. Write your functions here
/*
Function that a new customer will use when entering the Deli
@param arr = array for the current line of people
@param name = string containing the name of the person joining the end of the line.
@return nothing but console.log() the person's name along with their position in line
*/
function takeANumber(arr, name){

    /*
    Check to see if the argument passed in is an array
    */
    if(!Array.isArray(arr)){
        console.log(`Unable to add ${name} to the line!`);
    }else {

        /*
        Adding the new person to the end of the array using push. push() adds the person to 
        the end of the array, while unshift() method adds the person to the front of the array.
        */
        arr.push(name);

        console.log (`Welcome, ${name}. You are number ${arr.length} in line.`);
    }
};

/*
Function that shows the current people waiting in line for the Deli
@param arr = array for the current line of people 
@return a string containing everyone with their current place in the line.
*/
function line(arr){
    
    /*
    Check to see if the argument passed in is an array and the array is not empty
    */
    if(!Array.isArray(arr)){
        return("Unable to show the people who are currently waiting in line!");
    }

    if (!arr.length){
        
        return("The line is currently empty.");
    }

    let message = ("The line is currently: ");
    let num = 1;

    for (const person of arr){
        message += (`${num++}. ${person} `);
    }

    return message;       
};

/*
Function that removes the next person in line and takes their order
@param arr = the array of people waiting in line
@return nothing but console.log() the next person in line
*/
function nowServing(arr){

    /*
    Check to see if the argument passed in is an array and the array is not empty
    */
    if(!Array.isArray(arr)){
        console.log(`Unable to serve the next person in line!`);
    }else if (!arr.length){
        console.log("There is nobody waiting to be served!");
       
    }else{  
        /*
        Gets the person in the front of the array. Using shift() instead of pop() because
        shift() removes an element from the front of the array while pop() removes the
        element at the end of the array.
        */
        const name = arr.shift();

        console.log(`Currently serving ${name}.`);
    }
};

// 2. Example Usage

const katzDeli = [];
const kDeli = {};


takeANumber(katzDeli, "Ada"); //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace"); //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent"); //=> Welcome, Kent. You are number 3 in line.

console.log(line(katzDeli)); //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli); //=> "Currently serving Ada."

console.log(line(katzDeli)); //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz"); //=> Welcome, Matz. You are number 3 in line.

console.log(line(katzDeli)); //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli); //=> "Currently serving Grace."

console.log(line(katzDeli)); //=> "The line is currently: 1. Kent 2. Matz"

nowServing(katzDeli); // => "Currently serving Kent."
nowServing(katzDeli); // => "Currently serving Matz."
nowServing(katzDeli); // => ""There is nobody waiting to be served!"
nowServing(katzDeli); // => ""There is nobody waiting to be served!"

console.log(line(katzDeli)); //=> "The line is currently empty!"

takeANumber(kDeli, "Matty"); // => "Unable to add Matty to the line!" 
nowServing(kDeli); // => "Unable to serve the next person in line!"
console.log(line(kDeli)); // => Unable to show the people who are currently waiting in line!

takeANumber(katzDeli, "FlatIron"); //=> Welcome, FlatIron. You are number 1 in line.

console.log(line(katzDeli)); //=> "The line is currently: 1. FlatIron"
nowServing(katzDeli); // => "Currently serving FlatIron."
nowServing(katzDeli); // => "There is nobody waiting to be served!"
