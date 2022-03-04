var canvas = document.getElementById("myCanvas");
var drawer = canvas.getContext("2d");
var randomLine = document.getElementById("randomLine");
var straightLine = document.getElementById("straightLine");
var rect = document.getElementById("rect");
var Erase = document.getElementById("Erase");
var circ = document.getElementById("circ");
var colorLine = document.getElementById("colorLine");
let flagNumber;
let widthsize;
let x1, y1;
function straightLineFunc(colorText) {
    console.log(colorText);
        canvas.addEventListener("mousedown", (e) => {
            if (flagNumber == 0) {
                drawer.beginPath();
                drawer.lineWidth = 2;
                drawer.strokeStyle = colorText;
                drawer.moveTo(e.offsetX, e.offsetY);
            }
            else if(flagNumber == 1)
            {

                x1 = e.offsetX;
                y1 = e.offsetY;
                drawer.beginPath();
                drawer.lineWidth = widthsize;
                drawer.strokeStyle = colorText;
                drawer.moveTo(e.offsetX, e.offsetY);
                flag = true;
            }
            else if(flagNumber == 2)
            {
                x1 = e.offsetX;
                y1 = e.offsetY;
            }
            else if(flagNumber == 3)
            {
                x1 = e.offsetX;
                y1 = e.offsetY;
            }

        })
        canvas.addEventListener("mouseup", (e) => {


            if (flagNumber == 0) {
                drawer.lineTo(e.offsetX, e.offsetY);
                drawer.stroke();
            }
            else if(flagNumber == 1)
            {

                flag = false;
            }
            else if(flagNumber == 2)
            {
                drawer.beginPath();
                drawer.lineWidth = 2;
                drawer.strokeStyle = colorText;

                drawer.fillStyle = "red";
                drawer.rect(x1, y1, e.offsetX - x1, e.offsetY - y1);

                drawer.stroke();
            }
            else if(flagNumber == 3)
            {
                drawer.beginPath();
                drawer.lineWidth = 2;
                drawer.strokeStyle = colorText;
                var r = Math.sqrt((e.offsetX - x1) + Math.pow((e.offsetY - y1), 2))
                drawer.arc(x1, y1, r, 0, 2 * Math.PI);
                drawer.stroke();
            }

        })

        canvas.addEventListener("mousemove", (e) => {
            if (flagNumber == 1) {
                if (flag) {
                    drawer.lineTo(e.offsetX, e.offsetY);
                    drawer.stroke();
                }
            }

        })

  


}

straightLine.addEventListener("click", () => {
    flagNumber = 0;
    straightLineFunc(colorLine.value);



});

randomLine.addEventListener("click", () => {
    flagNumber = 1;
    widthsize=2
    straightLineFunc(colorLine.value);

});


rect.addEventListener("click", () => {
    flagNumber = 2;
    straightLineFunc(colorLine.value);


});



circ.addEventListener("click", () => {

    flagNumber = 3;
    straightLineFunc(colorLine.value);



});
Erase.addEventListener("click", () => {
    flagNumber = 1;
    widthsize=10
    straightLineFunc("white");

})