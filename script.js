 console.log("Welcome to Spotify");
 console.log("You Taste in Music is our Priority");


 let songindex=0;
let audio=new Audio("Jaane Kyun.mp3");
let masterplay=document.getElementById("masterplay");
let progress_bar=document.getElementById("progress_bar");
let gif=document.getElementById("gif");


 masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;

    }
    else{
        audio.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
 })
audio.addEventListener("timeupdate",()=>{
    console.log("Time Update");
    progress=parseInt((audio.currentTime/audio.duration)*100);//parseInt=Percentage in int
    progress_bar.value=progress;
 })
 progress_bar.addEventListener("change",()=>{
    audio.currentTime=((progress_bar.value * audio.duration)/100);
 })