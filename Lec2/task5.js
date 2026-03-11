var x = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
function f(){
    var y={}
    for(var i=0 ; i<x.length ; i++){
        var a = x[i]
        y[a[0]] = a[1]
    }
    return y
}
console.log(f())