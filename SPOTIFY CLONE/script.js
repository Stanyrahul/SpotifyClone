// Getting elements
const playPauseBtn = document.getElementById('playPauseBtn');
const audioPlayer = document.getElementById('audioPlayer');
const progressBar = document.querySelector('.progress-bar');
const track = document.querySelector('.track');
const currentTimeDisplay = document.querySelector('.curr-time');
const totalTimeDisplay = document.querySelector('.tot-time');
const volumeControl = document.querySelector('.track');
const heartIcon = document.querySelector('.fa-heart');
const clockIcon = document.querySelector('.fa-clock');

// Play/Pause Button
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.classList.replace('fa-play', 'fa-pause'); // Change icon to pause
    } else {
        audioPlayer.pause();
        playPauseBtn.classList.replace('fa-pause', 'fa-play'); // Change icon to play
    }
});

// Track Progress Bar Update
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    // Update progress bar
    const progressPercentage = (currentTime / duration) * 100;
    progressBar.value = progressPercentage;

    // Update current time display
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    // Update total time display
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);
    totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' + totalSeconds : totalSeconds}`;
});

// Handle Progress Bar Scrub
progressBar.addEventListener('input', () => {
    const progress = progressBar.value;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (progress / 100) * duration;
});

// Volume Control
volumeControl.addEventListener('input', () => {
    const volume = volumeControl.value / 100;
    audioPlayer.volume = volume;
});

// Like/Dislike Functionality (Heart Icon)
heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('fa-heart'); // Toggle between heart and filled heart
    heartIcon.classList.toggle('fa-heart-circle-check');
});

// Add a functionality for clock icon if needed (Could track played time, history, etc.)
clockIcon.addEventListener('click', () => {
    alert('Feature coming soon for tracking history!');
});
