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

function modelLoaded() {
    console.log("The model is loaded");
}

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("person").innerHTML = "<img id='captured_image' src='"+data_uri+"'/>"
    });
    document.getElementById("identify_button").style.opacity=1;
}

console.log("the ml5 version qu'on est using is:"+ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3DrZchUpI/model.json", modelLoaded);
//linking ml5 and teachable machine je crois

//Part 3:

function identify() {
    image = document.getElementById("captured_image");
    classifier.classify(image,gotResult);
    //classify(document.gEBI(...))
}

function gotResult(error, result) {
    if(error){
        console.error(error); //first parameter
    } else {
        console.log(result); //second parameter
        var cestquoi = result[0].label
        var celuici = " "
        if(cestquoi == "A") {
            celuici = "Mumma"
        } else if(cestquoi == "B") {
            celuici = "Papa"
        } else if(cestquoi == "C") {
            celuici = "Raj"
        } else if(cestquoi == "D") {
            celuici = "Dadi"
        }
        document.getElementById("personspan").innerHTML=celuici;
        var percentAcc = result[0].confidence.toFixed(3);
        percentAcc = percentAcc*100+"%";
        document.getElementById("confidentspan").innerHTML=percentAcc;
    }
};

