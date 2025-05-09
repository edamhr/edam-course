const video = document.getElementById("lectureVideo");

video.addEventListener("loadedmetadata", function () {
  video.maxWatched = 0;
});

video.addEventListener("timeupdate", function () {
  // 사용자가 이미 본 구간까지만 재생 허용
  if (video.currentTime > video.maxWatched + 0.5) {
    video.currentTime = video.maxWatched;
  } else {
    video.maxWatched = video.currentTime;
  }
});
