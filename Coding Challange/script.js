//console.log('Hello World');

//In JavaScript that is designed to be executed in the browser, it’s considered a best practice to avoid using methods on console. Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client. In general, calls using console should be stripped before being pushed to production.//



//5 data types:
//number, string, boolean, undefined,and null
//they are primitive,on-object data types
//numbers are always floating point
//strings are streams of chars
//something that doesnt have a value yet-->undefined, automatically assigned

//null is also undefined but more specific

//js is dynamically typing, data types are automatically assined to variables

//if we change the variable assign to some other data types it automatically change the data type of the variable

//variable behaviour:
var firstName = 'John';
console.log(firstName);
var secondName;
console.log(secondName); //undefined

//var name can start with $, underspace and numbers, will not work: $, /

//reserved keyword: if function delete

var a,b,c;
a='adnan';
b=23;
c=true;



console.log(a+ ' is '+b+' years old? '+c);
//boolean, undefined converted into string-->Type Cohesion


//Variable Mutation:
b='twenty three';
//alternative functions:

alert(b);

var adnan=prompt('who is adnan?');
alert(adnan+' is '+b+' years old ');


var checker=2>3;
alert(checker);


//typeof operator
console.log(typeof checker);


//operator precedence
var checker= 1995-1990>0;
console.log(checker);//prints true, so it proofs that it does the minus frst

//multiple assignments
var x,y
x=y=7;
console.log(x,y);//y is 7 not undefined bcz assignments oprator works right to left.
//+ - has left to right, */ right to left, check plase




