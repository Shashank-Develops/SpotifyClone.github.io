console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Apna Bana Le Piya",filePath:"song/1.mp3",coverPath:"covers/1.jpeg"},
    {songName: "Kahani Suno",filePath:"song/2.mp3",coverPath:"covers/2.jpeg"},
    {songName: "Perfect",filePath:"song/3.mp3",coverPath:"covers/3.jpeg"},
    {songName: "Starboy",filePath:"song/4.mp3",coverPath:"covers/4.jpeg"},
    {songName: "The Box",filePath:"song/5.mp3",coverPath:"covers/5.jpeg"},
    {songName: "Under the Influence",filePath:"song/6.mp3",coverPath:"covers/6.jpeg"},
    {songName: "Superman",filePath:"song/7.mp3",coverPath:"covers/7.jpeg"},
    {songName: "Shiv Dhun",filePath:"song/8.mp3",coverPath:"covers/8.jpeg"},
    {songName: "Tum Prem Ho",filePath:"song/9.mp3",coverPath:"covers/9.jpeg"},
    {songName: "Shoorveer",filePath:"song/10.mp3",coverPath:"covers/10.jpeg"},

]
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0)
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
}
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
// Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{ 
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
})

document.getElementById('next').addEventListener('click', ()=>{
if(songIndex>=9){
    songIndex = 0
}
else{
    songIndex += 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
if(songIndex<=0){
    songIndex = 0
}
else{
    songIndex -= 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})