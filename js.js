window.onload = function(){
    window.setInterval(function(){
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
    },1000);
  };
  function myFunction() {
    alert('Привет');
}