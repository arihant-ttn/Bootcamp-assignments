// function start(){
//     let count=0;
//     let intervalID=null;
//     if(intervalID==null){
//         intervalID=setInterval(()=>{
//             count++;
//             document.getElementById("timer").innerHTML = count;

//         },1000);
//     }
// }

// function stop(){
//     clearInterval(intervalID);
//     intervalID=null;
// }

// function reset(){
//     clearInterval(intervalID);
//     intervalID=null;
//     count=0;
//     document.getElementById("timer").innerHTML = count;
// }

const timer = function () {
  let count = 0;
  let intervalID = null;
  return {
    start() {
      if (intervalID == null) {
        intervalID = setInterval(() => {
          count++;
          document.getElementById("timer").innerHTML = count;
        }, 1000);
      }
    },
    stop() {
      clearInterval(intervalID);
      intervalID = null;
    },

    reset() {
      clearInterval(intervalID);
      intervalID = null;
      count = 0;
      document.getElementById("timer").innerHTML = count;
    },
  };
};
const t = new timer();
