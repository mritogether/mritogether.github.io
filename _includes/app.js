function draw() {
    const canvas = document.querySelector('#mapcanvas');
        // const canvas = document.querySelectorAll("canvas");


    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // var img = new Image();   // Create new img element
    // img.src = '/images/worldmap.png';
    var img = document.getElementById("map");
    // img.setAttribute("hidden", "hidden");
    // set line stroke and line width
    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 5;
    ctx.drawImage(img, 0, 0); 
    // draw a red line
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(100, 100);
    // ctx.stroke();

}

document.addEventListener("DOMContentLoaded", function(event) {
    draw();
});