status = "";

 function setup() {
     canvas = createCanvas(600 , 400);
     canvas.center();
     video = createCapture(VIDEO);
     video.hide();
 }
 function start() {
     objectDetector = ml5.objectDetector('cocossd' , modelloaded)
    document.getElementById("status").innerHTML = "Status : detecting objects";
 }
 function modelLoaded() {
     console.log("Model Loaded!")
     status = true;
 }
 function draw() {
     image(video ,0 ,0 ,600 ,400);
}