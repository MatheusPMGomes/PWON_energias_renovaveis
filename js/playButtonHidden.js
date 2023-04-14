$(document).ready(function () {
    const video = document.getElementById('main-video-js');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.classList.remove("paused")

        }
        // else {
        //     video.pause();
        //     playButton.classList.add("paused")

        // }
    });

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.classList.remove("paused")

        }
        // else {
        //     video.pause();
        //     playButton.classList.add('paused')

        // }
    })

});