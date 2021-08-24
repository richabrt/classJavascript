function calculator(a,b) {
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)

}

calculator(50,40)

console.log('-------------')
calculator(5,-2)  //calling the function

console.log('--------')
calculator(390,250)  //calling the function


console.log('------')
calculator(0,-1)    //calling the function

// console.log('--------------------')
calculator(1000,2000)   

// console.log('-------')
calculator(-3,-2)


console.log('-------------')
calculator(40,50)
console.log('------------')
calculator(30,40)


calculator(5,0)
calculator(1,2)

    

function Add (a,b){
    console.log(a+b)
}
Add (10,10)

function Sub(x,y){
    console.log(x-y)
}

console.log('-----------')
 Sub (20,5)
 
console.log('@@@@@@@@@@@')
Sub(30,40)


function Mul(p,r){
    console.log(p*r)
}

console.log('$$$$$$$$$$')
Mul(9,5)


function Div(g,h){
    
    console.log(g/h)

}

console.log('------------')
Div(10,10)

function Div(p,r){
    console.log(p/r)
}
console.log('@@@@@@@@@@@')
Div(1000,50)

//functions without parameter and no return type(answer didnt print)

function cal(){
    console.log(2+3)
}
cal()
cal()
 


//introducing parameters to find out the differences(no return type)

function cal(x,y){
    console.log(x+y)
}
cal(10,20)


function cal(p,r){
    console.log(p-r)

}
cal(2,-5)

//function with parameter and return type
function cal(p,r){
    return p + r
}

let a = cal(2,3)
console.log(a)
console.log(a+10)
console.log(a-5)


function add (a,b){
    return a + b
}
 let c = add(1,2)
console.log(c)
console.log(c+100)
console.log(c*25)

function sub(x,y){
    console.log (x-y)
}
sub(3,2)
console.log('------------')

function mult(a,b){
  return a * b

}
let r = mult(2,4)
console.log(r)


function div(q,r){
    return q / r
}
let t = (10,2)
console.log(t)
console.log(t*9)
console.log(t-5)


function cal (v,w){
    console.log(v + w)
}
cal(4,5)

// function cal (y,z){
//     return y * z 
// }
// let q = cal(20,5)
// console.log(q)
// console.log(q+10)
// console.log(q+20)