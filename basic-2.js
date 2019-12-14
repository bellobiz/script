function chocholateBars() {
    var array = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
    return array; // [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ]
}

function addElementToBeginningOfArray(array, element) {
    return [element, ...array]; // [ 'foo', 1 ]
}

function addElementToEndOfArray(array, element) {
    return [...array, element]; // [ 1, 'foo' ]
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array; // [ 1, 'foo' ]
}

function accessElementInArray(array, index) {
    return array[index]; // 3
}

function desructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();
    return array; // [ 2, 3 ]
}


function removeElementFromBeginningOfArray(array) {
    return array.slice(1); // [ 2, 3 ]
}

function destructivelyRemoveElementToEndOfArray(array) {
    array.pop();
    return array; // [ 1, 2 ]
}

function removeElementToEndOfArray(array) {
    return array.slice(0, 2) // [ 1, 2 ]
}

(function () {
    console.log(chocholateBars());
    console.log(addElementToBeginningOfArray([1], 'foo'));
    console.log(addElementToEndOfArray([1], 'foo'));
    console.log(destructivelyAddElementToEndOfArray([1], 'foo'));
    console.log(accessElementInArray([1, 2, 3], 2));
    console.log(desructivelyRemoveElementFromBeginningOfArray([1, 2, 3]));
    console.log(removeElementFromBeginningOfArray([1, 2, 3]));
    console.log(destructivelyRemoveElementToEndOfArray([1, 2, 3]));
    console.log(removeElementToEndOfArray([1, 2, 3]));
}())