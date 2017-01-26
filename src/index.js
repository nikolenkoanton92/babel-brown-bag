const INTERVAL_NUMBER = 1000;
const el = document.getElementById("main");
let counter = 0;

setInterval(()=> {
  counter++;
  el.innerHTML = counter;
},INTERVAL_NUMBER)
