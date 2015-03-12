/*
 -----------
 forEach
 -----------
*/
// Must define a parameter for a funtion to be ran through forEach
function sayThing(thing) {
  console.log(thing); // side effect
  return thing; // return value
}

sayThing('hello');

// 1. 
['hello', 'hola', 'bonjour'].forEach(sayThing); // throws away return value

// 2. 
var things = ['hello', 'hola', 'bonjour'];
things.forEach(sayThing);

// 3.
var things = ['hello', 'hola', 'bonjour'];
things.forEach(function(thing){
  console.log(thing);
  return thing;
});

/*
 -----------
 map
 -----------
*/

var timesTwo = [1, 2, 3].map(function(item){
  return item * 2;
});

console.log(timesTwo);

function doubled(items) {
  return items.map(function(item){
    return item * 2;
  });
}

var doubleArray = [2, 4, 5, 6]

console.log(doubled(doubleArray));

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) != -1;
}

console.log(isVowel('a'));

// translate function takes a string as an argument
function translate(phrase) {
  // split the phrase string by character (including space)
  var letters = phrase.split('');
  // map over each letter and pass in each letter as the function parameter
  var translatedArray = letters.map(function(char){
    // If the character being mapped over is a vowel or space return untouched
    if (isVowel(char) || char == " ") {
      return char;
    // If the character is not a vowel or space return the character + "o" + the character
    } else {
      return char + 'o' + char;
    }
  });
  // Console log the new mapped array
  console.log(translatedArray);
  // return the new array joined into a string with no separations
  return translatedArray.join('');
}

console.log(translate("this is fun"));
console.log(translate("m i c k e y m o u s e"));

/*
  filter
*/

// Fiter an array by removing numbers greater than 5 and return a new array
var filteredArray = [1, 2, 3, 4, 5].filter(function(item){// return true if I want the value in the output
  // return false if I don't
  return item < 4;
});

console.log(filteredArray);

/*
  Objects
  
*/

var name = "Jake Smith";

function sayHello(){
  console.log("Hello, I'm " + name);
}
sayHello();

var favoriteFoods = ['cheese', 'tacos'];

var person = {
  name: "Jake Smith",
  sayHello: function() {
    console.log("Hello, I'm " + person.name);
  },
  favoriteFoods: ['cheese', 'tacos']
};

// take an array of person's properties, map over it and store the return value
var personProperties = ['name', 'favoriteFoods'].map(function(prop){
  // If the property of person being mapped is an array join it with a space
  if (Array.isArray(person[prop])) {
    var joinedArray = person[prop].join(' ');
    return joinedArray
  } else {
    // Else just return the property of person being mapped
    return person[prop];
  }
});

console.log(personProperties);

var people = [
  {name: "Jake", role: "Instructor"},
  {name: "Roy", role: "Resident Cool Guy"}
];

var peopleNames = people.map(function(person) {
  return person.name;
});

console.log(peopleNames);


var slaying = true
var youHit = Math.floor(Math.random() * 2)
var damageThisRound = Math.floor(Math.random() * 5 + 1)
var totalDamage = 0

while (slaying){
    if (youHit) {
        console.log("Drag on");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You slew the dragon");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("Gotcha bish");
        slaying = false;
    } 
}


// Another Do While
var bool = true;
do {
    console.log("I did it");
    bool = false;
} while (bool);

// Is it even?
var isEven = function(number) {
  if (number % 2 === 0) {
    return true;  
  } else if (isNaN(number)) {
        return "That's nat a number, silly"
  } else {
    return false;    
  }
};

console.log(isEven(3));

//////////////////////
var i = 0;
do {
   i += 1;
   console.log(i);
} while (i < 5);

// Check index of array to see if it's an array, if it's a number, if it's even or odd
// Then perform an action based on the result
var listOfThings = [1, 2, 4, 6, 46, 788, 8979, 5, 5757, 4646, "grunt", "Helium", "AU", "Borst", [3,2,1], 89 ]
var newEvenList = []
var newOddList = []

for (var i = 0; i < listOfThings.length; i++){
  if (Array.isArray(listOfThings[i])) {
      console.log("Here's another array:" + " " + listOfThings[i])
  } else if (isNaN(listOfThings[i])) {
      console.log( listOfThings[i] + " " + "is Not a number");
  } else if (listOfThings[i] % 2 === 0) {
      newEvenList.push(listOfThings[i]);
  } else {
      newOddList.push(listOfThings[i]);
  }
}

console.log("Here are all of the evens" + " " + newEvenList)
console.log("Here are all of the odds" + " " + newOddList)

// Case switch get movie review
function getReview(movie){
    switch(movie){
        case "Toy Story 2":
            return "Great story. Mean prospector.";
            break;
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
            break;
        case "The Lion King":
            return "Great songs.";
            break;
        default:
            return "I don't know!";
    };    
};

getReview("Finding Nemo");


// What's your favorite color?
// Write your code below!
color = ['red', 'blue', 'yellow', 'black']

for (var i = 0; i < color.length; i++) {
    switch(color[i]) {
        case 'red':
            console.log('red is dead');
            break;
        case 'blue':
            console.log('blue is Kewl');
            break;
        case 'yellow':
            console.log('yella is hella cool');
            break;
        default:
            console.log(color[i] + "... that's... cool");   
    }
}

// create the phonebook entry object and run the phone property value (which is a function (method))
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();


// reduce
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
console.log(total);
// total == 6

// Apparently if you concatinate two arrays within an array they become a single array
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
console.log(flattened);
// flattened is [0, 1, 2, 3, 4, 5]

[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10); 
// returns 20
// 10 + 0 = 10
// 10 + 1 = 11
// 11 + 2 = 13
// 13 + 3 = 16
// 16 + 4 = 20

// join
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3
console.log(a.join());
console.log(a.join(', '));
console.log(a.join(' + '));

// map
// This takes an array of numbers and creates a new array 
// containing the square roots of the numbers in the first array
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);

console.log(roots);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]

var myMappedArray = numbers.map(function(num){
  return num * 2;
});

console.log(myMappedArray);

// reverse a string
var str = '12345';
var newStr = [].map.call(str, function(x) {
  return x;
}).reverse().join('')

console.log(newStr);


// Split
// splits a string into an array of strings using the specified separator

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
  console.log('Here\'s your new array' + ' ' + arrayOfStrings);
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var space = ' ';
var comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);

// 
var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);

console.log(splits);


// Working with Objects
var friends = {
    bill : {
        firstName: "Bill",
        lastName: "Brasky",
        number: 1,
        address: [123, "Easy Street", "Cash Town", "CA"]
    },
    steve : {
        firstName: "Steve",
        lastName: "Scuba",
        number: 2,
        address: [311, "Down Street", "Los Angeles", "CA"]
    }
}

var list = function(obj) {
    for(var key in obj) {
        console.log(key);   
    };    
};

list(friends);

var search = function(name) {
    for(var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};

search("Steve");

// FizzBuzz test 
var myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var fizzFilter = function(numSet){
    for ( var i = 0; i < myArray.length; i++) {
        if ( myArray[i] % 3 === 0 && myArray[i] % 5 === 0 ) {
            console.log("FizzBuzz");
        } else if ( myArray[i] % 3 === 0 ) {
            console.log("Fizz");
        } else if ( myArray[i] % 5 === 0 ) {
            console.log("Buzz");
        } else {
            console.log(myArray[i]);
        };
    };
};

fizzFilter(myArray);


// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// Here we need to make sure the setAge property has a setAge method
// as it's value so we can use it later
bob.setAge = setAge;

bob.setAge(35);


// This effectively does the same as above 
// but the setAge function only applies to the bob object here
var bob = {
  age: 30,
  setAge: function(newAge){
    this.age = newAge;
  }
};

bob.setAge(35);

console.log(bob.age);
  
// make susan here, and first give her an age of 25
var susan = {
    age: 25,
    setAge: setAge
};

// here, update Susan's age to 35 using the method
susan.setAge(35)


// When you create the function directly on the object
// You set the property value as the method
// In the previous example I had to set the setAge property to the setAge function (setAge: setAge)
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
rectangle.setWidth = function(newWidth) {
    this.width = newWidth;
};
  
// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);

rectangle.findPerimeter = function() {
  return (this.height * 2) + (this.width * 2);
};

rectangle.findArea = function() {
  return this.height * this.width;
};

rectangle.findPerimeter();
rectangle.findArea();

console.log("The perimeter of the rectangle is" + " " + rectangle.findPerimeter() + " " + "units.");
console.log("The area of the rectangle is" + " " + rectangle.findArea() + " " + "square units.");


// 
// Person constructor
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden =  new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age + " years old");
console.log("holden's species is " + holden.species + " and he is " + holden.age + " years old");


// cunstructor containing a method property
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function(){
    return (this.height * 2) + (this.width * 2);    
  }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

console.log(rex);
console.log(area);
console.log(perimeter);


// Rabbit constructor and several new instances
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        return "I am a " + this.adjective + " rabbit"
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

console.log(rabbit1.describeMyself());
console.log(rabbit2.describeMyself());
console.log(rabbit3.describeMyself());


// Array of objects
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);


// Looping an array of objects

// loop through our new array
for (var i = 0; i < family.length; i++) {
    var thisPerson = family[i];
    console.log(thisPerson.name);    
}


// Passing objects into functions
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
  if (person1.age > person2.age) {
    return person1.age - person2.age;
  } else {
    return person2.age - person1.age;
  }
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);
console.log(diff + " " + "years");

var diff = ageDifference(billy, alice);
console.log(diff + " " + "years");


// Again passing objects into functions
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(obj1, obj2){
    if (obj1.age > obj2.age) {
        return obj1.age;
    } else {
        return obj2.age;    
    }
};

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));


// Setting property values with dot notation and bracket notation
var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species;
    
// use bracket notation for snoopy's age
var age = snoopy["age"];


// find area and perimeter of a circle
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function(){
        return 2 * (Math.PI * this.radius);
    }    
};


// Address book member constructor
var AddyMember = function(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
};

// new addy member instances
var bob = new AddyMember("Bob", "Jones", "(650) 777-7777", "bob.jones@example.com");
var mary = new AddyMember("Mary", "Johnson", "(650) 888-8888", "mary.johnson@example.com");

// Create contacts list empty array
var contacts = new Array();

// bob and mary to the contacts list
contacts[0] = bob
contacts[1] = mary

console.log(mary.phoneNumber);

var printPerson = function(person) {
    console.log(person.firstName + " " + person.lastName);
};

// print both manually
printPerson(contacts[0]);
printPerson(contacts[1]);

// print all
var list = function(){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    };
};

list();

// Make list function reusable
var list = function(contacts){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    };
};

list(contacts);

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (contacts[i].lastName === lastName) {
            printPerson(contacts[i]);
        };
  }
};

search("Jones");



// Redo add member function as "add" instead of "addyMember"
// Include injection into the last spot in contacts array
var addyBook = new Array();

var Add = function(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    addyBook[addyBook.length] = this;
};

var drew = new Add("Drew", "Botka", "(864) 630-1501", "drewbotka@gmail.com");
var jim = new Add("Jim", "Jones", "(333) 333-333", "jim@gmail.com");
var bill = new Add("Bill", "Montana", "(444) 444-4444", "bill@gmail.com");
var helen = new Add("Helen", "ofTroy", "(555) 555-5555", "helen@gmail.com");

console.log(addyBook)
// List all contacts first and last names

for (var i = 0; i < addyBook.length; i++) {
  console.log(addyBook[i].email);
}

// Use a forEach to show numbers (Important to include contact parameter)
function showNumber(contact) {
  console.log(contact.phoneNumber);
}

addyBook.forEach(showNumber);


// Type of
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"


// Has own property? Returns true or false
var myObj = {
    // finish myObj
    name: "puddin tang"
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false


// Use a for in loop to print out all of the properties
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var property in nyc) {
    console.log(property);
};

// write a for-in loop to print the VALUE of nyc's properties
for (var property in nyc) {
    console.log(nyc[property]);
};


// Update a prototype so that all instances have the new property
function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();


// Penguin has a few of the same properties as animal
// So we can make the Penguin prototype an new instance of animal
// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

// Now, even though we didn't explicitly write a sayName function in the Penguin prototype
// penguin instances still have a sayName function
var peng1 = new Penguin("jimmy");
peng1.sayName();
// Penguin's numLegs are still set to two because we explicitly wrote that into the Penguin prototype
console.log(peng1.numLegs);


// if a property is not defined for a class, 
// this class's prototype chain will be traversed upwards 
// until a property is found (or not) in a parent (higher) class.
// All the way up to the object prototype Object()
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log( myEmperor.saying ); // should print "Waddle waddle"
console.log( myEmperor.numLegs ); // should print 2
console.log( myEmperor.isAlive ); // should print true


// Storing a variable inside a class (prototype or constructor) 
// limits access to said variable to only within the class or a class instance
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
   // Access privately scoped variables by returning within a public property
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
// This should not work (returns undefined)
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
// Now we can access john's privately scoped balance variable through the getBalance method
console.log(myBalance);


// Creating a private method and accessing it later
function AnotherPerson(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 25000;
  // changing "this." to "var" now makes this method private
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new public method
   this.askTeller = function(){
       // return the method itself and NOT the result of calling the method
        return returnBalance   
    }
}

var john = new AnotherPerson('John','Smith',30);
console.log(john.returnBalance);
// returns the returnBalance method
var myBalanceMethod = john.askTeller();
// returns the result of calling the returnBalance method
var myBalance = myBalanceMethod();
console.log(myBalance);


// Make sure the password is correct before showing balance
function OtraPersona(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 100000;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new OtraPersona('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);
console.log(myBalance);


// Check to see if the property's value is a sting and print if so
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var key in languages) {
    if (typeof languages[key] === "string") {
        console.log(languages[key]);
    }
}


// Find out if the Object prototype has the property "hasOwnProperty" (it does).
// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty('hasOwnProperty')
console.log(hasOwn);


// Cash Register
var cashRegister = {
    total: 0,
//insert the add method here    
    add: function(itemCost){
        this.total += itemCost;
    },
    
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;
        case "chocolate":
            this.add(0.45);
            break;
        }
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan('eggs');
cashRegister.scan('eggs');
cashRegister.scan('magazine');
cashRegister.scan('magazine');
cashRegister.scan('magazine');

//Show the total bill
console.log('Your bill is '+cashRegister.total);


// Add quantity to cash register
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan('eggs', 4);
cashRegister.scan('milk', 4);
cashRegister.scan('magazine', 4);
cashRegister.scan('chocolate', 4);


//Show the total bill
console.log('Your bill is '+cashRegister.total);


// Add a void last transaction function
var cashRegister = {
    total:0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.lastTransactionAmount = itemCost;
        this.total +=  itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function(){
        this.total -= this.lastTransactionAmount;
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);


// Add a staff member discount constructor
// create a constructor for the StaffMember class
function StaffMember(name, discountPercent) {
    this.name = name;
    this.discountPercent = discountPercent;
};

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

//Create a StaffMember for yourself called me
var me = new StaffMember("Drew", 20);


// Add a function to apply the staff discount to the total
var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount : function(employee){
        this.total -= this.total * (employee.discountPercent / 100);
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));



// LinkedIn interview question
// Create a function that accepts a word 
// and returns true if the word entered is a palindrome
// returns false if it's not
function isPalindrome(word){
    // split the word into an array of individual characters
    wordArray = word.split('')
    // store array length
    var arraySize = wordArray.length
    // loop over an array starting with 0 and ending at half the length of the array
    for (var i = 0; i < arraySize / 2; i++){
        // if current index in loop doesn't equal the index at the opposite end of the array
        // length of array is one more than the number of actual contents because of index starting with 0
        // 
        if (wordArray[i] !== wordArray[(arraySize - i) - 1]){
            return false 
        } 
    }
    return true
}

console.log(isPalindrome("racecar"))                // true
console.log(isPalindrome("dog"))                    // false
console.log(isPalindrome("dogijkigod"))             // false
console.log(isPalindrome("dogirtyuioppoiuytrigod")) // true