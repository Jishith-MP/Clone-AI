
document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("myVideo");
  var playPauseBtn = document.getElementById("playPauseBtn");
  var isAutoplayDisabled = false;

  playPauseBtn.addEventListener("click", function() {
    if (!isAutoplayDisabled) {
      video.removeAttribute("autoplay");
      isAutoplayDisabled = true;
    }

    if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = `<i class="bi bi-pause-fill"></i>`;
      playPauseBtn.style.border = 'none';
      playPauseBtn.style.background = 'none';
      playPauseBtn.style.transform = 'scale(3)';
    } else {
      video.pause();
      playPauseBtn.innerHTML = `<i class="bi bi-play"></i>`;
      playPauseBtn.style.border = 'none';
      playPauseBtn.style.background = 'none';
      playPauseBtn.style.transform = 'scale(3)';
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("myvedio");
  var playPauseBtn = document.getElementById("playpausebtn");
  var isAutoplayDisabled = false;

  playPauseBtn.addEventListener("click", function() {
    if (!isAutoplayDisabled) {
      video.removeAttribute("autoplay");
      isAutoplayDisabled = true;
    }

    if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = `<i class="bi bi-pause-fill"></i>`;
      playPauseBtn.style.border = 'none';
      playPauseBtn.style.background = 'none';
      playPauseBtn.style.transform = 'scale(3)';
    } else {
      video.pause();
      playPauseBtn.innerHTML = `<i class="bi bi-play"></i>`;
      playPauseBtn.style.border = 'none';
      playPauseBtn.style.background = 'none';
      playPauseBtn.style.transform = 'scale(3)';
    }
  });
});

