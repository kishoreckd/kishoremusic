// array of songs
let Songs = [
    {
        id:0,
        artist: "Aniruth",
        songName: "Bloody Sweet",
        img:"./img/leo.jpeg",
        Music: "./Audio/Bloody Sweet.mp3",
        move:"Bloody Sweet"
    },
    {
        id:1,
        artist: "Sharuk",
        songName: "Chammak Challo",
        img:"./img/chammak.jpg",
        Music: "./Audio/Chammak Challo (International Version)(MP3_320K).mp3",
        move:"Chammak Challo (International Version)"

    },
    {
        id:2,
        artist: "Stephen Standruez",
        songName: "Until I Found ",
        img:"./img/until i found.jpeg",
        Music: "./Audio/Until I Found.mp3",
        move:"Until I Found..."


    },
    {
        id:3,
        artist: "Hip Hop Tamizha",
        songName: "Quarantine & Chill",
        img:"./img/quarantine.jpg",
        Music: "./Audio/Quarantine-&-Chill-MassTamilan.io.mp3",
        move:"Quarantine-&-Chill..."


    },
]



// targetting all the elements
const audio = document.querySelector("audio");
// console.log(audio);
let playbutton = document.querySelector("#play")
// console.log(playbutton);
let inputRange = document.querySelector("input")
// console.log(inputRange);
let next = document.querySelector("#next-song")
// console.log(next);
let previous =document.querySelector("#perivious-song")
// console.log(previous);
let forward = document.querySelector("#forward")
// console.log(forward);
let backward = document.querySelector("#backward")
// console.log(backward);
let songname = document.querySelector("#song-name")
// console.log(songname);
let artist = document.querySelector("#artist")
// console.log(artist);
let img =document.querySelector("img")
// console.log(img);



let move =document.querySelector("#move")

let current = document.querySelector("#currrenttime")
let full = document.querySelector("#fullTime")

let allsong = document.querySelector(".allsong")

// it gets the audio time and cpies on inout range field
audio.onloadedmetadata = function () {
    inputRange.max = audio.duration;

}

let count = 0;


// it shows the audio on the array  when the tab refreshes
window.addEventListener("DOMContentLoaded",()=>{
    
    audio.src = Songs[count].Music;
    img.src=Songs[count].img;
    songname.innerText = Songs[count].songName;
    artist.innerText = Songs[count].artist;
    move.innerText=Songs[count].move;
    
})

if (count == Songs.length) {
    alert("The Song has been ended")
    
}

//play button 
playbutton.addEventListener("click", (e) => {
    time()
       if (playbutton.classList.contains("fa-pause")) {
        audio.pause()
        img.classList.remove("add")
        playbutton.classList.remove("fa-pause")
        playbutton.classList.add("fa-play")
    }
    else {

        audio.play()
        img.classList.add("add")

        playbutton.classList.add("fa-pause")
        playbutton.classList.remove("fa-play")
    }
    //setinterval calculate
    setInterval(() => {
        inputRange.value = audio.currentTime;
    }, 500)
})


// next button
next.addEventListener("click", (e) => {
    time()

    count++
   
    if (count == 4) {
        alert("The songs has been ended")
    }
    audio.src = Songs[count].Music;
    img.src=Songs[count].img;
    songname.innerText = Songs[count].songName;
    artist.innerText = Songs[count].artist;
    move.innerText=Songs[count].move;

    audio.play();
    playbutton.classList.add("fa-pause")
    playbutton.classList.remove("fa-play")
    inputRange.value = audio.currentTime;
    setInterval(() => {
        
    }, 500)


    //check song length
})

// previous button
previous.addEventListener("click", (e) => {
    time()

    count--
    move.innerText=Songs[count].move;
    audio.src = Songs[count].Music;
    img.src=Songs[count].img;
    songname.innerText = Songs[count].songName;
    artist.innerText = Songs[count].artist;
    audio.play();
    playbutton.classList.add("fa-pause")
    playbutton.classList.remove("fa-play")
    inputRange.value = audio.currentTime;
    setInterval(() => {
        
    }, 500)

    //check song length
})


function time(){
    setInterval(()=>{
        show()
    },1000)
}

function show(){
    CurrenntMin = Math.floor(audio.currentTime / 60)
    curretSec = Math.floor(audio.currentTime - (CurrenntMin * 60))

    durationMin = Math.floor(audio.duration / 60)
    durationSec = Math.floor(audio.duration - (durationMin * 60))

    if(CurrenntMin < 10){
        CurrenntMin = "0" + CurrenntMin
    }
    if(curretSec < 10){
        curretSec = "0" + curretSec
    }
    if(durationMin < 10){
        durationMin = "0" + durationMin
    }
    if(durationSec < 10){
        durationSec = "0" + durationSec
    }
    current.innerText = `${CurrenntMin}:${curretSec}`
    full.innerText = `${durationMin}:${durationSec}`
}


// input range value assign to audio currenTime;
inputRange.addEventListener("input", () => {
    audio.play();
    audio.currentTime = inputRange.value
    playbutton.classList.remove("fa-play")
    playbutton.classList.add("fa-pause")
})


//forward functionality
forward.addEventListener("click",()=>{
    audio.currentTime =  audio.currentTime+10;
})

//backward functionality

backward.addEventListener("click",()=>{
    audio.currentTime =  audio.currentTime-10;
})


let ul =document.querySelector(".allsong")

for (let i = 0; i < Songs.length; i++) {
let li = document.createElement("li");  
li.setAttribute("id",i)

li.innerText = Songs[i].songName;// console.log(a);
ul.appendChild(li);

}
let menu = document.querySelector(".menu");
let playlist =document.querySelector(".playlist")
menu.addEventListener('click',(e)=>{
    playlist.classList.toggle("visible")

})

let li = document.querySelectorAll("li")
//console.log(li)

for(let i=0;i<li.length;i++){
   li[i].addEventListener("click",(e)=>{
    console.log(e.target.id)
    for(let i=0;i<Songs.length;i++){
        if(e.target.id == Songs[i].id){
            time()

            playbutton.classList.add("fa-pause")
            playbutton.classList.remove("fa-play")
            move.innerText=Songs[i].move;
            audio.src = Songs[i].Music
            songname.innerText = Songs[i].songName;
            artist.innerText = Songs[i].artist
            img.src = Songs[i].img

            audio.play()
            show()
            setInterval(() => {
                inputRange.value = audioSrc.currentTime;
                track()
            }, 500)

        }
    }
   })
}