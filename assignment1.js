// 1  reverse string

// console.log('---reverseName-----')
//  let firstName = "chinmay"
// let reverseName = ("");
//   for (let i=firstName.length-1;i>=0;i--){    
//     reverseName= reverseName+firstName[i]               //yamnihc
    
//  }
//  console.log(reverseName)

//2 //reverse only word from the sentence
//console.log('---reverseword-------')
// let sentence = "my new learning is javascript"
// let revSentence = sentence.split('').reverse().join('')
// let revSentence1= revSentence.split(' ').reverse().join(' ')             //ym wen gninrael si tpircsavaj
// console.log(revSentence1)
                                  


// 3  finding highest and lowest number from the array
// //input = [35,55,-500,66,77,88,234,5,0,66,88]
//  let input = [35,55,-500,66,77,88,234,5,0,66,88]
//  let highest=0;
//  for(let i=0;i<input.length;i++){
//      if (input[i]>highest){
//         highest = input[i]
//      }
//  }

//  console.log(highest)                        //234

 
// //lowest value from the  array
// let input1 = [35,55,-500,66,77,88,234,5,0,66,88]
// let lowest =0;
// for(let i=0;i<input1.length;i++){
//     if(input1[i]<lowest){
//         lowest = input1[i]
//     }
// }
// //  console.log(lowest)                      //-500




// 4  highest number from the given array
//  //Input =[[1,2,3],[33,44,55][55,77,343]]

//   let numbers = [[1,2,3],[33,44,55],[55,77,343]]
// let total = numbers.flat()                                   //bringing all in one single array 
//  console.log(total)                     //   [1,2,3,33,44,55,55,77,343]



 //highest number
//  let highest1 = 0;
//  for(let i=0;i<total.length;i++){
//      if(total[i]>highest1){
//          highest1=total[i]
     
//      }
// }
// console.log(highest1)                                   //343




//5 count number of vowels from the string

// console.log('-------vowels-----------')

// let Input2 = "I am new to javascript"

//  let vowels = ['a','e','i','o','u']

//  let count = 0;
// for(let i =  0;i<Input2.length;i++){
//     if(vowels.includes(Input2[i])){
//     count =count+1
//     }
// }
// console.log(count)              //6