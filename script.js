 console.log("Welcome to Spotify");
 console.log("You Taste in Music is our Priority");
 let masterplay=document.getElementById("#progress_bar");
 masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-regular fa-circle-play");
        masterplay.classList.add("fa-regular fa-circle-pause");
    }
 })