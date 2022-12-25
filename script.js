// playlist = {
//   'song_1': 'song/005.mp3',
  
// }

var play = document.getElementById("play");
var music =  document.querySelector("audio");
const img = document.getElementById("123");

//for pause to play btn
let isplaying = false;
 const pausemusic = () =>{
  isplaying = true;
  music.play();
  play.classList.replace('bi-play-circle', 'bi-pause-circle');
  img.classList.add("anime");
 };

//for play to payse btn
const playmusic = () =>{
  isplaying = false;
  music.pause();
  play.classList.replace('bi-pause-circle', 'bi-play-circle');
  img.classList.remove("anime");
 };

 play.addEventListener('click', () => {
  if(isplaying){
    playmusic();
  }
  else{
    pausemusic();
  }
 }
 );

 


// $('#playsong').click(function () {
//   play_audio('play');
// })

// window.onclick = function () {
//   play_audio('play');
// }

// $(window).scroll(function () {
//   play_audio('play');
// })

// window.onload = function () {
//   play_audio('play');
// }

window.onpause = function () {
  play_audio('stop');
}

window.onclose = function () {
  play_audio('stop');
}



$(document).ready(function () {
  $('.slick').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 100,
    fade: true,
    prevArrow: false,
    nextArrow: false,
    cssEase: 'linear'
  });
});

$(document).ready(function () {
  $('.slick2').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 100,
    fade: true,
    prevArrow: false,
    nextArrow: false,
    cssEase: 'linear'
  });
});


// PROGRESSBAR

let processScroll=()=>{
  let docElem=document.documentElement,
  docBody=document.body,
  scrollTop=docElem["scrollTop"] || docBody["scrollTop"],
  scrollBottom=(docElem["scrollHeight"] || docBody["scrollHeight"])-window.innerHeight,
  scrollPercent=scrollTop/scrollBottom * 100 + "%";

  document.getElementById("progress-bar").style.setProperty("--scrollAmount",scrollPercent);
}


document.addEventListener("scroll",processScroll);

