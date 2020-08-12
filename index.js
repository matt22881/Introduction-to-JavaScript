// /************************************************************** Task 1: Warm-up! **************************************************************/
// //Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

// const votingAge = 39;

// if (votingAge > 18) {
//     console.log ('true');
//     console.log ('The question is WRONG!!  It should say "If (votingAge > 17){console.log("True")}"...smh...maths iz hard i know  XP');
// }


// //Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

// let x = 1;
// let y = 2;
// if (x < y ) {
//     x = x + y }
// console.log(x);


// //Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


// console.log(Number('1999'));


// //Task d: Write a function to multiply a*b 

// const a = 2;
// const b = 6;
// console.log(a*b);
// console.log(42);
// const multiply = (a, b) => (a * b);
// console.log(multiply(a,b));
// console.log(multiply(4,5));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

// let realAge = 39;
// dogYears = realAge * 7;
// console.log('You are ' + dogYears + ' years old in Dog Years!');



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

// 

// let food
// function foodFunc (age, weight){
//     if (age < 1/6) (food = null)
//     else if  (age < 1/3 ) (food = weight * .1)
//     else if  (age < 7/12) (food = weight * .05)
//     else if (age < 1) (food = weight * .04)
//     else if (weight < 5) (food = weight * .05)
//     else if (weight < 10) (food = weight * .04)
//     else if (weight < 15) (food = weight * .03)
//     else food= weight * .02  }

// foodFunc(1,15), console.log(food)  //  15*.02 = 0.3  //=====Assignment wrong again=====//





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


                    //----------------------------1-rock__2-paper__3-scissors------------------//



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) +1);}
function user() {
    let userEntry = prompt('Choose Your Weapon.  Rock (r), Paper (p), or Scissors (s)');
    const userLetter = toLowerCase(indexOf(userEntry(0)));
    
      let botChoice = getRandomInt(3);
    if (userLetter !== 'r' && userLetter !== 'p' && userLetter !== 's' ) {
        alert('That was not a valid choice.  Is this your first time?') return userEntry;
    else if (userLetter === 'r') {userChoice = 1};
    else if (userLetter === 'p') {userchoice = 2};
    else if (userletter === 's') {userchoice = 3};
    else if (userLetter = undefined) {
        alert('You have to actually choose something, ideally one of the three choices') return userEntry;
        else alert('I got confused, let\'s start over.') return userEntry;
        }
    }
}   
if userChoice === 1 and botChoice === 3  ||  userChoice === 2 and botChoice === 1  ||  userChoice === 3 and botChoice ===2 {
    alert ('You Win!!  Congratulations.  *grumble grumble*  I wasn\'t ready yet though, next time I\'ll get you.)};

if userChoice === 1 and botChoice === 2  ||  userchoice === 2 and botChoice === 3  ||  userChoice === 3 and botChoice ===1 {
    alert ('HA HA HA Loser, I WIN!! At least I\'m a good sport about it and don\'t rub it in your Loser FACE!');

    else {alert('Wait, what, a tie?  That can\'t be right, you made me pick the wrong one, you dirty cheater!)};
}








if(name=='Joe') //If the name is 'Joe'
{
	alert('Wow, cool - my name is Joe too!');
}
else if(name=='Fred') //If the name is 'Fred'
{
	alert('Fred is a pretty generic name...');
}
else if(name=='John') //If the name is 'John'
{
	alert('Alright, John?');
}
else if(name=='George') //If the name is 'George'
{
	alert('George is a pretty decent name.');
}












// /************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// const km = 100;
// let miles  = .621371 * km;

// console.log (miles.toFixed(2) + " miles!");

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters


// const feet = 100;
// let cent  = 30.48 * feet;

// console.log(Math.round(miles) + " Centimeters!")


// /************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`



// for (beer = 100; beer >= 1; beer--){
//     function annoyingSong (beer) {
//     if (beer !== 1) { return(beer + ' bottles of beer on the wall, ' + beer + ' bottles of beeeer. Ya take one down, pass it around, ' +  beer + ' bottles of beer on the wall.')}
//         else {return( beer  + ' last bottle of beer on the wall, ' + beer + ' final bottle of beeeeeeeeer. Ya take it down, and pass it around, nooooooo mooore bottles of beer on thewall.')}}
//     console.log(annoyingSong(beer))}
 


// /************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F



// let mark = Math.random() * 100;

//     if (mark >= 90) {grade = 'A'
//         console.log('With a mark of ' + mark.toFixed(2) + '% you were awarded with a grade of "' + grade + '" for an Awesome Job!  I\'m a computer and I\'m not even THAT smart')}
//             else if ( mark >= 80) {grade = 'B'
//                 console.log('With a mark of ' + mark.toFixed(2) + '% you were given a grade of "' + grade + '," for "Big things in your future," keep up the good work!')}
//             else if ( mark >= 70) { grade = 'C'
//                 console.log('With a mark of ' + mark.toFixed(2) + '% you recieved a grade of "' + grade + '" for, "Clawing by won\'t get you ahead in life, let\'s try harder."')}
//             else if (mark >= 60) { grade = 'D'
//                 console.log('With a mark of ' + mark.toFixed(2) + '% you squeaked it out with a grade of "' + grade + '" for "Don\'t pretend like you even tried, you can do better')}
//             else if (mark >= 50) { grade = 'F'
//                 console.log('With a mark of ' + mark.toFixed(2) + '% you got a big red "' + grade + '" for FAILURE!  Better get it together, unless you like flipping burgers')}
//             else if (mark >= 25) { grade = 'U'
//                 console.log('UNACCEPTABLE!! that\'s what a ' + mark.toFixed(2) + '% mark is. "U Disappoint Everyone" is more like it.  Hey, I think I hear your fryer alarm.')}
//                     else
//                         console.log('Oh it\'s you again, I just gave you all my change yesterday, not ' + mark.toFixed(2) + '%. No, I don\'t have any Sudafed and if you keep coming around here and I\'m  calling  the   Cops.')

// /************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
var vowels = [];
function findVowels (wordInQuestion) {
    

}