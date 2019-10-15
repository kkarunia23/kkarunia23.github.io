  function printout() {
   huruf = document.getElementById('testInput').value;
   console.log(huruf);
}
// console.log(huruf);
// function store(){
//     const sequence = document.getElementById('sequence').value;
// }

//make the game continue playing while timer is still there
// input the sequence and drumkit to modify

$(()=>{
    ////shake function
    function shake(id){
        document.getElementById('pattern-'+id).classList.toggle('patternShake');
        setTimeout(function(){
            document.getElementById('pattern-'+id).classList.toggle('patternShake');
        },100)
    }

    ////////////////////pattern-1 Kick
    var kickX = document.getElementById("sound-1");

    function kick() {
      shake(1);
      kickX.currentTime=0;
      document.getElementById('sound-1').play();
       // console.log('2 is clicked');
    }

    document.getElementById("pattern-1").addEventListener("click", kick);

    document.addEventListener('keydown',function(e){
        if(e.keyCode == 83){ //s
            kick();
        }
    })

    ////////////////////pattern-2 floorTom
    var floorTomX = document.getElementById("sound-2");

    function floorTom() {
      shake(2);
      floorTomX.currentTime=0;
      document.getElementById('sound-2').play();
        //console.log('3 is clicked');
    }

    document.getElementById("pattern-2").addEventListener("click", floorTom);

    document.addEventListener('keydown',function(e){
        if(e.keyCode == 70){ //f
            floorTom();
        }
    })

    ////////////////////pattern-3 Snare
    var snareX = document.getElementById("sound-3");

    function snare() {
      shake(3);
      snareX.currentTime=0;
      document.getElementById('sound-3').play();
        //console.log('3 is clicked');
    }

    document.getElementById("pattern-3").addEventListener("click", snare);

    document.addEventListener('keydown',function(e){
        if(e.keyCode == 68){ //d
            snare();
        }
    })

    ////////////////////pattern-4(bigTom)

    var bigTomX = document.getElementById("sound-4");

    function bigTom() {
      shake(4);
      bigTomX.currentTime=0;
      document.getElementById('sound-4').play()
      //console.log('1 is clicked');
    }

    document.getElementById("pattern-4").addEventListener("click", bigTom);

    document.addEventListener('keydown',function(e){
        if(e.keyCode == 65){ //f
            bigTom();
        }
    })

    ////////////////////pattern-5(smallTom)

    var smallTomX = document.getElementById("sound-5");

    function smallTom() {
      shake(5);
      smallTomX.currentTime=0;
      document.getElementById('sound-5').play()
      //console.log('1 is clicked');
    }

    document.getElementById("pattern-5").addEventListener("click", smallTom);

    document.addEventListener('keydown',function(e){
        if(e.keyCode == 72){ //h
            smallTom();
        }
    })

    ////////////////////pattern-6(hihat)

    var hihatX = document.getElementById("sound-6");

    function hihat() {
      shake(6);
      hihatX.currentTime=0;
      document.getElementById('sound-6').play()
      //console.log('1 is clicked');
    }

    document.getElementById("pattern-6").addEventListener("click", hihat);

    document.addEventListener('keydown',function(e){
        if(e.keyCode == 74){ //j
            hihat();
        }
    })

    ////////////////////pattern-7(crash)

    var crashX = document.getElementById("sound-7");

    function crash() {
      shake(7);
      crashX.currentTime=0;
      document.getElementById('sound-7').play()
      //console.log('1 is clicked');
    }

    document.getElementById("pattern-7").addEventListener("click", crash);

    document.addEventListener('keydown',function(e){
        if(e.keyCode == 75){ //k
            crash();
        }
    })

    ////////////////////pattern-8(ride)

    var rideX = document.getElementById("sound-8");

    function ride() {
      shake(8);
      rideX.currentTime=0;
      document.getElementById('sound-8').play()
      //console.log('1 is clicked');
    }

    document.getElementById("pattern-8").addEventListener("click", ride);

    document.addEventListener('keydown',function(e){
        if(e.keyCode == 76){ //l
            ride();
        }
    })

    ////////////////////GAME LOGIC

    var score = 0;
    let soundBank = []; //array
    let counter = 0; // number of beats
    let sequence = 3    ;//  how many number of beats that need to be followed and pushed to soundBank array
    let drumKit = 3; // number of drum sounds pattern
    userInput = false; // default start, user click will not be recognized.

    //let sequence = document.getElementById("sequence").value;
    document.getElementById("drumkit").innerHTML = drumKit;

    ///autoplay function
    function autoplay(id) {
      document.getElementById('sound-'+id).currentTime = 0;
      document.getElementById('sound-'+id).play();
    }

    const generateRandomSounds = () => {
        for(i=0; i<sequence; i++){
            soundBank.push(Math.ceil(Math.random()*drumKit));
        }
    }

    /////start play

    const play = () =>  {// generate randomise soundBank
      sequence = parseInt(document.getElementById('sequence').value);
      countdown();
      console.log(sec);
      console.log(typeof sequence);
      counter = 0;
      soundBank.length = 0;
      userKey.length = 0; //clear the array everytime random beat is pressed.
      generateRandomSounds(); //

      let playInterval = setInterval(function(){
        console.log('counter:'+counter);
        console.log(soundBank[counter]);
        shake(soundBank[counter]);
        autoplay(soundBank[counter]);

        if (counter+1 === sequence){
                    clearInterval(playInterval);    // stop interval
                    console.log(soundBank);
                    userInput = true; // now user click will be recognized
                    userTurn();
                        if(sec>0){ //to stop the flow when timer is zero
                    setTimeout(function(){ userPlay();},3000);// x seconds for user to follow
                  // need to check if still time is >0, then repeat the cycle
              }
          }
          else {
            counter +=1;
        }
    }, 500);
    }

    document.getElementById("play").addEventListener("click", play);

    //////////listen to user input
        //the soundBank array that was created earlier. where is that stored, how to compare that later after the user has played their parts.
        // user click on item, return ID, extract number from the ID name,push ID into the array

        let userKey =[];

        const userTurn = () => {
            console.log('userinput'+ userInput);
            var images = document.getElementsByClassName("pattern");
            for(var i=0; i < images.length; i++){
                images[i].onclick = function(){
                    console.log(this.id);
                    var string = this.id;
                    var rawID = string.match(/\d+/g)
                    //console.log(rawID);
                    if(userKey.length<soundBank.length){;
                    userKey.push(parseInt(rawID.join())); //need logic, only push to userKey when
                    console.log(userKey);
                }
            }
        }
    }
    const userPlay =() =>{
        console.log(soundBank);
        if (JSON.stringify(userKey) == JSON.stringify(soundBank)){
            console.log('match');
            score++;
            document.getElementById("score").innerHTML = score;
        }
        else {
            console.log('nope');
        }
        play();
    }

    /////countdown
    var sec = 10;
    const countdown = () =>{
        let playInterval = setInterval(function(){
            if(sec > 0){
                sec--;
                document.getElementById("timer").innerHTML = sec ;
            }
            else if (sec==0){
                console.log('yeepee over');
                clearInterval(playInterval);
                //document.body.classList.toggle('bgClass'); //to change the background image later
            }
        },1000);
    }
    //window.onload=countdown();

})