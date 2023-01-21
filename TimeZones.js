function india() {
    let zone1={timeZone:'Asia/Kolkata'}
    let currentDate=new Date().toLocaleDateString('en-us',zone1);
    let currentTime=new Date().toLocaleTimeString('en-us',zone1);
    document.querySelector('#indian-date').innerText=currentDate;
    document.querySelector('#indian-time').innerText=currentTime;
}
setInterval(india,1000);
function usa() {
    let zone2={timeZone:'America/New_York'}
    let curretDate=new Date().toLocaleDateString('en-us',zone2);
    let curretTime=new Date().toLocaleTimeString('en-us',zone2);
    document.querySelector('#usa-date').innerText=curretDate;
    document.querySelector('#usa-time').innerText=curretTime;
}
setInterval(usa,1000);
function china() {
    let zone3={timeZone:'Asia/Shanghai'}
    let curretDate=new Date().toLocaleDateString('en-us',zone3);
    let curretTime=new Date().toLocaleTimeString('en-us',zone3);
    document.querySelector('#china-date').innerText=curretDate;
    document.querySelector('#china-time').innerText=curretTime;
}
setInterval(china,1000);
function Australia() {
    let zone4={timeZone:'Australia/Hobart'}
    let curretDate=new Date().toLocaleDateString('en-us',zone4);
    let curretTime=new Date().toLocaleTimeString('en-us',zone4);
    document.querySelector('#Australia-date').innerText=curretDate;
    document.querySelector('#Australia-time').innerText=curretTime;
}
setInterval(Australia,1000);
function Japan() {
    let zone5={timeZone:'Asia/Tokyo'}
    let curretDate=new Date().toLocaleDateString('en-us',zone5);
    let curretTime=new Date().toLocaleTimeString('en-us',zone5);
    document.querySelector('#Japan-date').innerText=curretDate;
    document.querySelector('#Japan-time').innerText=curretTime;
}
setInterval(Japan,1000);
function Russia() {
    let zone6={timeZone:'Asia/Barnaul'}
    let curretDate=new Date().toLocaleDateString('en-us',zone6);
    let curretTime=new Date().toLocaleTimeString('en-us',zone6);
    document.querySelector('#Russia-date').innerText=curretDate;
    document.querySelector('#Russia-time').innerText=curretTime;
}
setInterval(Russia,1000);

