var min=0
var sec=0
var ms=0
var stp;
function start(){
    stp=setInterval(() => {
        console.log("ddd")
        ms=ms+1;
        if(ms==100){
         ms=0;
         sec=sec+1
        }
        if(sec==60){
            sec=0;
            min=min+1
        };
        document.getElementById('time').innerHTML=`${min}:${sec}:${ms}`
 },100)
}

function stop(){
    clearTimeout(stp)
}
function reset(){
    min=0;
    sec=0;
    ms=0;
    document.getElementById('time').innerHTML=`${min}:${sec}:${ms}`
    stop()
}
function lap(){
    var h1=document.createElement('h1') 
    h1.innerHTML=`${min}:${sec}:${ms}`
    document.getElementById('alllap').appendChild(h1)
}
function clearlap(){
    document.getElementById('alllap').innerHTML=""
    // .innerHTML=`${min}:${sec}:${ms}`
}
 



    


 