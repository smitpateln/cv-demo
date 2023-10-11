
function f() {
  console.log("hello");
  document.getElementById('smit').innerText = " Experience  \n 1 year";
 setTimeout(function(){
  document.getElementById('smit').innerText = "State  \n Gujarat"
 },1000)
 setTimeout(function(){
  document.getElementById('smit').innerText = "Age \n 19"
 },3000)
 setTimeout(function(){
  document.getElementById('smit').innerText = "Nationality  \n Indian"
 },5000)
 setTimeout(function(){
  document.getElementById('smit').innerText = "Language  \n Hindi, Gujarati, English"
 },7000)
 setTimeout(f,9000);

}
function h() 
  {
    document.getElementById('smit').style.color="black"
  }



