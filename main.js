function preload(){
    clown_nose = loadImage('https://i.postimg.cc/y8cffggf/114-1147898-clown-nose-png-clip-art-clown-nose-transparent.png');
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function draw(){
    image(video,0,0,300,300);
    Fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}
