var play = document.querySelector("#play").addEventListener("click", pp);
function pp() {
  document
    .querySelector("#play")
    .setAttribute(
      "style",
      "background-image: url(../Media/icons/pause-button.png);"
    );
}
