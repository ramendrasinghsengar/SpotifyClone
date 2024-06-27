console.log("Welcome to Spotify")
//Initialize the Variable
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Let-me-Love", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Counting Stars", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Just Like a Movie", filePath: "song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Beautiful Things", filePath: "song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Found You First", filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "POur ME A Drink", filePath: "song/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Me BEfore You", filePath: "song/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "I Don't Care", filePath: "song/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Let Her Go", filePath: "song/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Neon Lights", filePath: "song/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});



//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<= 0 )
        {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
    else
        {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
    {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
} 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})

document.getElementById('previos').addEventListener(('click'), ()=>{
    if(songIndex=>9){
        songIndex =0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
})

document.getElementById('forward').addEventListener(('click'), ()=>{
    if(songIndex<=0){
        songIndex =9;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})
