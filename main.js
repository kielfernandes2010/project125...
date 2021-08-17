noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(450, 500);
    

    canvas=createCanvas(500,500);
    canvas.position(700, 150);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        
    }
}

function draw(){
    background('#969A97');
    textSize(difference);
    fill('#F90093');
    textSize('Kiel', 50, 400);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}




