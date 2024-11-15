 console.log("Welcome to Spotify");
 console.log("You Taste in Music is our Priority");


 let songindex=0;
let audio=new Audio("Jaane Kyun.mp3");
let masterplay=document.getElementById("masterplay");
let progress_bar=document.getElementById("progress_bar");
let gif=document.getElementById("gif");
let mplay=document.getElementById("mplay");
// let audio=new Audio["Jaane Kyun.mp3","Dil_Tu_Jaan_Tu.mp3","Excuses.mp3"]

let song=[
    {songname:"Bahara", filepath:"Documents/GitDemo/Spotify/Bahara1.mp3",coverpath:"Documents/GitDemo/Spotify/song1.jpeg"},
    {songname:"Dil Tu Jaan Tu", filepath:"Documents/GitDemo/Spotify/Dil_Tu_Jaan_Tu.mp3",coverpath:"Documents/GitDemo/Spotify/song2.jpeg"},
    {songname:"Excuses", filepath:"Documents/GitDemo/Spotify/Excuses.mp3",coverpath:"Documents/GitDemo/Spotify/song3.jpeg"},
    {songname:"Heroine", filepath:"Documents/GitDemo/Spotify/Heroine4.mp3",coverpath:"Documents/GitDemo/Spotify/song4.jpeg"},
    {songname:"Jaane Kyun", filepath:"Documents/GitDemo/Spotify/Jaane Kyun.mp3",coverpath:"Documents/GitDemo/Spotify/song5.jpeg"},
    {songname:"Tu Mileya", filepath:"Documents/GitDemo/Spotify/Tu_Mileya.mp3",coverpath:"Documents/GitDemo/Spotify/song6.jpeg"},
    {songname:"Raatan Lambiyan", filepath:"Documents/GitDemo/Spotify/Raatan_Lambiyan.mp3",coverpath:"Documents/GitDemo/Spotify/song7.jpeg"},
    {songname:"Tum Jo Aaye", filepath:"Documents/GitDemo/Spotify/Tum_Jo_Aaye.mp3",coverpath:"Documents/GitDemo/Spotify/song8.jpeg"},
    {songname:"Tum Se", filepath:"Documents/GitDemo/Spotify/Tum_Se.mp3",coverpath:"Documents/GitDemo/Spotify/song9.jpeg"},
    {songname:"Tum_Se_Hi", filepath:"Documents/GitDemo/Spotify/Tum_Se_Hi.mp3",coverpath:"Documents/GitDemo/Spotify/song10.jpeg"},
]


 masterplay.addEventListener('click',()=>{
    if(audi0.paused || audio.currentTime<=0){
        audio.play();
        masterplay.classList.remove("fa-regular fa-circle-play");
        masterplay.classList.add("fa-regular fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audio.pause();
        masterplay.classList.remove("fa-regular fa-circle-pause");
        masterplay.classList.add("fa-regular fa-circle-play");
        gif.style.opacity = 0;
    }
 })
audio.addEventListener("Timeupdate",()=>{
    console.log("Time Update");
    progress=parseInt((audio.currentTime/audio.duration)*100);//parseInt=Percentage in int
    progress_bar.value=progress;
 })
 progress_bar.addEventListener("change",()=>{
    audio.currentTime=((progress_bar.value * audio.duration)/100);
 })
