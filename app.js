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
function add(a, b) {
    return a + b;
}
add(1, 2);
function calculate(a, b, calcFunc) {
    calcFunc(a, b);
}
calculate(1, 2, add);
var creds;
creds = {
    password: 'test',
    email: 'test@example.com'
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) {
}
login(creds);
login(new AuthCredentials());
var appAdmin;
appAdmin = {
    permissions: ['login'],
    userName: 'test'
};
var role;
role = 'admin';
role = 'user';
// end literal types
// generics
var roles;
roles = ['admin', 'user'];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    }
};
// end generics
