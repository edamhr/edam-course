window.addEventListener("message", function (event) {
  if (!event.origin.includes("cloudinary.com")) return;

  const data = event.data;

  if (data.event === "timeupdate") {
    const current = data.currentTime;
    const duration = data.duration;

    if (!duration || !current) return;

    const percent = ((current / duration) * 100).toFixed(1);

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    progressBar.style.width = percent + "%";
    progressText.textContent = "진도율: " + percent + "%";
  }
});
