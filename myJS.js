// mostly used this site as reference https://www.w3schools.com/js/js_function_definition.asp

function buttonEvent1() {
    let val = document.getElementById("input1").value;

    // call a function by its                                 name
    document.getElementById("demo1").innerHTML = "Temp is " + toCelsius(val) + " Celsius";

    // call a function by using a                            variable that points to a function
    document.getElementById("demo2").innerHTML = "Temp is " + myFunction1(val) + " Celsius";

    // use a                                                >> self-invoking << anonymous function 
    //                                                         << note the ending  ()
    document.getElementById("demo3").innerHTML = "Temp is " + (function () { return (5 / 9) * (val - 32); }()) + " Celsius";

    // use a function                                         defined in a function constructor
    document.getElementById("demo4").innerHTML = "Temp is " + myFunction2(val) + " Celsius";
}

// Function Declaration
// Semicolons are used to separate executable JavaScript statements.
// Since a function declaration is not an executable statement, it is not common to end it with a semicolon.
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}  // no ;

// Function Expression stored in a variable
var myFunction1 = function (fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
};
// The function above is actually an anonymous function (a function without a name).
// if you gave it a name in that line of code, that name would always be ignored, myFunction1 would take precedence
// The function above ends with a semicolon because it is a part of an executable statement.


// Functions can also be defined with a built-in JavaScript function constructor called Function(). note the captial F
var myFunction2 = new Function("fahrenheit", "return (5 / 9) * (fahrenheit - 32)");
// "Most of the time, you can avoid using the new keyword in JavaScript."  <<<<<<<<   we are not going to cover new





// Functions are Objects
// The typeof operator in JavaScript returns "function" for functions.
// But, JavaScript functions can best be described as objects.
// JavaScript functions have both properties and methods.
// The arguments.length property returns the number of arguments received when the function was invoked:

function myFunction(a, b) {
    return arguments.length;
}

//The toString() method returns the function as a string:
function myFunction(a, b) {
    return a * b;
}

var txt = myFunction.toString();
// you will see in this course, as in C#, this toString function is often "overriden"


// A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor. 

// Parameter Rules
//  -  JavaScript function definitions do not specify data types for parameters.
//  -  JavaScript functions do not perform type checking on the passed arguments.
//  -  JavaScript functions do not check the number of arguments received.
// If a function is called with missing arguments (less than declared), the missing values are set to: undefined
// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

// The Arguments Object
// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an (almost) array of the arguments used when the function was called (invoked).
// This way you can simply use a function to find (for instance) the highest value in a list of numbers:

x = findMax(1, 123, 500, 115, 44, 88); // can pass in any number you like!

function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

// Arguments are Passed by Value  (unless they are an object or an array, just like C#)
// The parameters, in a function call, are the function's arguments.
// JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
// If a function changes an argument's value, it does not change the parameter's original value.
// Changes to arguments are not visible (reflected) outside the function.

// Objects and arrays are Passed by Reference
// Because of this, objects and arrays will behave like they are passed by reference:
// If a function changes an object property or an array value, it changes the original value.
// Changes to object properties are visible (reflected) outside the function.


