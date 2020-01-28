function hideAll(){
    var a = document.getElementById("home");
    var b = document.getElementById("services");
    var c = document.getElementById("about");
    var d = document.getElementById("contact");
    var e = document.getElementById("tech");
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
    e.style.display="none";
}

function showHome() {
    hideAll();
    document.getElementById("home").style.display="block";
}

function showTech() {
    hideAll();
    document.getElementById("tech").style.display="block";
}

function showServices() {
    hideAll();
    document.getElementById("services").style.display="block";
}

function showAbout() {
    hideAll();
    document.getElementById("about").style.display="block";
}

function showContact() {
    hideAll();
    document.getElementById("contact").style.display="block";
}

function showHighlight(){
    var btns = document.getElementsByClassName("top-text");
    console.log(btns);
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active-main");
          current[0].className = current[0].className.replace(" active-main", "");
          this.className += " active-main";
          console.log(current);
        });
    }
    showHome();
}
