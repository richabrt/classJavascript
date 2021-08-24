//  counting every character on the array

//  let country = ['Nepal','India','America']

// for(let i = 0;i<country.length;i++){
//      console.log(country[i].length)
//  }



//finding numner greater than 15
// let ag = [12,13,15,17,19,18]
// let grtThan15=[]
// for (let i=0;i<ag.length;i++){
//     if(ag[i]>15){
//         grtThan15.push(ag[i])
//     }
// }
// console.log(grtThan15)



//  let num = [22,20,19,24,23,18]
//  let  grtThan21=[]

// for(let u=0;u<num.length;u++){
//     if(num[u]>21){
//         grtThan21.push(num[u])               //error occured
//    }
// }
// console.log(grtThan21)


//number less than 
// let nuumm = [2,5,6,9,8,7]
// let lessThan7=[]
// for(let i=0;i<nuumm.length;i++){
//     if(nuumm[i]<7){
//         lessThan7.push(nuumm[i])
//     }
// }
// console.log(lessThan7)


// let nuummb=[100,200,300,400,500,600]
// let lessThan350=[]
// for(let i=0;i<nuummb.length;i++){
//     if(nuummb[i]<350){
//         lessThan350.push(nuummb[i])
//     }
// }
// console.log(lessThan350)



// let nums = [100,200,400,200,300,900,500,800]
// let grtThan200 =[]

// for (let i=0;i<nums.length;i++){
//     if(nums[i]>200){
//     grtThan200.push(nums[i])
//     }
// }
//     console.log(grtThan200)


//     let numm=[10,20,5,15,9,13]
//     let grtThan9=[]
//     for(let i=0;i<numm.length;i++){
//     if(numm[i]>9){
//         grtThan9.push(numm[i])
//     }

//         }
    
// console.log(grtThan9)


//  let nummm = [2000,2500,2100,2300,1900,1800]
//  let grtThan2100=[]
//  for(let i=0;i<nummm.length;i++){  
//         if(nummm[i]>2100){                               
//           grtThan2100.push(nummm[i])
//         } 
//  }
//  console.log(grtThan2100)



//  let numberr=[22,25,26,25,23,21]
// let grtThan21=[]
// for(let i=0;i<numberr.length;i++){
//     if(numberr[i]>grtThan21){
//         grtThan21.push(numberr[i])
//     }
// }
//  console.log(grtThan21)

//using map array method
let numberr=[22,25,26,25,23,21]

let kk = numberr.filter(function(el,index,arr){
  return el > 23
  
})
console.log(kk)




///calculating averages

//  let numbs = [14,16,19,21,33]
// let sum = 0

//  for (let i = 0;i < numbs.length ; i++){
//     sum = sum + numbs[i] 
// }
//  console.log(sum/numbs.length)


// let total = [200,300,400,500,600,700,1300]
// let suum= 0
// for(let i=0;i<total.length;i++){
//     suum = suum+total[i]

// }
// console.log(suum/total.length)


// console.log('totals')
// let totals=[250,357,424,678,796]
// summ=0
// for(let i=0;i<totals.length;i++){
//     summ=summ+totals[i]

// }
// console.log(summ/totals.length)

//maping--methods of Array--                 works with every elements of array
// console.log('using loop ')
  // let birthyear = [2000,2001,2002,2003]
// let ages = []
//  for(let i = 0;i<birthyear.length;i++){
//    let age = 2021 - birthyear[i]
//   ages.push(age)
// }

// console.log(ages)


//using map
// console.log('using map')

// let birthyear=[1991,2011,2020]
// let age2= birthyear.map(function(el,index,arr){
//     return 2021-el
// })

// console.log(age2)


// let birthyear = [2000,2001,2002,2003]
// console.log(birthyear.map((el,index,arr)=> 2021-el))




// let birthyears =[1981,1991,1971,1961]
// let agee=birthyears.map(function(el,index,arr){
//     return 2021-el
// })
// console.log(agee)


// let birthyearr=[1982,1952,1992]
// let ages = birthyearr.map(function(el,index,arr){
//     return 2021-el
// })

// console.log(ages)


// let agy =[20,21,31,15,19]
// let lessThan17=[]
// for(let i = 0;i<agy.length;i++){
//   if(agy[i]<17){
//   lessThan17.push(agy[i])
// }
// }
// console.log(lessThan17)


//  let nom = [5,15,20,25,5]
//  let summs = 0
//  for (let i=0;i<nom.length;i++){
//     summs =summs+nom[i]                     
//  }
//  console.log(summs/nom.length)


// // // names
// let namees=["shyam","Raam","Krishna"]
//  let nnn = namees.map(function(el){         
//      return `welcome ${el} !`
//  })
//  console.log(nnn)

 


