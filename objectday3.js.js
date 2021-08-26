//concat---adding two diffrent arrays into single one
// let aa = [20,30,40,50]
// let bb = [60,70,80,90]
// let ab = aa.concat(bb)
// // console.log(ab)
// let cc= bb.concat(aa)
// console.log(cc)



//slice  ----

//  let namees = ['shilpa','Sneha','Sony']
// console.log(namees.slice(-3))


// let nm = ['aarav','arthav','rohil']
//console.log(nm.slice(-1))

// console.log('---newslice-----')
// let nmo = ['aarav','arthav','rohil','avyansh','reevan']
// console.log(nmo.slice(0,5))



// //include--used on string or arrays---can be used on arrays whether certain values exist or not---if it does exist we get the boolean response as true--

// let drinks = ['coke','fanta','sprite','Dr.pepper']
// // console.log(drinks.includes('dew'))   //false
// console.log(drinks.splice(1,2,'ac','bc','cd','dc'))
// console.log(drinks)

// let fruits = ['apple','banana','grapes','cherry']
//console.log(fruits.includes('Pineapple'))
// console.log(fruits.includes('apple'))


//counting m n o and p on the array
// console.log('------string count------')
// let string = 'Java is a programming language'
// let alphas = ['m','n','o','p']
// let count =0
// for(let i=0;i<string.length;i++){                           //error --how can we find the specific letters on both string and arrays
//     if(alphas.includes(string[i])){
//         count=count+1
//     }
// }

// console.log(count)

//finding a,e and rfrom the given array
// let mount = ['Everest','Makalu','Mansalu','ganesh']
// let mm = ['a','e','r']
// let count = 0;
// for(let i=0;i<mount.length;i++){
//     if(mm.includes(mount[i])){
//         count=count+1                                    //error

//     }
// }

// console.log(count)

//join
// let greeting = ['Namaste','How','are','you']
// greeting = [1,2,3,4,5]
// console.log(greeting.join('  '))
// // console.log(greeting.join(' '))//Namaste How are you


// console.log('---joinname----')
// let fullName = ['hello', 'richa','riju','usha','ruja']

// console.log(fullName.join(' '))
