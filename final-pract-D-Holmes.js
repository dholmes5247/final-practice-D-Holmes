
// Values, Data Types, Operations 
const readline = require ('readline-sync'); // readlinesync requirement
let greeting = readline.question ("What is your first & last name?"); // readlinesync to interact and direct traffic

let updateNeeded = readline.question ("Do you have any info to update?"); // if yes this would shoot them to where they could update info

let playerAcademics = [ 
    {name: "Gunnar Holmes", position: "LB", gpa: 4.1, ACTScore: 25, PassedClearingHouse: true}, // using objects to store data
    {name: "Stacy Renfrow", position: "WR", gpa: 3.75, ACTScore: 30, PassedClearingHouse: false} // using objects to store data
]; // setting variable 'playerAcademics' as the academic Profile Data using Number, String Values, Boolean potential

console.log(playerAcademics); // Logs the academic info for inputted player info
console.log(typeof(playerAcademics)); // displays the typeof data - Object

// Stringing Characters Together
let speedTable = "name\t40 time\nGunnar\t4.8\nStacy\t4.3"; // creating a quasi table using newline & Tab
console.log(speedTable); // loggin the table
let sprinter = 'Stacy';
let result40 = '4.3';
let feedback =`Hello ${sprinter}, I see you ran a ${result40}, 
which is in the 90th percentile for your conference!
CONGRATULATIONS`; // Using template literals for string interpolation & MultiLine String
console.log(feedback); // Logs the statement with the template literals inserted

// Control Structures and Logic
function filterPlayers(criteriaGPA, criteriaACT) { // function designed to filter players based on GPA and ACT scores
    return playerAcademics.filter(player => player.gpa >= criteriaGPA && player.ACTScore >= criteriaACT); // using.filter creating a new array of elements that satisfy condition
}
let ivyLeaguePlayers = filterPlayers(3.75, 28); //setting search parameters Ivy Leaugue looks for

console.log("Players Matching Ivy Leaugue Criteria: "); // logs a header explaining what it is
ivyLeaguePlayers.forEach(player => { // loops through inyLeauguePlayers array created with filterPlayers & uses callback for each player
    console.log(`Name: ${player.name}, GPA: ${player.gpa}, ACT: ${player.ACTScore}`); // logs Name GPA & ACT dynamically
});

// Working with loops
for (let i =0; i < playerAcademics.length; i++) { // iterates through the length of playerAcademics one by one
    if (playerAcademics[i].gpa > 4.0) { // checks to see if GPA is > 4.0
        console.log(`Name: ${playerAcademics[i].name}, GPA: ${playerAcademics[i].gpa}`); // logs the Name & GPA of those meeting criteria- using-backticks used for literals
    }
};
// Building Arrays-
let rushByQuarter = [
    [" Game 1: ", 12, 15, 25, 30],
    [" Game 2: ", 20, 4, 15, 27],
    [" Game 3: ", 35, 1, 4, 29]
]; 
// using rows to represent each game and the 4 elements are rush yards per quarter. 
// this could be used to average yds per game or by each quarter or total yards etc. 
console.log(rushByQuarter); // logs the Array

// Using Arrays-
console.log("2nd Game, 4th Quarter: " + rushByQuarter[1][4] + "yards"); // using indexes, []'s & concetention to pull specific performances out

playerAcademics.sort((a,b) => b.gpa -a.gpa); // using sort function to list players by GPA
console.log("sorted by GPA (high to low): ");// Providing a header for information
console.log(playerAcademics); // logging GPA high to low. 
