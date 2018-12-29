//create a variable that cannot be accessed from outside...

//ES5:
(function(){
    var c=3;
    console.log(c); //3
})

(); //calling the function...
//console.log(c);//cannot be accessed outside



ES6:
{
    const a=2;
    let b=2;
    var k=9;
}

console.log(k);//9
console.log(a);//Error as const is block scoped
console.log(b);//Error as let is blocked scoped