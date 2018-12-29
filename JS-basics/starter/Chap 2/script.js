//Ternary Operator & Switch Statement: if else in one line


var firstNamae='Adnan'
var age=22;

age>=18 ? console.log(firstNamae + ' drinks beer')
: console.log(firstNamae+' drinks juice');


var prefferedDrink= age>=18? 'beer' :'juice';
//Rememeber that ternary operator have higher precedence that assignment operator


//Switch
var job='teacher'
switch(job){
        
    case 'teacher': console.log('teaches now');
        break;
        
    case 'driver': console.log('drives an uber now');
        break;
    default:console.log('does something else');
        
        
}


switch(true){
        
    case age<13: console.log('kid');
        break;
    case age>13:console.log('teen');
        break;
    default:console.log('does something else');

}


//falsy values: undefined, null, 0,'', NaN
//truthy values: all others
//careful abput l=0
var h;
var l=0;

//h and l both will be undefined
if(h){
    console.log('is defined');
}
else{
    console.log('not defined');
}

if(l){
    console.log('is defined');
}
else{
    console.log('not defined');
}

//to make l defined
if(l || l===0){
    console.log('is defined');
}
else{
    console.log('not defined');
}

