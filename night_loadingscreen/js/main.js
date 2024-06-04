$(document).ready(function () {
  $("body").addClass("transition");
  setTimeout(function() {
    $("body").removeClass("transition");
  }, 100);

  $("#video").hide();
  $(".other").hide();
  setTimeout(function(){
    $("#video").fadeIn(750);
    $(".other").fadeIn(750);
    $('#myAudio').attr('src', randomSong())
  }, 1000);

});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var mySongs = [
  'm.mp3',
  'm2.mp3',
  'm3.mp3',
  'm4.mp3',
  'm5.mp3',
  'm6.mp3',
  'm7.mp3',
]

function randomSong(){
  
  myString = './audio/'+mySongs[getRandomInt(mySongs.length)]
  return myString
}

(function () {

  var words = [
    "Naciśnij ALT aby użyć oczka.",
    "Pamiętaj o przestrzeganiu regulaminu!",
    "Poszukuj interakcji ze stojącymi pedami.",
    "Komenda /dostosuj pozwala na idealne ustawienie Twojej postaci np. do zdjęcia.", 
    "Komenda /streamermode wycisza całą muzykę puszczaną przez graczy.", 
    "Komenda /streamuje wyświetla nad Twoją postacią, że aktualnie prowadzisz live z rozgrywki.", 
    "F1 -> otwiera Ci główne menu postaci.",
    "/propfix naprawi Twoją postać, gdy przedmiot zostanie Ci w ręce",
    "/seat 1/2/3/4 pozwala, abyś przesiadł się w pojeździe na inne siedzenie.",
    "Użyj /r aby odpowiedzieć administratorowi.",
    "Możesz skontaktować się z administracją komendą /report."
  ],

  i = 0;

  setInterval(function(){ $('#changemsg').fadeOut(function(){
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    }); }, 5000)

})();

function hideLoading() {
  $.post('https://77-loading/hideLoading', JSON.stringify({}));
}
// xd podjebali z 77
window.addEventListener('message', (event) => {
  if (event.data.stop) {
      hideLoading();
  }
})
// leak by loxitopka
const audio = document.getElementById('video')
app.audioElement = audio;
app.audioElement.volume = 0;