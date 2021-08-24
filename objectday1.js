
// //object------defined on curly brackets--holds properties and value,it doesnot show the value by index
// //ways to retrieve value from the object
// //dot notation
                                                                             //


// //retrieving value from the object
// // let personnl= ['sneha','sharma', 16, 1]

//  let person = {
//  firstName:"Sneha",
//  LastName:"Sharma",
// age:16,
// rollno:1

//  }

// // console.log(personna.Name)
//  console.log(personna['firstName'])


//  let place = {
//      country:"Nepal",
//      mountain:"MtEverest",
//      height:8848
//  }


//  console.log(place.country)
//   console.log(place.mountain)
//  console.log(place.height)
// console.log(place.country)


//   console.log(place["country"])
  // console.log(place["height"])
  // console.log(place["mountain"])


  // let phone ={
  //   nameee: "apple",
  //   color : "Grey",
  //   memory : 128

  // }

// console.log(phone.nameee)
// console.log(phone["nameee"])

//  console.log(phone.memory)
// console.log(phone["memory"])


//updating value inside the object

// let person = {
//     firstName:"Sneha",
//     LastName:"Sharma",
//     age:16,
//     rollno:1
  
//   }
  // person.firstName = "Sara"
  // console.log(person.firstName)

  // person.age = 20
  // console.log(person['age'])



  //add the property----adding the value

// person.language ='Nepali'
// console.log(person)
// console.log(person['language'])

// person.language = 'Newari'
// console.log(person)


//deleting value

// delete (person.language)
// console.log(person)


//printing all key value using loop

// for(let xx in person){
//   console.log(xx,person[xx])           //getting values and property both inside the array
// }
// console.log(xx)  /// prints only properties


//


// let studentss=[
//   { 
//  firstName:"Shilpa",
//  lastName :"Sharma",
//  age: 20
//   },
 
//   {
//   firstName:"Soniya",
//   lastName :"Sharmaa",
//   age: 23
 
//   },
 
 
//  {
//   firstName:"Sarah",
//   lastName :"Shaarma",
//   age: 21
//  }
 
//  ]


// // console.log(studentss[1].age)
// // console.log(studentss[2].firstName)



// // naming every studentss using loop method
// // for(let i=0;i<studentss.length;i++){
// // console.log(studentss[i].firstName)
// // }

// // for(let i=0;i<studentss.length;i++){
// //   console.log(studentss[i].lastName)

// // }



// // for(let i=0;i<studentss.length;i++){
// //   console.log(studentss[i].age)
// // }


// //printing every values using object

// // for(let i=0;i<studentss.length;i++){
// // let obj= studentss[i]
// // for(let xx in obj){
// //   console.log(xx,obj[xx])
// // }
// // }


//practice

let car=[
 {
 Nameee: 'Tesla',
 Color: 'Black',
 Year: 2020
  },

{
Nameee :'BMW',
 Color: 'White',
 Year: 2018
},

{
  Nameee :'Honda',
 Color: 'Grey',
 Year: 2019
}
 ]

// console.log(car[1].Nameee)

// console.log(car[0].Year)

// for(let xxx in car){
//   console.log(xxx,car[xxx])
// }

// for(let xxx in car){
//   console.log(xxx,car[xxx])
// }

// for(let i=0;i<car.length;i++){
// let objj=car[i]
// for(let xxx in objj ){
//   console.log(xxx,objj[xxx])
// }
// }


// for(let xx in car){
//   console.log(xx,car[xx])
// }

// for(let i=0;i<car.length;i++){
//   let obj = car[i]
//   for(let xx in obj){
//     console.log(xx,obj[xx])
//   }
// }

//  for(let xx in car){
//   console.log(xx,car[xx])
//  }



// for(let i = 0;i<car.length;i++){
//   let obj=car[i]
//   for(let xx in obj){
//     console.log(xx,obj[xx])
//   }
// }