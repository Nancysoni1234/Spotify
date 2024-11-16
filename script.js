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
    {songname:"Bahara", filepath:"Bahara1.mp3",coverpath:"song1.jpg"},
    {songname:"Dil Tu Jaan Tu", filepath:"Dil_Tu_Jaan_Tu.mp3",coverpath:"song2.jpeg"},
    {songname:"Excuses", filepath:"Excuses.mp3",coverpath:"song3.jpeg"},
    {songname:"Heroine", filepath:"Heroine4.mp3",coverpath:"song4.jpeg"},
    {songname:"Jaane Kyun", filepath:"Jaane Kyun.mp3",coverpath:"song5.jpeg"},
    {songname:"Tu Mileya", filepath:"Tu_Mileya.mp3",coverpath:"song6.jpeg"},
    {songname:"Raatan Lambiyan", filepath:"Raatan_Lambiyan.mp3",coverpath:"song7.jpeg"},
    {songname:"Tum Jo Aaye", filepath:"Tum_Jo_Aaye.mp3",coverpath:"song8.jpeg"},
    {songname:"Tum Se", filepath:"Tum_Se.mp3",coverpath:"song9.jpeg"},
    {songname:"Tum_Se_Hi", filepath:"Tum_Se_Hi.mp3",coverpath:"song10.jpeg"},
]


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
audio.addEventListener("Timeupdate",()=>{
    console.log("Time Update");
    progress=parseInt((audio.currentTime/audio.duration)*100);//parseInt=Percentage in int
    progress_bar.value=progress;
 })
 progress_bar.addEventListener("change",()=>{
    audio.currentTime=((progress_bar.value * audio.duration)/100);
 })
 let song_item=Array.from(document.getElementsByClassName('song_items'));
song_item.forEach((element,i)=>{
    console.log(element);
   element.getElementsByClassName('song_img')[i].src=song[i].coverpath;
   element.getElementsByClassName('songname')[i].innerText=song[i].songname;
})

