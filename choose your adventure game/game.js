const prompt = require("prompt-sync")({ sigint: true });

let userName = prompt("Enter your name: ");
console.log("Welcome", userName, "to this adventure");

let answer = prompt(
  "You are on a dirt road, it has come to an end and you can go left or right. which way would you like to go? "
).toLowerCase();

if (answer == "left") {
  let answer1 = prompt(
    "You come to a river, you can walk around it or swim around across it? Type walk to walk around and swim to swim across: "
  );

  if (answer1 == "swim") {
    console.log("You swam across and were eaten by an alligator");
  } else if (answer1 == "walk") {
    console.log(
      "You walked for many miles, ran outta water, and you lost the game."
    );
  } else {
    console.log("Not a valid option, you lose");
  }
} else if (answer == "right") {
  let answer2 = prompt(
    "You come to bandit house, do you want to fight them or shout out them? (fight/shout) "
  );

  if (answer2 == "fight") {
    console.log("You were beaten to stupor");
  } else if (answer2 == "shout") {
    let userAnswer = prompt(
      "You shouted out loud, did they run away or not (yes/no)? "
    );

    if (userAnswer == "yes") {
      console.log("You did a great a job");
    } else if (userAnswer == "no") {
      console.log("You were caught and you lose");
    } else {
      console.log("Not a valid option, you lose");
    }
  } else {
    console.log("Not a valid option, you lose");
  }
} else {
  console.log("Not a valid option; you lose.");
}

console.log("Thank you for trying", userName, "have a great day");