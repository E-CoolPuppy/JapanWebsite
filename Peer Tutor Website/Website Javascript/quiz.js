function flag() {
  document.getElementById("flag").innerHTML="The flag of Japan, where the red circle represents the rising sun.";
    }

function flag2() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png");
  x.setAttribute("alt", "Japan Flag");
  x.setAttribute("width","40%");
  x.setAttribute("height","40%");
  document.body.appendChild(x);
    }

function city() {
  document.getElementById("city").innerHTML="Yokohama (横浜) - it has a population of 3,690,000 people!";
}

function religion() {
  document.getElementById("religion").innerHTML="Buddhism (仏教) and Shinto (神道)";
    }

function sport() {
  document.getElementById("sport").innerHTML="Baseball (野球)";
    }

function bomb() {
  document.getElementById("bomb").innerHTML="Hiroshima (広島市) and Nagasaki (長崎市)";
    }

function time(){
  document.getElementById("time").innerHTML="Japan is 13 hours ahead of New York.";
}
