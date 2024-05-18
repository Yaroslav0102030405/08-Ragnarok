const classes = {
  opened: "opened",
  hidden: "hidden",
  active: "active",
};

// Видео
let isPlay = false;
const video = document.getElementById("video");
const videoButton = document.querySelector(".video-btn");

const handleVideo = ({ target }) => {
  const info = target.parentElement;

  isPlay = !isPlay;
  info.classList.toggle(classes.hidden, isPlay);
  target.innerText = isPlay ? "Pause" : "Play";
  isPlay ? video.play() : video.pause();
};

videoButton.addEventListener("click", handleVideo);
