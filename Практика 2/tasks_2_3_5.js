let val, len;
let x, y, k, n, p, q, l, m, u, v;
let real = false;
let shapeIndex, colorIndex;



function check() { // проверяет где допущены ошибки
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


function shuffle(array) { // функция для перемешивания массива
  let curIndex = array.length, tempVal, rndVal;
  while (0 !== curIndex) {
      rndVal = Math.floor(Math.random() * curIndex);
      curIndex -= 1;
      tempVal = array[curIndex];
      array[curIndex] = array[rndVal];
      array[rndVal] = tempVal;
  }

  return array;
}


function rounded_rnd(min, max) { // возвращает псевдослучайное целое число в заданном диапазоне. возможно неравномерное распределение
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("rnd "+rnd);
    return rnd;
}

x = rounded_rnd(2, 9);
y = rounded_rnd(2, 9);

document.write("<table>");

for (let i = 1; i <= 9; i++ ) { // создаем таблицу умножения
    document.write("<tr><td>&nbsp;&nbsp;" + i + "</td>");
    for (let j = 2; j <= 9; j++ ) {
        val = (i*j).toString();
        len = val.length;
        if (i === x && j === y) { // когда достигается случайная позиция, ставится текстовое поле
            document.write("<td><input name='answer1' type='text' maxlength=\""+len+"\" size=\""+len+"\"></td>");
        }
        else {
            document.write("<td>" + new Array((3 - len) + 1).join("&nbsp;&nbsp;") + val + "</td>"); // не использую стили для выравнивания, отодвигаю пробелами. выглядит правдоподобно
        }
    }
    document.write("</tr>");
}
document.write("</table>\n<hr>");

// создается второй пример
k = rounded_rnd(1, 9);
n = rounded_rnd(1, 9);
len = (k*n).toString().length;
document.write("<p>"+k+"x"+n+"=<input type='text' name=\"answer2\" maxlength=\""+len+"\" size=\""+len+"\"></p>\n<br>");

// создается третий пример
p = rounded_rnd(1, 9);
q = rounded_rnd(1, 9);
if (Math.random()>0.5) { // попытк соответствовать условию задачи: с вероятностью 50% показывать неверный ответ
    val = (p*q).toString();
    real = true;
}
else {
    val = (p*(q - 1)).toString(); // приходится делать так, чтобы не попасть в ситуацию, когда случайно выпадет тоже самое число
}

document.write(p+"x"+q+"="+val+"?<input type=\"checkbox\" name=\"checkbox\">Это верно</p>");
document.write("<input type=\"button\" onclick=\"check()\" value='Проверить'>");
document.write("<p id='msg'></p><hr>\n<h2>А делить то ты умеешь?</h2>");

function getShape(array) { // Показывает форму в соответствии с выбранны ответом
    let shapes = ["Треугольник", "Круг", "Прямоугольник"];
    shapeIndex = array.indexOf(document.getElementById("ans1Select").value);
    document.getElementById("shapeName").textContent = shapes[shapeIndex];
}
function getColor(array) { // показывает цвет в соответствии с выбранным ответом
    let colors = ["Розовый", "Зелёный", "Голубой"];
    colorIndex = array.indexOf(document.getElementById("ans2Select").value);
    document.getElementById("colorName").textContent = colors[colorIndex];
}

// первый пример на деление
l = rounded_rnd(1, 9);
m = rounded_rnd(1, 9);
let ansShape = shuffle([l.toString(), (l+1).toString(), (l-1).toString()]);
document.write("<p>"+ l*m + "/ " +
    `<select id='ans1Select' onchange='getShape(ansShape)'>\n
          <option>?</option>\n
          <option>${ansShape[0]}</option>\n
          <option>${ansShape[1]}</option>\n
          <option>${ansShape[2]}</option>\n</select>` +
    " = " + m + "</p>\n<p id='shapeName'></p>");

// второй пример на деление
u = rounded_rnd(1, 9);
v = rounded_rnd(1, 9);
let ansColor = shuffle([u.toString(), (u+1).toString(), (u-1).toString()]);
document.write("<p>"+ u*v + "/ " +
    `<select id='ans2Select' onchange='getColor(ansColor)'>\n<option>?</option>\n
        <option>${ansColor[0]}</option>\n
        <option>${ansColor[1]}</option>\n
        <option>${ansColor[2]}</option>\n</select>` +
    " = " + v + "</p>\n<p id='colorName'></p>");


document.write("<input type='button' onclick='location.reload()' value='Списите, помогите, уберите, хочу заново, хочу на ручки!'>");

