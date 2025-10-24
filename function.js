//Function syntex
function myFunction() {
  //   console.log("hello Javascript");
}

myFunction();

// ()----> Parameter
function name(name, age) {
  // console.log("My name is " + name +"." + " I am " + age + " years old");
}
name("Jahid", 21);
// ()----> Argument

// ehkane (dateOfBirth = 2000) kaj korbe tohkon ei johkon user date of birth er data dibe na. otherwise jodi na dea tahole consol.log hobe 2000.
function firstName(name, age, dateOfBirth = 2000) {
  // console.log("My name is " + name +"." + " I am " + age + " years old. " + "My Date of Birth " + dateOfBirth);
}
// firstName("Jahid", 21 , 2004)

//Automatic (Self-invoked) invocation Function( ja nije nijei kaj kore)
(function (message) {
  // console.log("I am a Self-invocation", message);
})("hello");

// Maths function
let maths = function (x, y) {
  return x * y;
};
console.log(maths(2, 5));

// Maths function
function math(c, d) {
  return c + d;
}
console.log(math(33, 55));

// newFunc() হলো একদম স্ট্যান্ডার্ড Function Declaration Type Function (অর্থাৎ Named Function)।
function newFunc() {
  let lastName = "Jahidul Islam";
  console.log(lastName);
}
newFunc();

// এখানে map() method ব্যবহার করে, যেটা array-এর প্রতিটা element-এর উপর কাজ করে এবং নতুন একটা array তৈরি করে।
let numbers = [4, 5, 7, 8, 5, 2, 6];
let sqNumber = numbers.map(function (number) {
  return number * number;
});
console.log(sqNumber);

// numbers.map(...) → প্রতিটি element এর জন্য callback function চালায়।
// return number * number → প্রতিটি সংখ্যার square (বর্গ) বের করছে।
// sqNumber → নতুন array যেখানে প্রতিটি সংখ্যা বর্গ করা আছে।

let addNum = function (b, c) {
  return b * c;
};
console.log(addNum(2, 5));

// arrow function expression।
let add = (b, c) => b * c;
console.log(add(2, 5));

//let add = (b, c) => b * c;
//এটা একটি arrow function expression।
//এখানে (b, c) হলো parameters।
//b * c হলো return value (এক লাইনের জন্য return keyword দরকার হয় না)।
//ফাংশনকে কল করা হচ্ছে যেখানে b = 2 এবং c = 5




// যদি ফাংশনে একাধিক লাইন থাকে, তবে {} ব্যবহার করতে হয় এবং return লিখতে হয়:
let addNumber = (b, c) => {
  let result = b * c;
  return result;
};
console.log(addNumber(2, 5)); // 10




// Alert function
function grate(firstNames) {
  function sayHello() {
    alert("Hello " + firstNames);
  }
  return sayHello();
}
grate("Jahid");
grate("Jahid");
grate("Jahid");
