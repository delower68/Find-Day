const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const getDate = document.getElementById('getDay');

const result = document.getElementById('result');

getDate.addEventListener('click', function(){
    let getDate = new Date(`${date.value},${month.value},${year.value}`)
    let day = getDate.toString();
    day = day.slice(0,3);
    result.innerText = day
})