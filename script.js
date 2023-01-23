setInterval(() => {
let dTime=new Date;
let hours=dTime.getHours();
let Minutes=dTime.getMinutes();
let Seconds=dTime.getSeconds();
let hrotation=hours*30 + Minutes/2;
let mrotation=6*Minutes;
let srotation=6*Seconds;
document.getElementById("hour").style.transform=`rotate(${hrotation}deg)`;
document.getElementById("minute").style.transform=`rotate(${mrotation}deg)`;
document.getElementById("second").style.transform=`rotate(${srotation}deg)`;
    
}, 1000);
setInterval(() => {
    let time=new Date()
    zero=(number)=>{
        if(number<10){
         number='0'+number;
        }
        return number;
    }
    let hour= time.getHours();
    let m="AM"
    if (hour>12){
        hour-=12;
        m="PM";
    }
    
    let minute= time.getMinutes();
    let second= time.getSeconds();
    second=zero(second)
    hour=zero(hour)
    minute=zero(minute)
    let time1=hour+':'+minute+':'+second+' '+m;
    

    document.querySelector('.time').innerHTML=time1;
    
}, 1000);
