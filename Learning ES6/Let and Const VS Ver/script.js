console.log('Learning ES6: var vs const, let');
var name='Adnan';
var age=22;
//suppose someone accedintally put Adna as name.
name='Adna' //name cchanged to Adna
console.log(name+age);

//But this prob should not be happened. We can stop giving further editting capabilities for var..thats done using const in ES6

const name2='Adnan';
//name2='Adna'; gives error:Uncaught TypeError: Assignment to constant variable.
console.log(name2)
let age2=23;//we know age will change so for this case we can use lets



console.log('Learning ES6: functions- var is function scoped but const and let are block scoped');


//ES5 Functions:
function drivenLicence(passedTest){
    if(passedTest){
        var fN='Adnan';
        var year='2018';
    }
 console.log(fN+year); //See it can access fn and year...   so var is function scoped

}

drivenLicence(true);

//ES6 Functions:
function drivenLicence2(passedTest){
    if(passedTest){
        const fN='Adnan';
        let year='2018';
        
    }
  /*console.log(fN);
  console.log(year); 
  Error : Cz const and let are block scoped
  */ //To solve it put the const and let fn , year outside the if block
}

drivenLicence2(true);



let i=23;
for(let i=0;i<5;i++){
    console.log(i);//0 1 2 3 4 
}
console.log(i);//23

//But see this:
var j=23;
for(var j=0;j<5;j++){
    console.log(j);//0 1 2 3 4 
}
console.log(j);//5 this j is the new j that is initialized inside of for loop