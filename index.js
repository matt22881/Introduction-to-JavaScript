// /************************************************************** Task 1: Warm-up! **************************************************************/
// //Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 39;

if (votingAge > 18) {
    console.log ('true');
    console.log ('The question is WRONG!!  It should say "If (votingAge > 17){console.log("True")}"...smh...maths iz hard i know  XP');
}


// //Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let x = 1;
let y = 2;
if (x < y ) {
    x = x + y }
console.log(x);


// //Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


console.log(Number('1999'));


// //Task d: Write a function to multiply a*b 

const a = 2;
const b = 6;
console.log(42);


// console.log(a*b);

const multiply = (a, b) => {console.log(a * b)};

console.log(multiply(4,5));
/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let realAge = 39;
dogYears = realAge * 7;
console.log('You are ' + dogYears + ' years old in Dog Years!');



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

var age = 1;
let weight = 15;
age = age * 12
if (age < 12 && age > 7) 
    food = weight * .04;
    else if (age < 12 && age > 4) 
        food = weight * .05;
    else if (age < 12 && age > 2) 
        food = weight * .1;
    else if  (weight <= 5) 
        food = weight * .05;
    else if (weight <= 10) 
        food = weight * .04;
    else if (weight <= 15) 
        food = weight * .03;
        else food = weight * .02;
console.log('Feed that pupper ' + food + 'pounds of food daily!')




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

for (let i = 0; i < 50; i++); 


let userChoice = 2     //----------------------------1-rock__2-paper__3-scissors------------------//
function getRandom(min, max) {    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * 3);
    let botChoice = getRandom(1, 3);
    return (console.log(botChoice));


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const km = 100;
let miles  = .621371 * km;

console.log.toFixed(2)(miles + " miles!");

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters


const feet = 100;
let cent  = 30.48 * feet;

console.log(Math.round(miles) + " Centimeters!")


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`





/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F





/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method




