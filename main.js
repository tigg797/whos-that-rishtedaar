//https://teachablemachine.withgoogle.com/models/3DrZchUpI/
//Remember to make identify button opaque again!
//Remember to change function names!

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:95
})

camera = document.getElementById("camera");

Webcam.attach('#camera')

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("person").innerHTML = "<img id='captured_image' src='"+data_uri+"'/>"
    });
}

console.log("the ml5 version qu'on est using is:"+ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3DrZchUpI/model.json", modelLoaded);
//linking ml5 and teachable machine je crois