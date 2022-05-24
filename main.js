Webcam.set({
width : 350,
height : 300,
image_format : 'png',
png_quality : 90
})

Camera = document.getElementById("camera")

Webcam.attach(Camera)

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id'captured_image' src='"+data_uri+"'>"
    }
    )
}

console.log("ml5.version"+ml5.version )

Model = ml5.imageClassifier("https://storage.googleapis.com/tm-model/_in5R7JhN/model.json", modelLoaded )

function modelLoaded(){
    console.log("modelLoaded")
}

function check(){
    img = document.getElementById("captured_image")
    Model.classify(img, gotResult)
}

function gotResult(error, results){
    if (error){
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence;
    }
}
