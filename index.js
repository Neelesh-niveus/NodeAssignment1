function displayMessage(){
    return  new Promise((resolve,reject)=>{
        let condition=true;
        if(condition){
            resolve("message is displaced");
        }
        else{
            reject("error message");
        }
    
    });

}

displayMessage()
.then((data)=>{
    console.log(data);

})
.catch((err)=>{
    console.log(err);
})

