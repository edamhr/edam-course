const video = document.getElementById("lectureVideo");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

video.addEventListener("loadedmetadata", function () {
  video.maxWatched = 0;
});

video.addEventListener("timeupdate", function () {
  // 진도율 계산
  const percent = ((video.currentTime / video.duration) * 100).toFixed(1);
  progressBar.style.width = percent + "%";
  progressText.textContent = "진도율: " + percent + "%";

  // 건너뛰기 방지
  if (video.currentTime > video.maxWatched + 0.5) {
    video.currentTime = video.maxWatched;
  } else {
    video.maxWatched = video.currentTime;
  }
});

