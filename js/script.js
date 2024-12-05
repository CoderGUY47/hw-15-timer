// let day=document.querySelector(".day")
// let hour=document.querySelector(".hour")
// let mint=document.querySelector(".mint")
// let sec=document.querySelector(".sec")

// setInterval(()=>{
//     let date = new Date()
//     day.innerHTML=date.getDate()
//     hour.innerHTML=date.getHours()
//     mint.innerHTML=date.getMinutes()
//     sec.innerHTML=date.getSeconds()
// },1000)

let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let mint = document.querySelector(".mint");
let sec = document.querySelector(".sec");

setInterval(() => {
    let date = new Date();
    day.innerHTML = date.getDate();
    hour.innerHTML = date.getHours();
    mint.innerHTML = date.getMinutes();
    
    // Format seconds using a simple conditional check
    let seconds = date.getSeconds();
    if(seconds < 10) 
    {
        sec.innerHTML = '0' + seconds; 
    } 
    else 
    {
        sec.innerHTML = seconds;
    }
}, 1000);