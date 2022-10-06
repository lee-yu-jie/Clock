const secondHand = document.querySelector('.secondHand')
const minHand = document.querySelector('.minHand')
const hourHand = document.querySelector('.hourHand')
const mouse = document.querySelector('.mouse');

function getDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const mins = now.getMinutes()
  const hours = now.getHours()
  const secondsDegress = ((seconds / 60) * 360);
  // 時針和分針隨著秒移動會偏移，每一分鐘6度，6度又要切給60格(秒)
  const minsDegress  = ((mins / 60) * 360) + ((seconds * 6 / 60));
  const hoursDegress  = ((hours / 12) * 360) + ((mins * 30 / 60));
  secondHand.style.transform = `rotate(${secondsDegress}deg)`
  minHand.style.transform = `rotate(${minsDegress}deg)`
  hourHand.style.transform = `rotate(${hoursDegress}deg)` 
}

setInterval(getDate, 1000)

document.addEventListener("mousemove", function(e){
    var oLeft = e.clientX;  
    var oTop = e.clientY;     
    mouse.style.display = "block";       
    mouse.style.left = oLeft + "px"; 
    mouse.style.top = oTop + "px"; 
});

