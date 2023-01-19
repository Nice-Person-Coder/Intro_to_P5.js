function preload(){
}

function setup() {
    canvas= createCanvas(1100, 720);
    canvas.position(250, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 1100, 720);
    circle(80, 80, 110);
    circle(1000, 80, 110);
    circle(80, 600, 110);
    circle(1000, 600, 110);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(135, 60, 812, 50);
    rect(135, 580, 812, 50);
    rect(60, 135, 50, 410);
    rect(980, 135, 50, 410);
    fill(0, 255, 0);
    stroke(0, 255, 0);
   
}

function take_snapshot() {
    save ('my_pic.png');
}