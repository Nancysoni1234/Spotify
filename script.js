 console.log("Welcome to Spotify");
 console.log("You Taste in Music is our Priority");


 let songindex=0;
let audio=new Audio("Jaane Kyun.mp3");
let masterplay=document.getElementById("masterplay");
 let progress_bar=document.getElementById("#progress_bar");


 masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterplay.classList.remove("fa-regular fa-circle-play");
        masterplay.classList.add("fa-solid fa-circle-pause");
    }
    else{
        audio.pause();
        masterplay.classList.remove("fa-solid fa-circle-pause");
        masterplay.classList.add("fa-regular fa-circle-play");
    }
 })
 