 console.log("Welcome to Spotify");
 console.log("You Taste in Music is our Priority");


 let songindex=0;
let audio=new Audio("Jaane Kyun.mp3");
let masterplay=document.getElementById("masterplay");
let progress_bar=document.getElementById("progress_bar");
let gif=document.getElementById("gif");
// let audio=new Audio["Jaane Kyun.mp3","Dil_Tu_Jaan_Tu.mp3","Excuses.mp3"]

let song=[
    {songname:"Bahara - I hate luv story", filepath:"Bahara1.mp3",coverpath:"song1.jpg",songtime:"05:26"},
    {songname:"Dil Tu Jaan Tu - Gurnazar 128", filepath:"Dil_Tu_Jaan_Tu.mp3",coverpath:"song2.jpeg",songtime:"03:57"},
    {songname:"Excuses - Ap Dhillon", filepath:"Excuses.mp3",coverpath:"song3.jpeg",songtime:"02:56"},
    {songname:"Heroine - Neelkamal Singh", filepath:"Heroine4.mp3",coverpath:"song4.jpeg",songtime:"03:31"},
    {songname:"Jaane Kyun", filepath:"Jaane Kyun.mp3",coverpath:"song5.jpeg",songtime:"04:38"},
    {songname:"Tu Mileya - Darshan Raval", filepath:"Tu_Mileya.mp3",coverpath:"song6.jpeg",songtime:"03:14"},
    {songname:"Raataan Lambiyan - Shershaah", filepath:"Raatan_Lambiyan.mp3",coverpath:"song7.jpeg",songtime:"03:50"},
    {songname:"Tum Jo Aaye", filepath:"Tum_Jo_Aaye.mp3",coverpath:"song8.jpeg",songtime:"05:05"},
    {songname:"Tum Se - Teri Baaton Mein Aisa Uljha Jiya", filepath:"Tum_Se.mp3",coverpath:"song9.jpeg",songtime:"05:05"},
    {songname:"Tum Se Hi - Jab We Met", filepath:"Tum_Se_Hi.mp3",coverpath:"song10.jpeg",songtime:"05:25"},
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
 let img=Array.from(document.getElementsByTagName("img"));
 let songnames=Array.from(document.getElementsByClassName("songname"));

song_item.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = song[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=song[i].songname;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('mplay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

let mplay=Array.from(document.getElementsByClassName('mplay'));
mplay.forEach((element,i)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlay();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audio.src=("song[0],filepath");
        // audio.currentTime=0;
        // audio.play();
    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src =songs/$(songIndex+1).mp3;
    audioElement.currentTime = 0;
    audioElement,play();
    masterplay.classlist.remove('fa-circle-play');
    masterplay.classlist.remove('fa-circle-pause');
})