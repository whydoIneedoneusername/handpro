

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DVAqMhtW2/model.json', modelReady);
    
}



Webcam.set({
  width:350,
  height:300,
  image_format:'png',
  png_quality:90,
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
console.log("ml5 version", ml5.version)
function take_snapshot()
{
  Webcam.snap(function(data_uri))

  {
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    
  }

}