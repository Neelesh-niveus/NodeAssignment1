const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname,'files');
//console.log(filePath);
 
async function fileCreation(){
    try{
        await fs.promises.writeFile(filePath+'/file.html','this is the newly created file');
        console.log("file is created successfully");
     }
     catch(err){
        console.log(err);
     }
    
       

}

fileCreation();

