var fahrenheit = 32; //user input

//conversion code
var fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
var fahrenheitToKelvin = (fahrenheit + 459.67) / 1.8;

console.log( "Fahrenheit: " + fahrenheit + " degrees F");
console.log( "Celsius: " + fahrenheitToCelsius + " degrees C");
console.log( "Kelvin: " + fahrenheitToKelvin + " degrees K");
