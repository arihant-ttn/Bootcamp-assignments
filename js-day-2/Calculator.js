
var calculator = {
    number1: 0,
    number2: 0,
        read:function(){
            this.number1 = parseFloat(prompt("Enter number 1: "));
            this.number2 = parseFloat(prompt("Enter number 2: ")); 
        },
        add:function( number1,number2){
            document.getElementById("Ans").innerHTML= this.number1 +" + " +this.number2 + " = " + (this.number1+this.number2); 
        },
        multiply:function(number1,number2){
            document.getElementById("Ans").innerHTML=this.number1 +" x " +this.number2 + " = " + (this.number1*this.number2);
        },
        divide:function(number1,number2){
            document.getElementById("Ans").innerHTML=this.number1 +" / " +this.number2 + " = " + (this.number1/this.number2); 
        },
        subtract :function(number1,number2){
            document.getElementById("Ans").innerHTML=this.number1 +" - " +this.number2 + " = " + (this.number1-this.number2);
        }
};