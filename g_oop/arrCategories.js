// storing objects inside an object
const arrCategories = new Array(
    { name: "Cat A", description: "Cars below 1600cc" },            /* js object 0 */
    { name: "Cat B", description: "Cars above 1600cc" },            /* js object 1 */
    { name: "Cat C", description: "Goods Vehicles and Buses" },     /* js object 2 */
    { name: "Cat E", description: "Open" }                          /* js object 3 */
);

// access arrCategories length property
// console.log(arrCategories.length);

// access arrCAtegories index 0's property called name & description
// console.log(arrCategories[0].name, arrCategories[0].description);

// done using (for loop)
// for (let i = 0; i < arrCategories.length; i++) {
//     console.log(arrCategories[i].name, arrCategories[i].description);
// }

// using the forEAch method of the array object
arrCategories.forEach((element) => {
    console.log(element.name, element.description);
})
