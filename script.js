document.addEventListener('keydown',function(event){
    switch(event.key){
    case 'a':
    setTimeout(myf1,1000);
    break;
    case 's':
    setTimeout(myf2,1000);
    break;
    case 'd':
    setTimeout(myf3,1000);
    break;
    case 'f':
    setTimeout(myf4,1000);
    break;
    case 'g':
    setTimeout(myf5,1000);
    break;
    case 'h':
    setTimeout(myf6,1000);
    break;
    case 'j':
    setTimeout(myf7,1000);
    break;
    }
});
document.getElementById('my1').onclick = function(){setTimeout(myf1,1000);};
function myf1(){
  var a = new Audio('baraban.mp3');
  a.play();
}
document.getElementById('my2').onclick = function(){setTimeout(myf2,1000);};
function myf2(){
  var a = new Audio('gitara.mp3');
  a.play();
}
document.getElementById('my3').onclick = function(){setTimeout(myf3,1000);};
function myf3(){
  var a = new Audio('gitara2.mp3');
  a.play();
}
document.getElementById('my4').onclick = function(){setTimeout(myf4,1000);};
function myf4(){
  var a = new Audio('pianino.mp3');
  a.play();
}
document.getElementById('my5').onclick = function(){setTimeout(myf5,1000);};
function myf5(){
  var a = new Audio('arab.mp3');
  a.play();
}
document.getElementById('my6').onclick = function(){setTimeout(myf6,1000);};
function myf6(){
  var a = new Audio('trembita.mp3');
  a.play();
}
document.getElementById('my7').onclick = function(){setTimeout(myf7,1000);};
function myf7(){
  var a = new Audio('gitara2.mp3');
  a.play();
}