// basic types 
let userName: string

userName = 'trp'

let userAge: number

userAge = 51

let isValid: boolean

isValid = true
// end basic types

// union type
let userId: string | number

userId = 'abc'
userId = 123
// end union type

// object
let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: number | string
};

user = {
    name: "trp",
    age: 51,
    isAdmin: true,
    id: 12345
}
// end object

// array
let hobbies: Array<string>;

hobbies = ['Coding', 'Fishing', 'Mandolin']

// end array

// array of objects
let users: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: number | string
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
function add(a: number, b: number) : number{
    return a + b
}

add(1,2)


