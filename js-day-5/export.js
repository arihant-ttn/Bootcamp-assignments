// import { pi } from "./pi.js";
// export default class Area{
//     constructor(l,b,r){
//         this.r=r;
//         this.l=l;
//         this.b=b;
//     }
//      circle(r){
//         return pi*r*r;

//     }
//      rectangle(l,b){
//         return l*b;
//     }
//     cylinder(r,l){
//         return 2*pi*r(r+h);
//     }
// }
// arr=[null];

export default function unique(arr){
    
    return [...new Set(arr)];
}