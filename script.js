// increment 
// we store our count in a variable 
let count = 0; // first initialise it as Zero
// then we create a function for the count
// get the count element from HTML and store it in a js variable
let countEl = document.getElementById("count");
let entryEl = document.getElementById("entry");
let SaveBtn = document.querySelector("#save-btn");
function Increase(){
    count += 1;
    countEl.innerText = count;
}
// lets trigger the button to call this function when clicked

// lets create a save function that will help us save our data
// get the entry element by its id from HTML
// we need to add an event listener to the save button so that when clicked the save function is called
// we need to refresh our count element back to zero everytime when we save an entry so we do that in the save button click event
SaveBtn.addEventListener("click", function(){
    entryEl.innerText += " " + countEl.innerText + ", "
    count = 0;
    countEl.innerText = count;
})