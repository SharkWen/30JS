const $ = v=>document.querySelector(v);
const endtime = new Date('2022/4/24');
function handleUpdate(){
    const time = new Date();
    let hours = (time.getHours()/12) * 360;
    let minutes = (time.getMinutes()/60)* 360;
    let seconds = time.getSeconds() * 6;
    let timer = time.toLocaleTimeString()
    let dayS = time.getTime();
    let dayE = endtime.getTime();
    let inday = Math.floor((dayE - dayS) / (1000 * 60 * 60 *24))
    $('.endtime').innerHTML = `距离比赛还有${inday}天`
    $('.time').innerHTML = timer
    $('.hour').style.transform = `rotate(${hours + 180}deg)`;
    $('.minute').style.transform = `rotate(${minutes + 180 }deg)`;
    $('.second').style.transform = `rotate(${seconds + 180}deg)`;
}
setInterval(handleUpdate,1000)
handleUpdate()