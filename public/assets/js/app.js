console.clear();


const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
speed.addEventListener('click', adjustSpeed);


function adjustSpeed(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
}
