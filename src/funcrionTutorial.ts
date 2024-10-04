function sayHi(name:string){
    console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi("john")
//sayHi("abc","efc")
//sayHi(3)

function calculateDiscount(price: number):number{
    // if(hasDiscount){
    //     return 'Dispcount applied';
    // }
    return price * 0.10;
}

const finalPrice = calculateDiscount(189);
console.log(`after discount ${finalPrice}`);

function isValideName(valideName:string, names:string[]):boolean{
    for(let name of names)
    {
        if(name === valideName){
            return true;
        }
    }
    return false;
}
let name:string = 'peter'
let namesArray:string[] =['peter','mack','ninm'];
const isNamePresent:boolean = isValideName(name,namesArray)

const nameChanllenge: string[] = ['peter','mack','ninm']
function isNameInList(name:string):boolean{
    return nameChanllenge.includes(name);
}


//optional param

function calculatePrise(price:number, discount?: number){
    return  price - (discount||0)
    //discount or 0
}

let priseAfterDiscount = calculateDiscount(100-10)
priseAfterDiscount = calculateDiscount(100)

//default param 

function calculateScore( initialScore : number , penalty: number=10):number{
    return initialScore -penalty;
}

let scoreAfterPenalty = calculateScore(300,10);
let scoreBefore = calculateScore(200)

//rest paramter

function sum(message:string, ...numbers:number[]):string {
const doubled = numbers.map((num:number)=>num*2) 
console.log(doubled);
let total = numbers.reduce((previous,current)=>{
    return previous+current;
},0);
return `${message}${total}`

}

let result = sum("total is:",1,2,4,5,6,7)
console.log(result);


//return void
 function logMessage(message: string):void{
    console.log(message);
 }

 logMessage("Hello liki")

 //challenge 2
 //type gaurd -->typeof 
 function processInput(input:string|number): number|string{
    if(typeof input === 'number'){
        let value = input * 2;
        return value;
    }else {
        let result  = input.toUpperCase()
        return result;
    }
 }


 //object as a param

 function createStudents(student:{id:number, name:string}):void{
    console.log(`wellcome to the course ${student.name} and your id is ${student.id}`);
 }
 let studentOne = {
    id: 1,
    name: "suji"
 }
 createStudents(studentOne);
 createStudents({id:2,name:"kjjkj"})

 //challenge 3
 function processData(input:string|number , config:{reverse?:boolean}={reverse:false}):number|string{
    if(typeof input === 'number'){
        return input*input
    } else  {
        return input.toUpperCase().split('').reverse().join();
    }

 }

 