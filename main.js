//FUNCTION
function logfruitName() {
    var fruitName = "apple";
    console.log(fruitName);
}
logfruitName();
var carName = "toyota";
function logcarName() {
    console.log(carName);
}
logcarName();
function numberValue() {
    var numberValue = 42;
    console.log(numberValue);
}
numberValue();
function professionName() {
    var professionName = "doctor";
    console.log(professionName);
}
professionName();
//PARAMETERS IN FUNCTION
function logMultipleName(monthName, daysName, animalName, birdName, personName) {
    console.log(monthName, daysName, animalName, birdName, personName);
}
logMultipleName("january", "monday", "cat", "parrot", "ali");
function makeBiryani(rice, meat, spices, vegetables, cookingMethod) {
    console.log(rice, meat, spices, vegetables, cookingMethod);
}
makeBiryani("basmati", "chicken", ["garamMasala", "turmeric", "cumin"], ["potatoes", "onions", "tomatoes"], "dumCooking");
console.log("Biryani is ready");
//RETURN TYPE
function calculateRectangleArea(length, width) {
    var area = length * width;
    return area;
}
console.log(calculateRectangleArea(5, 3));
function convertHoursToMinutes(hours) {
    var minutes = hours * 60;
    return minutes;
}
console.log(convertHoursToMinutes(3));
