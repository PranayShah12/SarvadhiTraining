fetch('https://api.openweathermap.org/data/2.5/weather?q=surat&appid=9669890947c8622b9b3be7d8fc26cadc')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
var trdata="";
const arrdata=data.map((cvalue)=>{
    trdata+=`<tr>
    <td>${cvalue.base}</td>
    <td>${cvalue.main}</td>
    <td>${cvalue.visibility}</td>
    <td>${cvalue.clouds}</td>
    </tr>`
    console.log(trdata);
})
document.getElementById("wet").innerHTML=trdata;
})