var one=document.querySelector("#one");
var two=document.querySelector("#two");
var reset=document.querySelector("#reset");
var inp=document.querySelector("#inp");
var score=document.querySelector("#value");
var first=document.querySelector("#first");
var sec=document.querySelector("#sec");


var p1score=0;
var p2score=0;
var gameover=false;
var winningscore=5; 
 
one.addEventListener("click",function(){ 
	if(!gameover){
    p1score++;
    if(p1score===winningscore){
    	first.classList.add("winner"); 
    	gameover=true;
    	alert("Player 1 Won the game");
    }
    first.textContent=p1score;
}

});

two.addEventListener("click",function(){
 
  	if(!gameover){
    p2score++;
    if(p2score===winningscore){
    	sec.classList.add("winner");
    	gameover=true;
    	alert("Player 2 Won the game");
    }
    sec.textContent=p2score;
   }
});

reset.addEventListener("click",function(){
	p1score=0;
	p2score=0;
	first.textContent=0;
	sec.textContent=0;
	first.classList.remove("winner");
	sec.classList.remove("winner");
	gameover=false;
});
 
inp.addEventListener("change",function(){
     score.textContent=this.value;
     winningscore=Number(this.value); 
     p1score=0;
	p2score=0;
	first.textContent=0;
	sec.textContent=0;
	first.classList.remove("winner");
	sec.classList.remove("winner");
	gameover=false;
 });