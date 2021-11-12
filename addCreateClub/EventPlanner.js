function menuOpen() {
    document.getElementById("menu1").style.display = "none";
    document.getElementById("menu2").style.display = "block";
    document.getElementById("nav").style.cssText = "position:absolute;left:0;top:0;padding-top:250px;padding-bottom:160%;width:350px;background-color: black;color: white;display: flex;flex-direction: column;";
}

function menuClose(){
document.getElementById("menu2").style.display = "none";
document.getElementById("menu1").style.display = "block";
document.getElementById("nav").style.cssText = "";
}

function addOpen() {
    document.getElementById("cMain").style.display = "none";
    document.getElementById("cAdd").style.display = "block";
}

function addClose() {
  document.getElementById("cMain").style.display = "block";
  document.getElementById("cAdd").style.display = "none";
}

function createOpen() {
    document.getElementById("cMain").style.display = "none";
    document.getElementById("cCreate").style.display = "block";
}

function createClose() {
  document.getElementById("cMain").style.display = "block";
  document.getElementById("cCreate").style.display = "none";
}
