window.onload = function () {
    document.getElementsByName("mark")[0].hidden = true;
}
function check_student() {
    if(document.getElementsByName("student")[0].checked){
        document.getElementsByName("mark")[0].hidden = false;
    }
    else {
        document.getElementsByName("mark")[0].hidden = true;
    }
}

function you_age() {
    var a = parseInt(parseInt(document.getElementsByName("age")[0].value));
    console.log(a);
    if (a >= 18  && a <= 30){
        console.log(true);
        return true;}
    return false;

}
 function you_mark() {
    var m = parseInt(parseInt(document.getElementsByName("mark")[0].value));
    console.log(m)
    if (m >=13  && m <= 15){
        console.log(true);
        return true;}
    return false;
 }
 function success() {
    let info = "";
    if (you_mark()  && you_age() ){
        info += "А ты ктрутой что-ли?";
        document.getElementById("link").href = "http://online-simpsons.ru/season-16/358-16-sezon-17-seriya.html";
        document.getElementById("link").textContent = info;
    }
    else{
        info += "Ну, ты нам не подходишь";
        document.getElementById("message").textContent = info;
     }
 }