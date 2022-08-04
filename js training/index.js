//object
/*let person = {
    name : "Akash",
    age : 21,
    gender : "male",
    city : "thanjvur",

    address : {
        street : "Railway street",
        town : "Ammapet"
    }
}
console.log(person.city);
*/

//Array
/*
let colors =["red","green","yellow"];
 colors.push("orange");
console.log(colors.length);
*/

//Functions
/*
function formUser(name,age){

    let result = "Hi i am " + name +"  " + age + " learning JavaScript";
    console.log(result);

}
formUser("Akash",21);
formUser("Asik",20);
*/

//Assignment operator
/*
let x = 5;

x %= 2;
console.log(x);
*/

// Comparison Operator
/*
let x =5;
 console.log(x < 4); //less than
 console.log(x <= 10); //less than or equal
console.log(x > 6);//greater than
console.log(x >=8);//greater than or equal
*/

//equality operator
/*
x=5;
console.log(x === 5);
console.log(x !== 4);
*/
/*
x = 10;
console.log(x++);
console.log(x);
console.log(--x);
console.log(x);
*/
/*
console.log( 2 == 2);
console.log('2' == 2);
*/
//ternary operaor
/*
let a = 3;
let b = 5;

let result = a > b ? " A is big" : "B is big";
console.log(result);
*/
/*
let userName = 0;  
let  = defaultName = "Akkidya";
let name = userName || defaultName;
console.log(name);
*/
//if else
/*
let a =3;
let b = 2;
let c= 6;

if(a>b && a>c)
    console.log("A is big");
else if(b>a)
    console.log("B is big");
else 
        console.log("c is big");

let hour = new Date().getHours();
if( hour >=0 && hour <=12)
    console.log("Good Morning");
    else if(hour >=12 && hour <=18)
     console.log("Good Afternoon");
     else
     console.log("Good Evening");
*/
//switch case
/*
let percentage = 65;

switch(true){
    case  percentage >= 75 :
        {
        console.log("first class with distinction");
        break;
        }
    case percentage < 75 && percentage > 60 :
        {
        console.log("first class");
        break;
        }
        case percentage < 60 && percentage >40 :
        {
        console.log("second class");
         break;
    }
        default:
        console.log("FAIL");
}
*/
/*
let amt = 80000;

switch(true){
    case amt > 10000 && amt < 60000:
        {
            console.log("Buy Android Mobile");
            break;
        }
        case amt >60000 :
            {
                console.log("Buy Iphone mobile");
                break;
            }
            default:
                {
                    console.log("No mobiles");
                }
}
*/
//loops
//for loop
/*
for (let i =10; i>=1; i--){
    if(i%2==0)
    console.log(i);
}
*/
//while loop
/*
let i = 1;
while (i <=15)
{
    if(i%2==0)
    {
    console.log("While number" + i);
    }
    i++;
}
 
do{
    if(i%2==0)
    {
    console.log("Do While Numbers" + i);
    }
    i++;
}
while(i <= 15);
*/
//for in
/*
let fruits = {
    name : "Apple",
    price : 100,
    stack : "full"  
};

for(let key in fruits){
    console.log(key + ":" ,fruits[key]);
}

let cars = ["toyoto","baleno","swift"];
   for(let key in cars){
    console.log(cars[key]);
   }
*/
//for of
/*
let colors = ["red","blue","green"];
for(color of colors)
{
    console.log( "colour :" + color);
} 
*/
//oop object-funcion
/*
let person = {
    name : "Akash",
    age : 21,
    interest : ["Reading books,Writing Stories"],
    address : {
        street : "Railway Road",
        town : "Ammapet",
      },
      greeting:function(){
        let msg = `hello i am ${this.name},i love ${this.interest}`;
        console.log(msg);
          }
};
person.greeting();
*/
//factory function

/*function createPerson(name,age){
   return {
    name : name,
    age,
    greeting() { 
        let msg = `hello i am ${this.name}, ${this.age} years old`;
        console.log(msg);
    }
};
}
let akash = createPerson("Akkidya",21);
let diya = createPerson("Divya",18);
akash.greeting();
diya.greeting();
*/
//constructor function
/*
function Parent(father,mother){
    this.father = "Suresh";
    this.mother = "Durga";
    this.greeting = function(){
        console.log(`my parent name is ${this.father} and ${this.mother}`);
     
    }
}
let parent = new Parent();
parent.greeting();
*/
//Reference type 
/*
let shopDetails = {

    unit : 20
};

function updateDetails(shop){
    shop = shopDetails.unit++;
}
updateDetails(shopDetails);
console.log("Updated" , shopDetails);
*/
//cloning objects
/* 
let user = {
    name : "akash",
    getFullName(){
            console.log(name);
    }
};
 
let newUser = {
   ...user
};
console.log(newUser); or
let newUser +{};
for (let key in user){
    newUser[key] = user[key];
} or
let newUser = Object.assign({},user);
*/
//Inbuild Object Math
/*
let mark = [85,98,56,67];

let result = Math.min(...mark);
console.log("maximum marks : " + result);
*/
//Adding and Finding elemens in array
/* 
let fruits = ["Apple","Orange","Graphes"];
   fruits.splice(2,0,"guava","watermelon");
   console.log(fruits.includes("banana"));
   */
  //finding element in array in reference type using arrow function 
  /*
  let vegetable = [
    {id : 1, name : "Onion", stack : "100kg"},
    {id : 2, name : "Tomato", stack : "100kg"},
    {id : 3, name : "Potato", stack : "100kg"},
    {id : 4, name : "Brinjal", stack : "100kg"}

  ]

  let stack = vegetable.find((order) => order.id === 3 )
  console.log(stack);
  */
//deleting element in array
/*
  const books = ["comics","thriller","sportive"];
  books.splice(1,2);
   console.log(books);
  */
 //combining arrays using spread operator
 /*
 const food_material =["vegetables","cookers","plasters"];
 const addition_material = [{rescue : "salt", material : "sugar"}];

 let food = [...food_material,...addition_material];
 console.log(food);
 */
//for each using arrow function
/*
 const dailyRoutine = ["wake up","Eat","Sleep"];

dailyRoutine.forEach( (routine,routineIndex) =>console.log(routineIndex,routine,) );
*/ 
//joining and spliting the arrays
/*
let userName = "tamil nadu";
let splitName = userName.split(" ");
let joinName = splitName.join("_");
console.log(joinName);
*/ 
//sorting an javascript array
/*
const student =[
    {id : 1, studentName:"Akash"},
    {id : 2, studentName:"akilesh"},
    {id : 3, studentName:"Akara"},
];

let attendance = student.sort( (a,b) =>
{
   nameA = a.studentName.toLowerCase();
   nameB = b.studentName.toLowerCase();

   if (nameA < nameB)
     return -1;
else if(nameA > nameB)
      return 1;
      else
        return 0;
})
for (let key of attendance)
  console.log(key);
*/
//filter  and find in array
/*
let stock_list = [
    { id :1, items : "Marie" ,instock : 45 },
    { id :2, items : "Butter" ,instock : 50 },
    { id :3, items : "Choco" ,instock : 55 },
];

let stock = stock_list.filter(value => value.instock >=50 )
    console.log(stock);
    */
//Mapping
/*
const student =[
    {id : 1, firstname : "Akash", lastname :"divya"},
    {id : 2, firstname : "divya", lastname :"Akash"},
    {id : 3, firstname : "a", lastname :"d"},
];

let mapping = student.map(function(val){
     let fullname = [val.firstname,val.lastname].join(" ");
     let obj = {id:val.id,fullname}
     return obj;
});
console.log(mapping);
*/
//combine array
/*
let market = [
    {id : 1 , material : "vegetable" ,stock : 2500, cost : 250},
    {id : 2 , material : "fruits" ,stock : 1500, cost :400},
    {id : 3 , material : "washing_product" ,stock : 3500,cost : 200},
];

let stock = market.sort((a,b) => {
    if (a.material < b.material) return -1;
    if (a.material > b.material) return 1;
    return 1; 
}).filter((val) => val.material == "vegetable")
.map((val) => val.material + " " + val.cost
).reduce((acc,val) => acc + val.cost)
console.log(stock);
*/
// immediately invoking function
/*
(() =>{
    n1 =20;
    n2=10;
    let result = n1+n2;
    console.log(result)


})();
*/

//function using arguments
 /*
function mechanic() {
  let cost = 0;
   for (let value of arguments){
  cost += value;
   }
  return cost;
};
let expense = mechanic(200,85,90,35);
console.log(`your Cost is ${expense}`);
*/

//rest and spread operator.
/*
let expense = (loan,...entension) =>{
    let total = entension.reduce((a,b) => a+b );
    return total
};
let result = expense(200,375,180,432);
console.log (`your expense is ${result}` );
*/
/*
let veg = {
    id : 1, name : "apple"
};
let veg2 = {
    ...veg
}
console.log(veg2)
*/

//function using default parameters
 /*
function tax(cost,tax=18){
    let totalCost = cost * (tax / 100);
    console.log(`\tyour cost is ₹${cost}\n\n 
    \tyour tax is ₹${totalCost}\n\n
    \ttotal amount is ₹${ cost + totalCost}`);
};
tax(45);
*/
let person = {
    name : "Akash",
    age : 21
};
for (let i in person)
   console.log(i + ":",person[i]);