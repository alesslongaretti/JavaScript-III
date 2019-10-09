/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - "this" is in the global scope and the value will be  the window 
* 2. Implicit Binding - is when dot notation is used. "this" will be whatever is to the left of the dot.
* 3. New Binding - using "new" will create a new object that will be "this"
* 4. Explicit Binding - is when we use .call() and .apply(). This will be passed in thosed methods.
*
* write out a code example of each explanation above
*/


// Principle 1

const myName = function () {
    console.log(this);
}

myName();

// code example for Window Binding




// Principle 2

const myLastName = {
    hello: "Hello my last name is",
    greeting: function (name) {
    console.log (`${this.hello} ${name}`);
    }
}
 myLastName.greeting('Longaretti');

// or

// const myLastName = () => {
//     console.log(this.hello)
// }
// var hello = "hello my last name is Longaretti";
// myLastName();

// code example for Implicit Binding




// Principle 3

function FoodsIlove (food) {
    this.love = 'I love',
    this.food = food,
    this.speak =  function () {
        console.log (`${this.love} ${this.food}`);
    }
}

const rice = new FoodsIlove ('rice');
const potatoes = new FoodsIlove('potatoes');

rice.speak();
potatoes.speak();

// code example for New Binding




// Principle 4

function FoodsIlike (food) {
    this.like = 'I like',
    this.food = food,
    this.speak =  function () {
        console.log (`${this.like} ${this.food}`);
    }
}

const item1 = new FoodsIlike ('eggs');
const item2 = new FoodsIlike('pasta');


item1.speak.call(item2)
item2.speak.apply(item1);

// code example for Explicit Binding