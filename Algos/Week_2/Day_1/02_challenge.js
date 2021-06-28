// Dice Roller
// Using what we've learned about the Math library in js, complete the following
// function that should return a value between 1 through 6 at random (1 and 6 inclusive)
function d6() {
    var roll = Math.random(); // remember, this is going to be anywhere between 0 (inclusive) and 1 (not inclusive)
    
    // at this point, roll is a random number between 0 (inclusive) and 1 (not inclusive), but we want it to be somewhere between 1 and 6.
    // So, let's multiply the result by 6 to start.
    roll *= 6;

    // now, roll is some number between 0 and 5.999999...
    // So we need to round it. Let's look at our options.
    // Math.ceil -- roll is between 0 and 6, whole numbers only. that's tough, because we don't want 0, but we want 6.
    // Math.floor -- roll is between 0 and 5, whole numbers only. this is going to be our best option, because adding 1 to the 
    // result wil give us between 1 and 6, whole numbers only!
    roll = Math.floor(roll) + 1;

    return roll;

    // Bonus: Do it in one line!!
    return Math.floor(Math.random()*6) + 1;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by 
// randomly choosing a response
function oracle() {
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    
    // the goal here is to generate a random number between 0 and the max index of our array!
    // i could count that number out, or, more programmatically, grab the array's length.

    // following the same pattern from the last algo:
    var randomIndex = Math.random();
    
    randomIndex *= lifesAnswers.length;

    // however, now we want between 0 and the length - 1, so we can save a little bit of math
    // by just using the length, and rounding down so we get a random whole number between
    // 0 and the length - 1!
    randomIndex = Math.floor(randomIndex);

    console.log(lifesAnswers[randomIndex]);

    // BONUS: Do it in one line!
    // console.log(livesAnswers[Math.floor(Math.random() * lifesAnswers.length)])
}
