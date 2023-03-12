import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const time = localStorage.getItem("videoplayer-current-time");
if (time != null) {
  player.setCurrentTime(time);
}

const onPlay = function () {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem("videoplayer-current-time", seconds);
  });
};

player.on("timeupdate", throttle(onPlay, 1000));
