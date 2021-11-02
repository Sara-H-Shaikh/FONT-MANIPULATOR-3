diffrence="";
LeftwristX=0;
RightwristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(600,500);
    video.position(70,85);
    canvas=createCanvas(550,450);
    canvas.position(750,110);
 
    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on("pose", got_poses);

}
function model_loaded()
{
    console.log("Model Loaded"); 
}

function got_poses(results)
{
    if(results.length>0)
    {
        console.log(results);   
        LeftwristX = results[0].pose.leftWrist.x;
        RightwristX = results[0].pose.rightWrist.x;
        diffrence = floor(LeftwristX-RightwristX);
    } 
}

function draw() 
{
    background('#969A97');
    textSize(diffrence);
    fill('#F90093');
    text('Sara',50,300);
}
