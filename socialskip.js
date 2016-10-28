document.getElementById('btn').addEventListener("click", makeExperiment)

function makeExperiment() {
        var videoId = document.getElementById("videoid").value
        console.log(videoId)
        document.getElementById("experiment").innerHTML = '\
        <h2>Press the START button to start the experiment</h2>\
        <iframe src="http://www.socialskip.org/watch?videoId=' + videoId +'" width="600px" height="450px">\
        </iframe>'
 }