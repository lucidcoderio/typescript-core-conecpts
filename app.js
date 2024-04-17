// basic types 
var userName;
userName = 'trp';
var userAge;
userAge = 51;
var isValid;
isValid = true;
// end basic types
// union type
var userId;
userId = 'abc';
userId = 123;
// end union type
// object
var user;
user = {
    name: "trp",
    age: 51,
    isAdmin: true,
    id: 12345
};
// end object
// array
var hobbies;
hobbies = ['Coding', 'Fishing', 'Mandolin'];
// end array
// array of objects
var users;
users = [
    {
        name: "trp",
        age: 51,
        isAdmin: true,
        id: 12345
    },
    {
        name: "trp",
        age: 51,
        isAdmin: true,
        id: '12345'
    }
];
// end array of objects
// functions
function add(a, b) {
    return a + b;
}
add(1, 2);
