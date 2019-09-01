const day = document.getElementById('day')
const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

function countDownTimer() {

    let nowDate = new Date();
    let olympicDate = new Date('2020/7/24')
    let now = nowDate.getTime(); //エポックミリ秒にして計算
    let olympic = olympicDate.getTime(); //エポックミリ秒にして計算
    let remain = olympic - now; //エポックミリ秒にして計算

    var dDays = remain / (1000 * 60 * 60 * 24); // 日数
    remain = remain % (1000 * 60 * 60 * 24);
    var dHour = remain / (1000 * 60 * 60); // 時間
    remain = remain % (1000 * 60 * 60);
    var dMin = remain / (1000 * 60); // 分
    remain = remain % (1000 * 60);
    var dSec = remain / 1000; // 秒

    if (remain > 0) { //オリンピックまでは、カウントし続ける
        day.innerHTML = Math.floor(dDays);
        hour.innerHTML = Math.floor(dHour);
        min.innerHTML = Math.floor(dMin);
        sec.innerHTML = Math.floor(dSec);
    } else {
        day.innerHTML = 0; //オリンピック来たら0日0時間0分0秒と表示
        hour.innerHTML = 0;
        min.innerHTML = 0;
        sec.innerHTML = 0;
    }
    setTimeout(countDownTimer, 1000); //繰り返す
    return remain;
}
countDownTimer();