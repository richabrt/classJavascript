// //class---user defined datatype---creating an object on template is class----
// //outside the class 
// class person {
// lastName = null
// ssn = null
// age = null
// language = null

// }


// // let sneha =new person()

// // sneha.language = 'nepali'
// // sneha.ssn = 21111
// // sneha.age = 20
// // sneha.lastName = 'Sharma'

// // //console.log(sneha)


// // //fetching the Value for an object---usingdot notation

// // //console.log(sneha.lastName)
// // // console.log(sneha["lastName"])

// // //console.log(sneha.age)
// // //console.log(sneha['ssn'])

// // //updating the values from the object

// // // sneha.age = 21
// // // console.log(sneha.age)


// // // //adding values
// // // // sneha.country = 'Nepal'

// // // console.log(sneha['country'])

// // //deleting on object                              //error
// // //dele sneha.language


// //2nd ways --- setting the properties at the time of object creation using constructor-

// //class person2{
//     //constructor( fn,ln,age,lan,coun){
// //    this.fulName = fn
// //    this.lastName = ln
// //    this.age = age
// //    this.language = lan
// //    this.country= coun
// //     }
// // }

// // let Sneha2 = new person2('sneha','Sharmaa',20,'Nepali','Nepal')
// // console.log(Sneha2)


// // // Using constructor again

// // class fruits{
// //     constructor(name,color,taste){
// //         this.name = name
// //         this.color = color
// //         this.taste = taste
// //     }
// // }
// // let fruit1 = new fruits('apple','red','good')


// //getting an average age of three objects below;
// // let ram0=new person("Ram","Sharma",25,"Biratnagar","Nepal")
// // let ram2=new person("Sham","Shaarma",15,"Delhi","India")
// // let ram3=new person("Hary","Sharrma",38,"virginia","USA")

// // console.log('---average age----')
// // let ca =[ram0,ram2,ram3]
// // let av= ca.reduce(function(acc,el){
// //     return acc + el.age
// // },0)

// // // console.log(av/ca.length)

// // //finding 'Biratnagar'from the object
// // let ram0=new person("Ram","Sharma",25,"Biratnagar","Nepal")
// // let ram2=new person("Sham","Shaarma",15,"Delhi","India")
// // let ram3=new person("Hary","Sharrma",38,"virginia","USA")

// // console.log('----city---')
// // let ct = [ram0,ram2,ram3]
// // let nct = ct.find(function(el){
// // return el.city=='Biratnagar'
// // })

// // console.log(nct)


// //finding'virginia'from the given object
// // let ram0=new person("Ram","Sharma",25,"Biratnagar","Nepal")
// // let ram2=new person("Sham","Shaarma",15,"Delhi","India")
// // let ram3=new person("Hary","Sharrma",38,"virginia","USA")

// // console.log('---virginia---')
// // let cc = [ram0,ram2,ram3]
// // let newcc= cc.find(function(el){
// //     return el.city=='virginia'
// // })
// // console.log(newcc)

 
// // // finding delhi from the given object
// // let ram0=new person("Ram","Sharma",25,"Biratnagar","Nepal")
// // let ram2=new person("Sham","Shaarma",15,"Delhi","India")
// // let ram3=new person("Hary","Sharrma",38,"virginia","USA")

// // let dd = [ram0,ram2,ram3]
// // let dl = dd.find(function(el,index,arr){       //no output displayed
// //   return el.city=='Delhi'
// // })
// //     console.log(dl)

//     //third ways for the object creation using function

//     class persona{
//         firstName0= null
//         LastName0=null
//         RollNu0=null
//         Age0=null
     
//      setAge(ag){
//          this.age0=ag
//      }

//         //  setfirstName0(fn){
//         //      this.firstName0=fn                             //should work more on set function----------
//         //  }
//         }


//          let sneha0=new persona()
//          sneha0.setAge(20)
//          //sneha0=setfirstName0('sita')

    
 


    
