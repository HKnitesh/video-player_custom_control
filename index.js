const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timeStamp = document.getElementById("timeStamp");



// Functions

// play and pause video
toggleVideoStatus = () => {
    if (video.paused) {     //here   '.paused'  is a properties 
        video.play();        //here   '.play()'  is a method 
    } else {
        video.pause();       // '.pause()'  is a method.
    }
}

// update Play/pause icon
updatePlayIcon = () => {
    if (video.paused) {
        play.innerHTML = '<i class="fa-solid fa-play fa-2xl"></i>';
    } else {
        play.innerHTML = '<i class="fa-solid fa-circle-pause fa-2xl" style="color: #e8e8e8;"></i>';
    }
}

// update video progress
updateProgress = () => {

    progress.value = (video.currentTime / video.duration) * 100;  // the running bar workes on %        
    // video.currentTime --> print the current video time
    // video.duration    -->it return the total duration of video in second

    // Get Minutes
    var minute = Math.floor(video.currentTime / 60);
    if (minute < 10) {
        minute = '0' + String(minute);
    }

    // Get Seconds
    var second = Math.floor(video.currentTime % 60);
    if (second < 10) {
        second = '0' + String(second);
    }

    timeStamp.innerHTML = `${minute}:${second}`;
}

//  set video time to progress
stopVideo = () => {
    if (!video.paused) {
        video.pause();
    }
}

// stop video
setVideoProgress = () => {
    video.currentTime = (+progress.value * video.duration) / 100;
    console.log(video.duration);

   
}







//  Event Listeners

video.addEventListener("click", toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
