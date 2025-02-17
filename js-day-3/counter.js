let count=0;
let intervalID=null;
function start(){
    if(intervalID==null){
        intervalID=setInterval(()=>{
            count++;
            document.getElementById("timer").innerHTML = count;

        },1000);
    } 
}

function stop(){
    clearInterval(intervalID);
    intervalID=null;
}

function reset(){
    clearInterval(intervalID);
    intervalID=null;
    count=0;
    document.getElementById("timer").innerHTML = count;
}