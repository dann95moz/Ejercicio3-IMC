
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var IMC

btn.onclick = function() {
  modal.style.display = "block";
  var height= document.getElementById("height").value
  var weight= document.getElementById("weight").value;
  var age= document.getElementById("age").value;
  var sex
  var IMC=  weight/(height*height)
  var fixed= IMC.toFixed(2)
  document.getElementById("resultado").innerHTML=fixed

  if (document.getElementById("man").src.match("/img/man.png") ){
    sex= "mujer"
  }
  else {
    sex="hombre"
  }
  if (fixed <18.5 ) {
    var img = document.createElement("img");
    img.src = "/img/arrow-up-s-fill.svg";
    var div= document.getElementById("arrow-indicator")
    div.style.marginLeft="38%"
    div.appendChild(img)
  }
  if (fixed >= 18.5 && fixed<=24.9) {
    var img = document.createElement("img");
    img.src = "/img/arrow-up-s-fill.svg";
    var div= document.getElementById("arrow-indicator")
    div.style.marginLeft="46%"
    div.appendChild(img)
  }
  if (fixed >=25 && fixed<=29.9) {
    var img = document.createElement("img");
    img.src = "/img/arrow-up-s-fill.svg";
    var div= document.getElementById("arrow-indicator")
    div.style.marginLeft="52%"
    div.appendChild(img)
  }
  if (fixed >=30 && fixed<=39.9) {
    var img = document.createElement("img");
    img.src = "/img/arrow-up-s-fill.svg";
    var div= document.getElementById("arrow-indicator")
    div.style.marginLeft="56%"
    div.appendChild(img)
  }
  if (fixed >40) {
    var img = document.createElement("img");
    img.src = "/img/arrow-up-s-fill.svg";
    var div= document.getElementById("arrow-indicator")
    div.style.marginLeft="61%"
    div.appendChild(img)
  }


localStorage.setItem("height", height)
localStorage.setItem("weight",weight)
localStorage.setItem("age",age)
localStorage.setItem("sex",sex)
localStorage.setItem("IMC", fixed)
var storedIMC= localStorage.getItem("IMC")
var storedHeight = localStorage.getItem("height")
var storedWeight = localStorage.getItem("weight")
var storedAge = localStorage.getItem("age")
var storedSex= localStorage.getItem("sex")
console.log(storedHeight)
console.log(storedWeight)
console.log(storedAge)
console.log(storedSex)
console.log(storedIMC)




}



    
  
span.onclick = function() {
  modal.style.display = "none";
  document.location.reload();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.location.reload();
  }
}



function changeColorM(){ 
    
    if (document.getElementById("man").src.match("/img/man.png") ){
        document.getElementById("man").src="img/picked-man.png"
        document.getElementById("woman").src="img/woman.png"
       
    }
    else{
        document.getElementById("man").src= "/img/man.png"
    }
}
function changeColorW(){
   
    if (document.getElementById("woman").src.match("/img/woman.png") ){
        document.getElementById("woman").src="img/picked-woman.png"
        document.getElementById("man").src="img/man.png"
       
    }
    else{
        document.getElementById("woman").src= "/img/woman.png"
    }
}
