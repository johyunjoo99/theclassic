
//오늘 날짜 가져오기
let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜

document.getElementById("today").innerText = year + "." + month + "." + date;