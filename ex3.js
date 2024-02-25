async function checkRoomStatus(){
    let promiseToCleanTheRoom = new Promise(function(resolve,reject){
        //cleaning the room
        let isClean = true;
        if(isClean){
            resolve("Clean");
        }else{
            reject("Not Clean");
        }
    })
    let result = await promiseToCleanTheRoom;
    //wait until promise resolves
    console.log("The room is " + result)
}