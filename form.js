
function form_valid() {

    // debugger
    let name = document.form1.fname.value;
    if (name == "" || name == null) {
        document.getElementById("fmess").innerHTML = "Enter name";
        return false;
    } else if (!isNaN(name)) {
        document.getElementById("fmess").innerHTML = "Enter alphabets only";
        return false;
    }
    let email = document.form1.mail.value
    if (email == "") {
        document.getElementById("emess").innerHTML = "Enter Email address";
        return false;
    } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
        document.getElementById("emess").innerHTML = "You have entered an invalid email address!";
        return false;
    }
    let date = document.form1.myDate.value;
    let lsdate = document.getElementById("myDate").value;
    localStorage.setItem("lsdate", lsdate);
    let actualdate = new Date();
    let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate() + 1}` : actualdate.getDate()}`
    if (date == "") {
        document.getElementById("dmess").innerHTML = "select date";
        return false;
    } else if (date < realdate) {
        alert("enter proper date")
        return false;
    }

    let ftime = document.form1.fromtime.value;

    if (ftime == "") {
        document.getElementById("ftmess").innerHTML = "select from time";
        return false;
    }
    let utime = document.form1.totime.value;
    if (utime == "") {
        document.getElementById("totmess").innerHTML = "select to time";
        return false;
    }
    if (utime <= ftime) {
        document.getElementById("timemess").innerHTML = "To time Should be Greater then from time"
        return false;
    }
    let desp = document.form1.despval.value;
    if (desp == "") {
        document.getElementById("despmess").innerHTML = "enter Description";
        return false;
    }


}


function on_change() {
    let name = document.form1.fname.value;
    if (name != "" || name != null) {
        document.getElementById("fmess").innerHTML = "";
        return false;
    } else if (isNaN(name)) {
        document.getElementById("fmess").innerHTML = "";
        return false;
    }
}
function mailchange() {
    let email = document.form1.mail.value
    if (email != "") {
        document.getElementById("emess").innerHTML = "";
        return false;
    } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
        document.getElementById("emess").innerHTML = "";
        return false;
    }
}
function datechange() {
    let date = document.form1.myDate.value;
    if (date != "") {
        document.getElementById("dmess").innerHTML = "";
        return false;
    }
}
function f_timechange() {
    let ftime = document.form1.fromtime.value;
    if (ftime != "") {
        document.getElementById("ftmess").innerHTML = "";
        return false;
    }
}
function to_timechange() {
    let utime = document.form1.totime.value;
    if (utime != "") {
        document.getElementById("totmess").innerHTML = "";
        return false;
    }
}
function desp_change() {
    let desp = document.form1.despval.value;
    if (desp != "") {
        document.getElementById("despmess").innerHTML = "";
        return false;
    }
}
// const newform = document.getElementById('app_book');
// console.log(newform)
function takevalue() {
    var fname = document.getElementById("fname").value;
    document.getElementById("info").innerHTML = fname;
}

