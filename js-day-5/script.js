// let arr=[1,2,3,4,4,5,6,7,8,8,8,9,9];
// console.log(new Set(arr));
// --------------------q2---------------------------------------------------------------
// let str=["ate","eat","hand","arihant"];
// function frequency(word){
//     let f_map=new Map();

//     for (let i=0;i<word.length;i++){
//         let char = word[i];
//         f_map.set(char,(f_map.get(char)||0) +1);
//     }
//     return f_map;
// }
// function anagrams(word1,word2){
//     if(word1.length!=word2.length) return false;

//     let freq1=frequency(word1);
//     let freq2=frequency(word2);
//     for (let[char, count] of freq1){
//         if(freq2.get(char)!==count) return false;

//     }
//     return true;
// }

// function find(str){
//     return str.filter((word,index,arr)=>{
//         for (let i =0;i<arr.length;i++){
//             if(index!==i&&anagrams(word,arr[i])){
//                 return true;
//             }
//         }
//         return false;
//     });
// }
// console.log(find(str));

// ---------------------------------------Q3------------------------------------

// class A{
//     #y;
//     constructor(x,y,z){
//         this.x=x;
//         this.#y=y;
//         this.z=z;
//     }
//     #get_y(){
//         return this.#y;
//     }
//     show_y(){
//         console.log("y: "+this.#get_y());
//     }

//     greet_A(){
//         console.log("Hello! from A");
//     }
// }
// class B extends A{
//     static add(a,b){
//         return a+b;
//     }
//     greet_B(){
//         console.log("Hello! from B");
//     }
// }

// class C extends B{
//     #q;
//     constructor(p,q,){
//         this.p=p;
//         this.#q=q;
//         }
//         static greet_C(){
//             console.log("Hello from C");
//         }
// }
// const a =new A(1,2,3);
// a.show_y();
// console.log(B.add(2,3));

// const b= new B();
// b.greet_A();
// ------------------------------------------------------Q4------------------------------------------------
// class Area{
//     constructor(l,b,r){
//         this.r=r;
//         this.l=l;
//         this.b=b;
//     }
//     static circle(r){
//         return 3.14*r*r;

//     }
//     static rectangle(l,b){
//         return l*b;
//     }
//     static square(l){
//         return l*l;
//     }
// }
// console.log(Area.circle(4));

// -----------------------------------------Q5-------------------------------------------------
// import  Area  from "./export.js";
// let a = new Area();
// console.log(a.circle(3));


// ---------------------------------------Q6----------------------------------------

// import unique from "./export.js";
// let arr=[1,2,3,4,5,6,4,2,3,7,5,7];
// console.log(unique(arr));

// ----------------------------------Q7------------------------------------------------------

// const arr = [1, [2, 3], [4, [5, 6]]];

// function flat(arr,result=[]){
//     for (let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             flat(arr[i],result);
//         }
//         else{
//             result.push(arr[i]);

//         }
//     }
//     return result;
// }

// console.log("flattened array: "+ flat(arr));


