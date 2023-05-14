leftWristX=0;
rightWristX=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(560,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    background('#502552');
    text('This is my creation' , 40,200);
    textSize(difference);
    fill('yellow');
  

}



function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
      
        rightWristX = results[0].pose.rightWrist.x;
       
        difference=floor(leftWristX - rightWristX);
        
        console.log('leftWristX = ' + leftWristX + 'rightWristX' + rightWristX + 'difference' + difference);
    }
}
