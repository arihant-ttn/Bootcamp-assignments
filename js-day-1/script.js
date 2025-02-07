function calculate(){
var principal = prompt("Enter the principal amount");
var rate = prompt("Enter the rate of interest");
var years  = prompt ("Enter the time (in years");
var interest =( principal*rate*years)/100;
alert("Your simple interest is " + interest);
                   
}

function pallindrome(){
    var str  = prompt("Enter the string you want to reverse ");
    if (str == str.split('').reverse().join('')){
        alert("The String/Number is pallindrome");
    }else
    alert("Not a pallindrome");
}
function area(){
    var r = prompt("Enter the radius of the circle");
    var area = 3.141*r*r;
    alert("The area of the circle is " + area);
}
function copy(){
    obj = {
        a:1,
        b:2,
        c:3,
        d:4
    }
    // var deepCopy = JSON.parse(JSON.stringify(obj));
    console.log(obj);
    var shallow={...obj};
    // console.log(deepCopy);

}


    employee = [
        {
            name:"Ashish",
            age:20,
            salary:2000,
            DOB:"29/3/2001"
        },
        {
            name:"Mark",
            age:30,
            salary:4300,
            DOB:"15/8/1947"
        },
        {
            name:"Gandhi",
            age:24,
            salary:800,
            DOB:"26/1/2001"
        },
        {
            name:"Shastri",
            age:24,
            salary:800,
            DOB:"9/3/2001"
        },
        {
            name:"Bose",
            age:30,
            salary:720000,
            DOB:"2/4/1996"
        },
        {
            name:"Premchand",
            age:28,
            salary:620000,
            DOB:"7/6/1994"
        },
        {
            name:"Gulzar",
            age:28,
            salary:920000,
            DOB:"19/5/1880"
        }
    ];
    
let salarygt5000 = employee.filter(e=>e.salary>5000);

let group_age = employee.reduce((acc,employee)=>{
    let g_age = employee.age;
    if(!acc[g_age]){
        acc[g_age]=[];
    }
    acc[g_age].push(employee);
    return acc;
},{});



let increment  = employee.map(employees => {
    if (employees.salary < 1000 && employees.age > 20) {
        
        return { ...employees, salary: employees.salary * 5 };
    }
    return employees; 
});


