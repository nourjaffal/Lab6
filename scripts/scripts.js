/****************** YOUR NAME: Nour Jaffal

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let modelName = "CPRG"; // Stores the current model name
let duration= 0;


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

// Function to recalculate the total cost based on modelName and duration
function recalculate() {
    let costLabel = document.getElementById("calculated-cost"); // Get the span element to display the total cost

    let totalCost = 0; // Initialize totalCost to 0

    // Check the modelName and calculate the total cost accordingly
    if (modelName == "XYZ") {
        totalCost = duration * 100; // If modelName is "XYZ", calculate the total cost
    } else if (modelName == "CPRG") {
        totalCost = duration * 213; // If modelName is "CPRG", calculate the total cost
    } 
    costLabel.innerHTML = totalCost; // Set the innerHTML of the span element to display the total cost
}


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE
// This code listens for when the HTML document is completely loaded before running its function
document.addEventListener("DOMContentLoaded", function() {
    // This line retrieves the button element with the ID "model-button" from the HTML document
    let modelButton = document.getElementById("model-button");

    // This function changes the model name displayed on the webpage and does recalculation
    function changeModel() {
        // gets the element with the ID "model-text" from the HTML document
        let modelText = document.getElementById("model-text");
        // Checks the current model name and goes between "XYZ" and "CPRG"
        if(modelName == "XYZ") {
            modelName = "CPRG";
            // Updates the text content of the model element to "Model CPRG"
            modelText.innerHTML = "Model CPRG";
        } else if (modelName == "CPRG") {
            modelName = "XYZ";
            // Updates the text content of the model element to "Model XYZ"
            modelText.innerHTML = "Model XYZ";
        }
        // recalculate after changing the model
        recalculate();
    }

    
    modelButton.addEventListener("click", changeModel);
});


/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
/****************** duration button logic ******************/

// Function to handle duration button click
document.addEventListener("DOMContentLoaded", function() {
    let durationButton = document.getElementById("duration-button"); // Get the duration button element

    function changeDuration() {
        let durationText = document.getElementById("duration-text"); // Get the span element to display the duration

        // Prompt user for new duration and update durationText accordingly
        let newDuration = prompt("Enter new duration:");
        if (newDuration !== null) { // Check if user clicked cancel
            duration = parseFloat(newDuration); // Convert the input to a floating-point number
            durationText.innerHTML = duration; // Update the duration displayed
            recalculate(); // Recalculate the total cost
        }
    }

    durationButton.addEventListener("click", changeDuration); // Attach changeDuration function to the duration button click event
});

