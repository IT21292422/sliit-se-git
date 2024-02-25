function greeting(name, callback){
    console.log("Hello " + name);
    callback();
}

//Callback function
function showDone(){
    console.log("Done greeting!");
}

//Passing function as an argument
greeting("Alice", showDone)
