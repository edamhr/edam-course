
const video = document.getElementById("lectureVideo");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const certificateLink = document.getElementById("certificateLink");

video.addEventListener("loadedmetadata", () => {
  video.maxWatched = 0;
});

video.addEventListener("timeupdate", () => {
  const currentTime = video.currentTime;
  const duration = video.duration;
  const percent = ((currentTime / duration) * 100).toFixed(1);

  progressBar.style.width = percent + "%";
  progressText.textContent = "진도율: " + percent + "%";

  if (video.currentTime > video.maxWatched + 0.5) {
    video.currentTime = video.maxWatched;
  } else {
    video.maxWatched = currentTime;
  }

  if (percent >= 100) {
    certificateLink.style.display = "block";
  }
});

video.addEventListener("ratechange", () => {
  if (video.playbackRate !== 1) {
    alert("배속 재생은 제한되어 있습니다.");
    video.playbackRate = 1;
  }
});

video.addEventListener("contextmenu", (e) => e.preventDefault());
