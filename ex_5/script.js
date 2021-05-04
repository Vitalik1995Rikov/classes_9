class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

let arr = new PowerArray(1, 5, 9, 13, 17);
console.log(arr.isEmpty());


let arrFiltered = arr.filter(item => item >= 10);
console.log(arrFiltered);
console.log(arrFiltered.isEmpty());
console.log(arrFiltered instanceof Map);


// ------------ ----------- 


function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();
let b = new B();

alert( b instanceof A ); // вернет true
alert( a instanceof B ); // вернет true