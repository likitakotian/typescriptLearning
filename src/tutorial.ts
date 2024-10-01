//let name:string = "ShakeAndBike" mentioning type is not neccesarry 
let name = "ShakeAndBike"
name = 'this is string value'
name = name.toUpperCase();
//name = 10;
console.log(name);

//let amount: number = 10;
let amount = 10;
amount = 100 - 10;
//amount = "pants"

//let isAwsome:boolean = true
let isAwsome = true
isAwsome = false
//isAwsome = "true"

//union type
let tax: number | string = 10
tax = '$10'

//like enum
let status: 'pending' | 'done' | 'started' = "pending"
status = 'done'
//status = "somethign";

let notSure: any = 10;
notSure = "something";
notSure = false

const books = ['the girl who played with fire', 'all she left behind', 'the owe', 'all light you cant see'];
let foundBook:string|undefined;
for (let book of books) {
    if (book === 'the owe') {
        foundBook = book
        console.log(foundBook.length);
        break;
    }
}
console.log(foundBook)
//foundBook = 10
