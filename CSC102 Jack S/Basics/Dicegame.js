    //functions are a nice way to organize our code and make our code reusable
    // use a descriptive function name - functions do something, so make it a verb/action
    // () can hold a function argument - if you need to pass in information to the function 
    function playCraps(){
        // log that the function was called
        // console.log("playCraps function was called")

        //roll die 1
        let roll1 = rollDice();

        //roll die 2
        let roll2 = rollDice();

        // console.log("roll1=" + roll2)
        // console.log("roll2=" + roll1)

        // calculate the rolls
        let sum = roll1 + roll2

        // display roll 1 in the roll 1 div
        document.getElementById("divRoll1").textContent = "Roll 1 = " + roll1;

        // display roll 2 in the roll 2 div
        document.getElementById("divRoll2").textContent = "Roll 2 = " + roll2;

        // 
        document.getElementById("divSum").textContent = "Sum = " + sum;

        // Variable to hold the result
        let resultCraps = "";
        

        // See if the user lost - if they rolled sum of 7 or 11
        // || - means or
        //  && means and
        if (sum == 7 || sum == 11){
            console.log("you lost")
            resultCraps = "You Lost :(";
    }
    // Check if we rolled an even number
    // modulus - % - do a division problem and we get the remainder as the result
    // 2/2 = 1 with no remainder = even number;
    // 4/2 = 2 with no remainder = even number;
    // 5/2 = 2 with a remainder of 1 = odd number
    // roll1 % 2 == 0 - this will be true if we have an even number
    // we also need to make sure that roll1 and roll2 result in 
    else if (sum % 2 == 0 && roll1 == roll2){
        console.log("you win!")
        resultCraps = "You Win :D";
    }
    // the catch-all else statement if neither of the above statements were evaluated to true, this else statement will run
    else{
        console.log("you draw")
        resultCraps = "You Draw :/";
    }

    document.getElementById("divResult").textContent = "Result = " + resultCraps;


    // create a variable to hold a random number
    function rollDice(){
        // create a variable to hold a random number
        // Math.random() is a built in JavaScript funtion which generates a random number
        let die = Math.ceil(Math.random()*6);

        return die
    }
}