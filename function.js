//Function syntex
function myFunction() {
//   console.log("hello Javascript");
}

myFunction();


// ()----> Parameter
function name(name, age ){
    // console.log("My name is " + name +"." + " I am " + age + " years old");
}
name("Jahid", 21)
// ()----> Argument


// ehkane (dateOfBirth = 2000) kaj korbe tohkon ei johkon user date of birth er data dibe na. otherwise jodi na dea tahole consol.log hobe 2000. 
function firstName(name, age, dateOfBirth = 2000 ){
    // console.log("My name is " + name +"." + " I am " + age + " years old. " + "My Date of Birth " + dateOfBirth);
}
// firstName("Jahid", 21 , 2004)



//Automatic (Self-invoked) invocation Function( ja nije nijei kaj kore)
(function (message){
    console.log("I am a Self-invocation", message);
})("hello");
