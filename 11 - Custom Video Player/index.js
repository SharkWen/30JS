const $ = v => document.querySelector(v);
const $$ = v => document.querySelectorAll(v);
let isdown = false;
function togglePlay() {
    const method = $('.video').paused ? 'play' : 'pause';
    $('.video')[method]()
}
$('.video').addEventListener('click', togglePlay);

function updateButton() {
    let icon = this.paused ? '►' : '❚ ❚'
    $('.player-button').textContent = icon;
}
$('.player-button').addEventListener('click', togglePlay);
$('.video').addEventListener('play', updateButton);
$('.video').addEventListener('pause', updateButton);

function skip() {
    $('.video').currentTime += parseFloat(this.dataset.skip)
}
$$('[data-skip]').forEach(btn => btn.addEventListener('click', skip));

function handleRangeUpdate() {
    $('.video')[this.name] = this.value
}
$$('.player-slider').forEach(range => range.addEventListener('change', handleRangeUpdate));
$$('.player-slider').forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

function handleProgress() {
    let percent = ($('.video').currentTime / $('.video').duration) * 100
    $('.progress-filled').style.flexBasis = `${percent}%`;
}

function scrub(e) {
    let scrubTime = (e.offsetX / $('.progress').offsetWidth) * $('.video').duration
    $('.video').currentTime = scrubTime
}

$('.video').addEventListener('timeupdate', handleProgress)
$('.progress').addEventListener('click', scrub)
$('.progress').addEventListener('mousemove', (e) => isdown && scrub(e));
$('.progress').addEventListener('mousedown', () => isdown = true);
$('.progress').addEventListener('mouseup', () => isdown = false);
$('.progress').addEventListener('mouseout', () => isdown = false);