function textChange1(){

    document.getElementById('h2').innerHTML = "Lord Of The Rings";
}

function textChang2(){

    document.getElementsByClassName('h1')[1].innerHTML = "Bill gates";
}

function textChange3(){
    document.getElementById('d').innerHTML = Date();
}

function textChange4(){
    var text = " Kairo ";
    document.getElementById('a').innerHTML = text.repeat(5);
}

function textChange5(){
    document.getElementById('b').style.color = "red";
}

function textChange6(){
    document.getElementById('c').style.fontSize = "80px";
}

function textChange7(){
    document.getElementById('e').style.border = "2px solid red";
}

function imageOne(){
    document.getElementById('im').src = "images/img1.png";
}

function imageTwo(){
    document.getElementById('im').src = "images/img2.png";
}

function imageThree(){
    document.getElementById('im').src = "images/img3.png";
}

$(document).ready(function(){
   // alert
   $('#alert').click(function(){
       alert("Warning!!!!!!!!");
   })
})

$(document).ready(function(){
    // alert
    $('.alert').click(function(){
        alert("Take Cautions !!!!")
    });
})


let a, b, c;  
a = 20;        
b = 15;        
c = a + b; 

document.getElementById("add").innerHTML =
"The value of c is " + c + ".";  

function image4(){
    document.getElementById('blb').src = "images/bulb2.jpg";
}
function image5(){
    document.getElementById('blb').src = "images/bulb1.jpg";
}
