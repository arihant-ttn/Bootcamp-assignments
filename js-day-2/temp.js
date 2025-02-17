const temperatureConverter = {
    Celsius: 0,
    result:"",
        read:function(){
            this.Celsius = parseFloat(prompt("Enter temperature(in Celsius): "));
            console.log(this.Celsius);
                    
        },
            toFarenheit:function(Celsius){
                this.result = `Celsius in Fahrenheit: ${parseFloat((this.Celsius * 1.8) + 32)}`;
                console.log(this.result);
            },
        toKelvin:function(Celsius){
            this.result = "Celsius in Kelvin: "+ parseFloat(this.Celsius + 273.15);   
        },
        display:function(result){
           console.log(this.result);
        },
       
};