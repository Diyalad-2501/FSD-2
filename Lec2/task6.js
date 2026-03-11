var x = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']

function f(){
    var y = {}
    var l = x.length-1
    y[x[0]] = x[l]
    return y
}
console.log(f())