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


//array
let prices:number[] = [20,30,40,44]
//prices.push("hello")//Argument of type 'string' is not assignable to parameter of type 'number'
//let prices:number[] = [20,30,40,44, 'hello']

//let random:[] = ["new array"]
//Type '[string]' is not assignable to type '[]'.Source has 1 element(s) but target allows only 0.

let random:any[] =[20,30,40,44, 'hello']
let names =['peter','mack',1];
let array: (string|boolean)[]=["hello",true]


let car:{brand:string, year:number} = {brand:"benz",year:2020};
//let car:{brnad:string, year:number} = {brnad:"benz",year:2020, color:'blue'};
car.brand = 'tempo'
car.year= 2024

let book1= {name:"new book", cost:202}
let pen= {name:"new book", cost:202, color:'black'}
let item= {name:"new book", cost:202}

let newType:{readonly name:string, cost:number, color?:string}[] = [book1,pen,item]
//newType[0].name = "test"//annot assign to 'name' because it is a read-only property.

let bike:{brand:string, year:number}= {brand:'yamaha', year:2023}


