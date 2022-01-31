/*
* Excercise 1
*
*/
const colorBlock = document.querySelector("#color-block");
colorBlock.addEventListener("click", changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(this.style.backgroundColor == 'rgb(107, 255, 204)'){
        //change the background color using JS
        this.style.backgroundColor = "#F08080";
        //Change the text of the color using the span id color-name
        document.querySelector("#color-name").innerHTML = "#F08080";
    }
    else{
        //change the background color using JS
        this.style.backgroundColor = "#6BFFCC"
        //Change the text of the color using the span id color-name
        document.querySelector("#color-name").innerHTML = "#6BFFCC";
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const input = document.querySelector("#f-input");
const convertbtn = document.querySelector("#convertbtn");
convertbtn.addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    const output = (input.value - 32) * 5/9;
    //Send the calculated temperature to HTML
    document.querySelector("#c-output").innerHTML = output;
}


