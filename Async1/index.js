console.log("State exe..")

setTimeout(() => {
    console.log('Login exe....')
}, 2000);


console.log('complete exe')

// ex for drowback for asyn
let a=10
let b=0;
setTimeout(()=>{
    b=20;
},3000)

console.log(a+b);