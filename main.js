//Press start!
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
}) ;
//camera
camera = document.getElementById("camera");

Webcam.attach( '#camera' );

//takin' snaps
function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'">';
    });
}
console.log('ml5 version:', ml5.version);

//classify
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9BehrucAO/',modelLoaded);
console.log(classifier)
function check(){

}
function modelLoaded(){
console.log("Model is loaded!")
}
function gotResult(error, results){
    if(error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}