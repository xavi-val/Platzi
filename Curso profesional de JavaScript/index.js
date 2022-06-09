const video = document.querySelector(".movie");
const button = document.querySelector("button");

class MediaPlayer {
  constructor(element) {
    this.element = element;
    this.state = "";
  }

  play() {
    this.element.play();
    this.state = "play";
  }

  pause() {
    this.element.pause();
    this.state = "pause";
  }
}

const player = new MediaPlayer(video);

button.onclick = () => {
  if (player.state == "play") {
    player.pause();
  } else {
    player.play();
  }
};
