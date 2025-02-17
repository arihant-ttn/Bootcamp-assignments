// function Person(name,age,gender){
//     this.name ='Arihant';
//     this.age= 22;
//     this.gender='M';
// }

// function Employee(eid, department,salary){
//    this.eid =1
//     this.department="Developer";
//     this.salary=  20000
// }
// function Developer(pid,project){
//    this.pid=1;
//    this.project='JS';

// }

// Employee.prototype =  new Person();
// Developer.prototype = new Employee();

// var dev = new Developer();
// console.log(dev.name);

// function tracker(fn){
//     let invocation=0;
//     let instances=0;
//         function wrap(...x){
//             if(this instanceof wrap){
//                 instances++;
//                 return new fn(...x);
//             }else{
//                 invocation++;
//                 return fn.call(this,x);
//             }
//     }
//     wrap.getInvocation= () => invocation;
//     wrap.getInstances= () => instances;
//     return wrap;
    
// }
// function myfun(){
//     console.log("This is a function")
// }

// const track = new tracker(myfun);
// track();
// track();
// track();
// new track();
// new track();

// console.log("Invocations: "+track.getInvocation());
// console.log("Instance: "+ track.getInstances());

// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// let fruits = ["Apple", "Banana"];
// // fruits.unshift("Orange"); 

// // console.log(fruits);
// fruits.shift();
// console.log(fruits);

// function sum() {
//     console.log(arguments.length);
// }

// sum(1, 2, 3);  
// // sum(3, 1); 
// function showArguments() {
//     console.log(arguments[0]); 
//     console.log(arguments[1]); 
// }

// showArguments("Hello", "World");


// function factorial(n) {
//     if (n === 1) return 1;
//     return n * arguments.callee(n - 1);
// }

// console.log(factorial(5))

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//         console.log(arr[i]);
//     }, i * 3000); 
// }

var instances=0;
var invocations=0;

function myfun(a,b){
    this.a=a;
    this.b=b;
    console.log(this);
    invocations++;
    if(this!=globalThis){
        instances++;
    }
}

// myfun();
// myfun();

let fun=new myfun();
// console.log("Invocations: "+ invocations);
// console.log("Instances: "+ instances);
