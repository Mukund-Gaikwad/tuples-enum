let cl = console.log;

// Tuples >> A tuple is an array with a fixed number of elements whose types are known.
        // A tuple is a new data type which includes set of values which is having different data type 
        // The number of element in the tupel is fixed i.e.its having fix length of array.

    let skills : [string, number];  // here we create a tupel to represent a value as a pair of string and number
    skills = ['Typescript', 5];  // here order of values in tupel is imp.

    // skills = [5, 'Typescript'] //error bcoz order is important
    // if you change the order of values of the skills tupel to [5,'Typescript] it gives error

    let student :[number,string,number,boolean];
    student = [1,'Mahesh',10,true];
    // student = [1,'Mahesh','jadhav',true];// error



// RollNo, RollName, Can_see_other_candidate, can_ see_ companies
// candidate >> 1, candidate, false, true
// Admin >> 2,Admin, true, false
// Recruiter >> 3, Recruiter, true, true

let person : {
    fname : string,
    lname : string,
    age : number,
    hobbies : ( string | number)[], 
    child :{
        fname : string,
        lname : string,
        age : number,
    },
    Role : [number,string, boolean,boolean];
}
person = {
    fname : 'Jhon',
    lname : 'Doe',
    age : 20,
    hobbies : ['Reading', 'writing',21], 
    child :{
        fname : "om",
        lname : "pawar",
        age : 15
    },
    Role : [1,'candidate',false,true]
}

cl(person.Role);
// person.Role.push('can Read');
// person.Role.unshift('can Read');
// person.Role[5]= 'can add'  // length not increase

cl(person.Role);


// Enum >> 
        // An Enum is a group of named constant values./ A typescript enum is a group of constant values.
        // Enum stands for enumerated type.
    // where to use >> when you have a small set of fixed values that are closely related and known at compile time.
    // steps to define enum
         //  >> first use enum keyword followed by the name of the enum 
         // >> then define constant values for the enum  
    // syntax >> enum name {constant1, constant2,.....}; // here const1,const2 are the member of the enum

enum Role {Admin, candidate, Recruiter}
enum color{Red,Yellow,Blue}

 let cand1 ={
    fname : 'Tuc',
    lname : 'Ultimate',
    Email :' tuc@gmail.com',
    Usertype : Role.candidate,
    UserNo : 1,
    colorCode : color.Blue,
 }

 if(cand1.Usertype === Role.candidate){
    cl('you can create enum')
 }else{
    cl('you can login with another id')
 } 

//  if(cand1.Usertype === Role.Admin){
//     cl('you can create enum')
//  }else{
//     cl('you can login with another id')
//  } 