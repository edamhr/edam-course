
const video = document.getElementById('lectureVideo');
let lastTime = 0;
let isSeeking = false;

setInterval(() => {
  if (!isSeeking && !video.paused && !video.seeking) {
    lastTime = video.currentTime;
  }
}, 1000);

video.addEventListener("seeking", () => {
  isSeeking = true;
  const jumpThreshold = 3;
  if (Math.abs(video.currentTime - lastTime) > jumpThreshold) {
    alert("건너뛰기가 제한되어 있습니다.");
    video.currentTime = lastTime;
  }
});

video.addEventListener("seeked", () => {
  isSeeking = false;
});

video.addEventListener("ratechange", () => {
  if (video.playbackRate !== 1) {
    alert("배속 재생은 허용되지 않습니다.");
    video.playbackRate = 1;
  }
});

video.addEventListener("contextmenu", e => e.preventDefault());
