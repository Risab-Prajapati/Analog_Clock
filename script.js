let hr = document.querySelector("#hour");
let min = document.querySelector("#minute");
let sec = document.querySelector("#second");

function displayTime() {
  let date = new Date();

  // Getting houe, minute and second from the date every seconds
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  // For rotation
  let hrotation = 30 * hh + mm / 2;
  let mrotation = 6 * mm;
  let srotation = 6 * ss;

  hr.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform = `rotate(${mrotation}deg)`;
  sec.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displayTime, 1000);
