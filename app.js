var cl = console.log;
// Tuples
// RollNo, RollName, Can_see_other_candidate, can_ see_ companies
// candidate >> 1, candidate, false, true
// Admin >> 2,Admin, true, false
// Recruiter >> 3, Recruiter, true, true
var person;
person = {
    fname: 'Jhon',
    lname: 'Doe',
    age: 20,
    hobbies: ['Reading', 'writing', 21],
    child: {
        fname: "om",
        lname: "pawar",
        age: 15
    },
    Role: [1, 'candidate', false, true]
};
cl(person.Role);
// person.Role.push('can Read');
// person.Role.unshift('can Read');
// person.Role[5]= 'can add'  // length not increase
cl(person.Role);
// Enum 
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["candidate"] = 1] = "candidate";
    Role[Role["Recruiter"] = 2] = "Recruiter";
})(Role || (Role = {}));
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Yellow"] = 1] = "Yellow";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
var cand1 = {
    fname: 'Tuc',
    lname: 'Ultimate',
    Email: ' tuc@gmail.com',
    Usertype: Role.candidate,
    UserNo: 1,
    colorCode: color.Blue
};
if (cand1.Usertype === Role.candidate) {
    cl('you can create enum');
}
else {
    cl('you can login with another id');
}
//  if(cand1.Usertype === Role.Admin){
//     cl('you can create enum')
//  }else{
//     cl('you can login with another id')
//  } 
