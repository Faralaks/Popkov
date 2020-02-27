let val, len;
let x, y, k, n, p, q;
let real = false;


function check() {
    let msg = "";
    if (parseInt(document.getElementsByName("answer1")[0].value) !== x*y) {
        msg += "Вы ошиблись в первом задании( "
    }
    if (parseInt(document.getElementsByName("answer2")[0].value) !== k*n) {
        msg += "Вы ошиблись во втором задании( "
    }
    if ((document.getElementsByName("checkbox")[0].checked && !real) || (!document.getElementsByName("checkbox")[0].checked && real)) {
        msg += "Вы ошиблись в третьем задании( "
    }
    if (msg === "") msg = "Ти красаучик!";
    document.getElementById("msg").textContent = msg;

}

window.onload = function() {

    function rounded_rnd(min, max) {
        let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("rnd "+rnd);
        return rnd;
    }
    x = rounded_rnd(2, 9);
    y = rounded_rnd(2, 9);

    document.write("<table>");

    for (let i = 1; i <= 9; i++ ) {
        document.write("<tr><td>&nbsp;&nbsp;" + i + "</td>");
        for (let j = 2; j <= 9; j++ ) {
            val = (i*j).toString();
            len = val.length;
            if (i === x && j === y) {
                document.write("<td><input name='answer1' type='text' maxlength=\""+len+"\" size=\""+len+"\"></td>");
            }
            else {
                document.write("<td>" + new Array((3 - len) + 1).join("&nbsp;&nbsp;") + val + "</td>");
            }
        }
       document.write("</tr>");
    }
    document.write("</table>\n<hr>");
    k = rounded_rnd(1, 9);
    n = rounded_rnd(1, 9);
    len = (k*n).toString().length
    document.write("<p>"+k+"x"+n+"=<input type='text' name=\"answer2\" maxlength=\""+len+"\" size=\""+len+"\"></p>\n<br>");

    p = rounded_rnd(1, 9);
    q = rounded_rnd(1, 9);
    if (Math.random()>0.5) {
        val = (p*q).toString();
        real = true;
    }
    else {
        val = (p*(q - 1)).toString();
    }

    document.write(p+"x"+q+"="+val+"?<input type=\"checkbox\" name=\"checkbox\">Это верно</p>");
    document.write("<input type=\"button\" onclick=\"check()\" value='Проверить'>");
    document.write("<p id='msg'></p>");


};