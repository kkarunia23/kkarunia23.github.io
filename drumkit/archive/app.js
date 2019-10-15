

$(()=>{
////////////////////BIGTOM
var bigTomX = document.getElementById("bigTom");
document.getElementById("bigTomSound").addEventListener("click", bigTom);
function bigTom() {
  bigTomX.currentTime=0;
  document.getElementById('bigTom').play();
}

document.addEventListener('keydown',function(e){
    if(e.keyCode == 65){
    bigTomX.currentTime=0;
    document.getElementById('bigTom').play();
    }
})

////////////////////KICK
var kickX = document.getElementById("kick");
document.getElementById("kickSound").addEventListener("click", kick);
function kick() {
  kickX.currentTime=0;
  document.getElementById('kick').play();
}

document.addEventListener('keydown',function(e){
    if(e.keyCode == 83){
    kickX.currentTime=0;
    document.getElementById('kick').play();
    }
})

////////////////////CRASH
var crashX = document.getElementById("crash");
document.getElementById("crashSound").addEventListener("click", crash);
function crash() {
  crashX.currentTime=0;
  document.getElementById('crash').play();
}

document.addEventListener('keydown',function(e){
    if(e.keyCode == 68){
    crashX.currentTime=0;
    document.getElementById('crash').play();
    }
})



////////////////////GAME LOGIC



///////RANDOMIZER for one sound

const soundBank = ["bigTom", "kick", "crash"];

const randomizer =()=>{

    if (soundBank[Math.floor(Math.random()*3)]=='bigTom'){
        bigTom();
    }
    else if (soundBank[Math.floor(Math.random()*3)]=='kick'){
        kick();
    }
    else {
        crash();
    }
}

document.getElementById("play").addEventListener("click", randomizer);

///////RANDOMIZER FOR MANY SOUNDS

const randomizerTwo = () =>{

}

});


// var hihatNoise = new Audio('audioFiles/hihat.wav');

// var hihatImage = window.getElementsByTagName("img")[0];
// hihatImage.addEventListener("click", makeNoise);

// function makeNoise(event){
//     console.log('test');
// }
//console.log('js is connected');

// document.getElementById("bigTomSound").addEventListener("click", myFunction);
// function myfunction(){
//     console.log('test');
// }


//<img src = "assets/testkit.png" onclick='play()'>