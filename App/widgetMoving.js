/* 
const widget = document.querySelector('.widget');
let drawActive = false;

let divX;
let divY;

let insertDivX;
let insertDivY;

widget.addEventListener('mousedown', (e) => {
 widget.style.opacity = "0.5";
 drawActive = !drawActive;


 insertDivX = e.offsetX;
 insertDivY = e.offsetY;
 console.log(insertDivX, insertDivY);

})

widget.addEventListener('mousemove', (e) => {
 if (drawActive) {
  divX = e.clientX - insertDivX;
  divY = e.clientY - insertDivY;
  widget.style.left = `${divX}px`;
  widget.style.top = `${divY}px`;
 }
})

widget.addEventListener('mouseup', () => {
    widget.style.opacity = "1";
    drawActive = !drawActive;

}) */