var bucol=["red", "blue", "green", "yellow"];
var gamePattern=[];
var clpatt=[];

var started= false;
var level = 0;
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+ level);
    seq();
    started= true;
  }
});


$(".btn").click(function(){
  var chos=$(this).attr("id");
  clpatt.push(chos);
  playSound(chos);
  animatePress(chos);
  chean(clpatt.length-1);
});

function chean(currentLevel){
  if(gamePattern[currentLevel] === clpatt[currentLevel]){
    if(clpatt.length === gamePattern.length){
      setTimeout(function(){
        seq();
      },1000);
    }
  }else {

    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game over,Press key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    startagain();
  }
}

function seq() {
  clpatt=[];
  level++;
  $("#level-title").text("Level "+ level);
  var rano=Math.floor(Math.random()*4);
  var randco=bucol[rano];
  gamePattern.push(randco);
  $("#" + randco).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randco);
}

function playSound(name){
  var audio= new Audio("music/" + name + ".mp3");
  audio.play();
}

function animatePress(curcol){
  $("#" + curcol).addClass("pressed");
  setTimeout(function(){
    $("#" + curcol).removeClass("pressed");
  },100);
}


function startagain(){
  level=0;
  gamePattern=[];
  started= false;
}