// let studentss=[
//  { 
// firstName:"Sneha",
// lastName :"Sharma",
// skills: ["python","c","python"]
//  },

//  {
//  firstName:"Sara",
//  lastName :"Sharmaa",
//  skills: ["python","c","js"]

//  },


// {
//  firstName:"Sony",
//  lastName :"Shaarma",
//  skills: ["python3","c++","js"]

// }
// ]


// // console.log(studentss[1].firstName)
// console.log(studentss[2].firstName)

// console.log(studentss[1].skills)

// console.log(studentss[0].skills.length)

// // printing every values for skills
// for(let i=0;i<studentss.length;i++){
//     console.log(studentss[i].skills)
// }


//  for(let xx in studentss){
//      console.log(xx,studentss[xx])

//  }

// //printing every values on the object 

// for(let i=0;i<studentss.length;i++){
// let obj = studentss[i] 
// for (let xx in obj){
//     console.log(xx,obj[xx])
// }
// }


// //printing every values on skills
// for(let i=0;i<studentss.length;i++){
//     console.log(studentss[i].skills)
// }

//printing name and skills in the array

//  for(let i=0;i<studentss.length;i++){
//     console.log(studentss[i].firstName,studentss[i].skills)
// }



// //find----gives the first occurence--returns one element
// let oc = studentss.find(function(el,index,arr){

// return el.firstName =='Sara'
// })
// console.log(oc)


//finding index
// let oc = studentss.findIndex(function(el,index,arr){

//     return el.firstName =='Sara'
//     })
//     console.log(oc)
    

// let drinks = ['coke','fanta','sprite','drpepper']


// let ss = drinks.findIndex(function(el,index,arr){                     //getting same results//<> error

//     return el < 2
//         })
//     console.log(ss)
    
//some

// let nos = [20,30,40,50]
// let ns = nos.some(function(el,index,arr){
// return el >35
// })

// console.log(ns)

// every

// let nos1 = [21,31,41,51]
// let ns1 = nos1.every(function(el,index,arr){
// return el<10
// })
// console.log(ns1)                                                 for both its true??


//foreach ---doesnot return anything when sets on variable//
// console.log('------------FOREACH')
// let drinks = ['Coke','Fanta','Sprite','Dr.pepper']


//  drinks.forEach(function(el,index,arr){
// console.log(`Do you want ${el}?`)
// }
// )


//SORT
// console.log('----sort------')            
// let d = ['Coke','Fanta','Sprite','pepper']      
//  d.sort()                                                        //didnt sort
// console.log(d)


//FLAT-making all arrays into the single array 

// let numbers = [[10,20,30],[11,224,33],[23,44,55]]
// console.log(numbers[1][1])
// console.log(numbers[2][1])
// console.log(numbers[2][0])


//printing highest numbers from the complete array

// let nm=numbers.flat()
//  console.log(nm)


 //Fill-----to fill with particular value
//  let nums = [10,20,30,40,50]
// console.log(nums.fill('a',4,nums.length))





//printing highest numbers from the complete array

//  let nos = [[10,20,30],[11,224,33],[23,44,55]]
//  let nm1 = nos.flat()                                           //first bringing them altogether in one arary
//  console.log(nm1)
// console.log('--------highest-----')
// let hh =0
// for(let i =0;i<nm1.length;i++){
//     if (nm1[i]>hh){
//         hh=nm1[i]
//     }
// }
// console.log(hh)



























