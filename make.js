var acc = document.getElementsByClassName("anspanel");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.nextElementSibling.classList.toggle("ansq");
  }
}
function submt() {
    var itm = document.getElementById("para").lastChild;
    var cln = itm.cloneNode(true);
    document.getElementById("quizcode").appendChild(cln);
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("list-group");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
<script> 
if (window.location.href === "https://rajendraks.github.io/quiz-s-js/make.js") { 
        window.location.href = "http://www.example.com";
  }
</script>
