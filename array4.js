// //using loop
// let birthyear = [1991,1981,1971,1961]
// let age = []
// for(let i=0;i<birthyear.length;i++){
//     let ages=2021-birthyear[i]
//         age.push(ages)
        
//     }

// console.log(age)

// //using map

// let birrthyear = [1910,1911,1921,1931]
// let agee = birrthyear.map(function(el,index,arr){
//     return 2021-el
// })
// console.log(agee)

// // using map  arrow method

// let birtthyear = [1989,1979,2012]
// console.log(birtthyear.map((el,index,arr)=> 2021-el))


//using loop

// let birthyear = [1991,1981,1971,1961]
// let ageis=[]
//     for(let i=0;i>birthyear.length;i++){
//         let agee=2021-birthyear[i]    
//         ageis.push[agee]
//     }
//     console.log(ageis)

//using map

// let year=[2069,2067]
// let gg = year.map(function(el,index,arr){
//     return 2078-el
// }
// )
// console.log(gg)

// //using arrow function
// let yearr=[2021,2016,2048,2054,2048]
// console.log(yearr.map((el,index,arr)=> 2078-el))



//filter -- works with the every elements but returns the filter value.N

// names= ['reeecha','kiran','pujan','pooja']

// let nnnn= names.filter(function(el,index,arr){
//     return el.length>6
// })
// console.log(nnnn)

//using arrow function
// names= ['reeecha','kiran','pujan','pooja']
// console.log(names.filter((el,index,arr) => el.length>5))


// // taal = ['fewa','rara','begnas']
// let tt = taal.filter(function(el,index,arr){
//     return el.length>5
// })

// console.log(tt)

//using arrow function
// console.log('----taal----')
// let taal = ['fewa','rara','begnas']
// console.log(taal.filter((el,index,arr)=> el.length>5))

//finding odd values 
// let values =[ 29,38,67,45,93]
// let vv = values.filter((el)=>el%2 !==0)
// console.log(vv)


//reduce
//   console.log('---stationery---')   
//  stationery = ['pen','pencil','eraser']
// let st = stationery.reduce(function(acc,el,index,arr){
    
//     return acc+el.length
//  },0)
//  console.log(st/stationery.length)   //


// console.log('---computers---')   
//  computers = ['Dell','Mac','Samsung','Acer']
//  let cm = computers.reduce(function(acc,el,index,arr){
    
//     return acc+el.length
// },0)
//  console.log(cm/computers.length)   //4.5  //work more on reduce




// // let transactions = [1000,2000,-4000,-3000,6000]
// // let deposit = transactions.filter(function(el){
// //     return el > 0
// // }).reduce(function (acc,el){
// //     return acc + el
// // },0)

// // console.log(deposit)

// let transactionss = [-1000,-2000,6000,7000,-100]
// let withdrawal = transactionss.filter(function(el){
//     return el < 0
// }).reduce(function (acc,el){
//     return acc + el
// },0)

// console.log(withdrawal)