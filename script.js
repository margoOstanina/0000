var min;
var max;

var mininput = document.getElementById("min");
var maxinput = document.getElementById("max");

upmax();
upmin();

maxinput.addEventListener("keyup", upmax);
mininput.addEventListener("keyup", upmin);

function upmax(){
    max = maxinput.value;

}

function upmin(){
    min = mininput.value;
}

var genNumber = document.getElementById("tabel");

var amount = document.getElementById("slider");
amount = amount.value;

var slide = document.getElementById("slider");
var slideVol = document.getElementById("slidervol");
slideVol.innerHTML = amount +"чисел";

slide.addEventListener("mouseup", update);

function update(){
    amount =  slide.value;
    slideVol.innerHTML = amount +" чисел";

}

function generate(){
    var output = "";
    for (var i=0; i<amount; i++){
    var gen=parseInt(Math.random()*(max-min+1));
    gen+=parseInt(min);
    output=output+" "+gen;
    }
    genNumber.innerHTML=output;
}