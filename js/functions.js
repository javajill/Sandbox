function doNothing(){
    console.log("doing nothing");
    returnSomething();
}

function returnSomething(){
    return "here it is"
}

a = doNothing();

if (a){ 
    console.log( "a is ture: " + a )
} else {
    console.log( "a is false: " + a )
    
}
