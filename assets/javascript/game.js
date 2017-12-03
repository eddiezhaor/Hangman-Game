var win=0;
var images=["assets/images/cat.jpg","assets/images/cat2.jpg","assets/images/flower.jpg","assets/images/wolf.jpg","assets/images/cool.jpg","assets/images/dog.jpeg","assets/images/funny1.jpeg","assets/images/exam.jpg"];
var num = Math.floor(Math.random() * images.length)
function start(){
var words=["addition",    "adjustment",    "advertisement",    "after",    "again",    "against",    "agreement",    "air",    "all",    "almost",    "among",    "amount",    "amusement",    "and",    "angle",    "angry",    "animal",    "answer",    "ant",    "any",    "apparatus",    "apple",    "approval",    "arch",    "argument",    "arm",    "army",    "art",    "as",    "at",    "attack",    "attempt",    "attention",    "attraction",    "authority",    "automatic",    "awake",    "baby",    "back",    "bad",    "bag",    "balance",    "ball",    "band",    "base",    "basin",    "basket",    "bath",    "be",    "beautiful",    "because",    "bed",    "bee",    "before",    "behaviour",    "belief",    "bell",    "bent",    "berry",    "between",    "bird",    "birth",    "bit",    "bite",    "bitter",    "black",    "blade",    "blood",    "blow",    "blue",    "board",    "boat",    "body",    "boiling",    "bone",    "book",    "boot",    "bottle",    "box",    "boy",    "brain",    "brake",    "branch",    "brass",    "bread",    "breath",    "brick",    "bridge",    "bright",    "broken",    "brother",    "brown",    "brush",    "bucket",    "building",    "bulb",    "burn",    "burst",    "business",    "but",    "butter",    "button",    "by",    "cake",    "camera",    "canvas",    "card",    "care",    "carriage",    "cart",    "cat",    "cause",    "certain",    "chain",    "chalk",    "chance",    "change",    "cheap",    "cheese",    "chemical",    "chest",    "chief",    "chin",    "church",    "circle",    "clean",    "clear",    "clock",    "cloth",    "cloud",    "coal",    "coat",    "cold",    "collar",    "colour",    "comb",    "come",    "comfort",    "committee",    "common",    "company",    "comparison",    "competition",    "complete",    "complex",    "condition",    "connection",    "conscious",    "control",    "cook",    "copper",    "copy",    "cord",    "cork",    "cotton",    "cough",    "country",    "cover",    "cow",    "crack",    "credit",    "crime",    "cruel",    "crush",    "cry",    "cup",    "cup",    "current",    "curtain",    "curve",    "cushion",    "damage",    "danger",    "dark",    "daughter",    "day",    "dead",    "dear",    "death",    "debt",    "decision",    "deep",    "degree",    "delicate",    "dependent",    "design",    "desire",    "destruction",    "detail",    "development",    "different",    "digestion"];
var remaining=12;
var mark="-"
var line=[];
var html="";
var lost="";
var keyb="";
displayimg();
var guessword1=words[Math.floor(Math.random()*words.length)];
var guessword=guessword1.split("");

for (var i=0; i<guessword.length;i++){
    line.push(mark);
}

var line1=line.join().replace(/,/g,"");
document.onkeyup=function(event){
var a=String.fromCharCode(event.keyCode).toLowerCase();

function replaceAt(x,y,z){
    var mystr=z.substr(0,x)+y+z.substr(x+1);
    return mystr;
}
if(line1!==guessword1){
	if(guessword1.indexOf(a)<0 && remaining>0){
		remaining--;
		if(keyb.indexOf(a)<0){
		keyb=keyb+" "+a;
	};
	html=`<div><h3>Letter Guessed${keyb}</h3></div>`;
   document.getElementById("my").innerHTML=html;
	};
	
	for(var j=0;j<guessword.length;j++){
		if(a===guessword[j]){
			line1=replaceAt(j,a,line1);
			
		};

		};

	};

	


if(line1===guessword1){
	win++;

  	stop();
   
  }
  html=`<div><h2>number of guesses remaining: ${remaining}</h2></div>`;
   document.getElementById("that").innerHTML=html;

   html=`<div><h2>Current Word: ${line1}</h2></div>`;
   document.getElementById("this").innerHTML=html;
 
  html=`<div><h2>Wins: ${win}</h2></div>`;
  document.getElementById("her").innerHTML=html;

  if(remaining<=0){
  	alert("You lose!!");
  	document.write('<img src="assets/images/hanging.gif"/>');
  	
  }	
  		 
}
	html=`<div><h3>Letter Guessed${keyb}</h3></div>`;
   document.getElementById("my").innerHTML=html;
	
	html=`<div><h2>number of guesses remaining: ${remaining}</h2></div>`;
   document.getElementById("that").innerHTML=html;
   
   html=`<div><h2>Current Word: ${line1}</h2></div>`;
   document.getElementById("this").innerHTML=html;
 
 	 html=`<div><h2>Wins: ${win}</h2></div>`;
  document.getElementById("her").innerHTML=html;
  
  document.getElementById("he").innerHTML=`Press "Enter" to continue`;
}
function stop(){
	start();
};
function displayimg(){
	document.getElementById("myimg").innerHTML=`<img src="${images[num]}">`;
}
start();
