// setTimeout(function f(){
//     console.log('HIIIIIIIIII')
// },5000)

// setInterval(function f(){
//     console.log('HIIIIIIIIII')
// },5000)

// function ut(){
//     const times = new Date().toLocaleTimeString()
//     console.log(times)
// }
// ut()
// setInterval(ut , 1000)

function main(cb){
    console.log('operation 1')
    setTimeout(()=>{
        cb('operation end')
    },2000)
    console.log('operation 2')
}

function fun(result){
    console.log('Final answer',result)
}

main(fun)

