window.onload = function() {
   document.getElementById("mark_lab").hidden = true;
};

let good_ege = false;
let good_mark = false;

function print() {
    let info = "";
    if (!good_ege) info += "Ты не проходишь по возрасту, чувак!  ";
    if (!good_mark) info += "У тебя слишком плохие оценки, чувак!  ";
    if (good_mark && good_ege) {
        info += "Ты идеально нам подходишь!"
        document.getElementById("link").href  = "https://yandex.ru";
        document.getElementById("link").textContent  = "Теперь ты достоен нажать на меня"
    }

    document.getElementById("msg").textContent  = info;

}


function check_student() {
        if (document.getElementsByName("student")[0].checked) {
            console.log("Включил");
            document.getElementById("mark_lab").hidden = false;
        }
        else {
            console.log("Выключил");
            document.getElementById("mark_lab").hidden = true;
        }
}
function check_mark() {
    good_mark = (parseInt(document.getElementsByName("mark")[0].value) >= 13);
    console.log("good_mark: " + good_mark);
    print();
}
function check_ege() {
    good_ege = (parseInt(document.getElementsByName("ege")[0].value) >= 18 &&
                        parseInt(document.getElementsByName("ege")[0].value) <= 30);
    console.log("good_ege: "+good_ege);
    print();

}