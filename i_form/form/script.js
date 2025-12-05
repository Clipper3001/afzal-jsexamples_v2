// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// Create the array to populate selectDom
const arrTopics = new Array("Methods", "Properties", "Eventlisteners");

// Create the array to store selected values (for submission)
const arrSelected = new Array();

// Declare constant selectDom to refer to <select> of id = "selectTopics"
const selectDom = document.getElementById("selectTopics");

// Set the attributes of selectDom
selectDom.setAttribute("multiple", "true");

// Populate the options in selectDom
arrTopics.forEach ((topic,index) => {
selectDom.options.add(new Option(`${index+1}, ${topic}`,topic));
})

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options
arrTopics.forEach((topic,index) => {
    selectDom.options[index].setAttribute("class", "btn btn-primary d-block m-2")
});

// 12. element.addEventListener()
// Adding an event listener to a button
selectDom.addEventListener("change",() => {
    const collection = selectDom.selectedOptions;

    // iterate selected value from collection
    for (let index = 0; index < collection.length; index++) {
        const itemValue = collection[index].getAttribute("value");
        
        // obtain selected option from <option>
        
        const found = arrSelected.find((item) => item === itemValue);
        if (!found) {
            
        }
        
        // create list of item to be appended
        const listItem = document.createElement("li");
        listItem.textContent = itemValue;
        document.getElementById("listSelected").append(listItem);

        // update arrSelected
        arrSelected.push(itemValue);

    }

})

// Clear the selection from listSelected and arrSelected
// Use the splice method to remove all elements in an array

