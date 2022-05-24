const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'CurdFileSystem')
const filepath=`${dirPath}/fruit.txt`;

// fs.writeFileSync(filepath,'This is a simple text File');

//read file

fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item)
})

// Update
// fs.appendFile(filepath,'And File name is apple.txt',(err)=>{
//     if(!err)
//     console.log('file is updated')
// })

// Rename
// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)
//      console.log('file name is updated')
// })

// for  delete
// fs.unlinkSync(`${dirPath}/apple.txt`)