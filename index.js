var currentSong = Playlist.firstElementChild;
emphasize(currentSong);
audio = new Audio(currentSong.id)

function stop(){
   pauseMusic(pause_and_play);
   if (pause_and_play.value = 1) {
      audio.pause();
   } 
   audio.currentTime = 0;  
}

//------------------------------------------------------------------------//
function repeatOne(repeatStatus){//repeat the current song playing
   alert("Music is repeating");//inform the user that current song is repeating
   audio.onended = function() {//if music ends, then play again
      audio.play();
  };
  repeatStatus.innerHTML ="Repeat All";//change button to repeat all 
   repeatStatus.setAttribute("onclick", "repeatAll(this)");//change function to repeat all

}

function repeatAll(repeatStatus){//repeat all songs in order
   alert("Whole playlist is repeating");//inform user
   audio.onended =function(){//if music ends, then proceed to next music
      next();
   }
   repeatStatus.innerHTML ="Repeat None";//change button to repeat none
   repeatStatus.setAttribute("onclick", "repeatNone(this)");//change function to repeat none
}

function repeatNone(repeatStatus){//no songs repeating, once ended, no more sound
   alert("No music is repeating");//alert user
   repeatStatus.innerHTML ="Repeat One";
   repeatStatus.setAttribute("onclick", "repeatOne(this)");
}
//---------------------------------------------------------------- //  

function playMusic(pause_and_play){
   pause_and_play.innerHTML = "<i class='fa fa-pause'></i>";
   pause_and_play.setAttribute("onclick", "pauseMusic(this)");
   audio.play();
   pause_and_play.value = 1;
}

function pauseMusic(pause_and_play){
   pause_and_play.innerHTML ="<i class='fa fa-play'></i>";
   pause_and_play.setAttribute("onclick", "playMusic(this)");
   audio.pause();
   pause_and_play.value = 0;
}

 function emphasize(){
    currentSong.setAttribute('style', 'background-color:#FF0000');
 }

 function next(){
    audio.pause();
    currentSong.setAttribute('style', 'background-color:none');
    currentSong = currentSong.nextElementSibling;

    if(currentSong==null){
        currentSong = Playlist.firstElementChild;
    }
    emphasize(currentSong);

    audio = new Audio(currentSong.id);
    if(pause_and_play.value==1){
       audio.play();
    }else{
       audio.pause();
    }
 }

 function prev(){
    audio.pause();
     currentSong.setAttribute('style', 'background-color:none');
     currentSong = currentSong.previousElementSibling;
     if(currentSong==null){
        currentSong = Playlist.lastElementChild;
}
    emphasize(currentSong);

    audio = new Audio(currentSong.id);
    if(pause_and_play.value==1){
       audio.play();
    }else{
       audio.pause();
    }
 }

 