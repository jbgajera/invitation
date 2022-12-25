playlist = {
  'song_1': '001.mp3',
  'song_2': '002.mp3',
  'song_3': '003.mp3',
  'song_4': '004.mp3',
}


// let playlist = document.getElementsByClassName('song');
// console.log(playlist);

$('#playsong').click(function () {
  play_audio('play');
})

window.onclick = function () {
  play_audio('play');
}

$(window).scroll(function () {
  play_audio('play');
})

window.onload = function () {
  play_audio('play');
}

window.onpause = function () {
  play_audio('stop');
}

window.onclose = function () {
  play_audio('stop');
}

let min = 0;
let max = 3;
let random =
  Math.floor(Math.random() * (max + 1 - min)) + min;


function play_audio(task) {
  if (task == 'play') {
    $(".my_audio").trigger('play');
  }
  if (task == 'stop') {
    $(".my_audio").trigger('pause');
    $(".my_audio").prop("currentTime", 0);
  }
}

keys = Object.keys(playlist);
$('.my_audio').append("<source id='sound_src' src=" + playlist[keys[random]] + " type='audio/mpeg'>");


count = 0;
$('.my_audio').on('ended', function () {
  count++;
  $("#sound_src").attr("src", playlist[keys[count]])[0];
  $(".my_audio").trigger('load');
  play_audio('play');
});


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
