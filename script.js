// playlist = {
//   'song_1': 'song/005.mp3',
  
// }

var play = document.getElementById("play");
var music =  document.querySelector("audio");
const img = document.getElementById("123");
var extra = document.getElementById("extra");
var playPaushBtn = document.getElementById("playPaushBtn");

var extraSecond = document.getElementById("extraSecond");
var playPaushBtnSecond = document.getElementById("playPaushBtnSecond");
var playSecond = document.getElementById("playSecond");


img.classList.add("anime");
extra.classList.add("pulse")
extraSecond.classList.add("pulse")

// //for pause to play btn
// let isplaying = true;
//  const pausemusic = () =>{
//   isplaying = false;
//   music.pause();
//   play.classList.replace( 'bi-pause-circle','bi-play-circle');
//   img.classList.remove("anime");
//   play.classList.remove("pulse")
//  };

// //for play to payse btn
// const playmusic = () =>{
//   isplaying = true;
//   music.play();
//   play.classList.replace( 'bi-play-circle','bi-pause-circle');
//   img.classList.add("anime");
//   play.classList.add("pulse")
//  };

//  play.addEventListener('click', () => {
//   if(isplaying == true){
//     pausemusic();
//   }
//   else{
//     playmusic();
//   }
//  }
//  );




//for pause to play btn
let isplaying = true;
 const pausemusic = () =>{
  isplaying = false;
  music.pause();
  play.classList.replace( 'bi-pause-circle','bi-play-circle');
  playSecond.classList.replace( 'bi-pause-circle','bi-play-circle');
  img.classList.remove("anime");
  extra.classList.remove("pulse");
  extraSecond.classList.remove("pulse");
 };

//for play to payse btn
const playmusic = () =>{
  isplaying = true;
  music.play();
  play.classList.replace( 'bi-play-circle','bi-pause-circle');
  playSecond.classList.replace( 'bi-play-circle','bi-pause-circle');
  img.classList.add("anime");
  extra.classList.add("pulse");
  extraSecond.classList.add("pulse");
 };

 playPaushBtn.addEventListener('click', () => {
  if(isplaying == true){
    pausemusic();
  }
  else{
    playmusic();
  }
 }
 );

 playPaushBtnSecond.addEventListener('click', () => {
  if(isplaying == true){
    pausemusic();
  }
  else{
    playmusic();
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

// window.onpause = function () {
//   play_audio('stop');
// }

// window.onclose = function () {
//   play_audio('stop');
// }



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



// visitCount

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
visitCount = Number(visitCount) + 1;
localStorage.setItem("page_view", visitCount);
} else {
visitCount = 1;
localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
visitCount = 1;
localStorage.setItem("page_view", 1);
counterContainer.innerHTML = visitCount;
});

