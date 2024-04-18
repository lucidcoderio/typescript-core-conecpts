// basic types 
let userName: string;

userName = 'trp';

let userAge: number;

userAge = 51;

let isValid: boolean;

isValid = true;
// end basic types

// union type
let userId: string | number;

userId = 'abc';
userId = 123;
// end union type

// object

type StringOrNum = string|number;

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: StringOrNum;
}

let user: User;

user = {
    name: "trp",
    age: 51,
    isAdmin: true,
    id: 12345
}
// end object

// array
let hobbies: Array<string>;

hobbies = ['Coding', 'Fishing', 'Mandolin'];

// end array

// array of objects
let users: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: number | string;
}[]

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

]
// end array of objects

// functions

type addFn = (a:number, b:number) => number;

function add(a: number, b: number) : number{
    return a + b;
}

add(1,2);

function calculate(a: number, b:number, calcFunc: addFn ) {
    calcFunc(a,b);
}

calculate(1,2,add);

// end functions

// interfaces

interface Credentials {
    password: string;
    email: string;
}

let creds: Credentials;

creds = {
    password: 'test',
    email: 'test@example.com'
}

class AuthCredentials implements Credentials {
    password: 'test';
    email: 'test@example.com';
}

function login(credentials: Credentials) {

}

login(creds);
login(new AuthCredentials());

// end interfaces

// merging types

type Admin = {
    permissions: string[];
}
type AppUser = {
    userName: string;
}
type AppAdmin = Admin & AppUser;

let appAdmin: AppAdmin;

appAdmin = {
    permissions: ['login'],
    userName: 'test'
}

// end merging types


// literal types
type Role = 'admin' | 'user';
let role: Role;
role = 'admin';
role = 'user';

// end literal types

// generics

let roles: Array<Role>;
roles = ['admin', 'user'];

type DataStorage<T> = {
    storage: T[]
    add: (data: T) => void
};

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data)
    }
}

// end generics