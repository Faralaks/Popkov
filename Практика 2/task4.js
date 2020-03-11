function check_ans() {
    let falls = 0;
    if (!document.getElementById("q1r1").checked) falls += 1;
    if (!document.getElementById("q2r1").checked) falls += 1;
    if (!document.getElementById("q3r4").checked) falls += 1;
    if (falls !== 0) {
        document.getElementById("check_btn").value = `Ошибок ${falls} из 3`;
    } else {
        document.getElementById("check_btn").hidden = true;
        document.getElementById("imgOk").hidden = false;
    }
}

function clear_res() {
        document.getElementById("check_btn").hidden = false;
        document.getElementById("imgOk").hidden = true;
        document.getElementById("check_btn").value = "Проверить";


}



