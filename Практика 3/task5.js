let val, len;
let x, y, k, n, p, q, l, m, u, v;
let real = false;
let shapeIndex, colorIndex;
let colors = ["Зелёный", "Голубой", "Розовый"];
let shapes = ["Прямоугольник", "Круг", "Треугольник"];
let cellCounter = -1;

function setCursorPointer(){
    document.body.style.cursor = "pointer";
}
function setCursorDefault(){
    document.body.style.cursor = "default";
}



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

 function checkFigure(x, y) {
    console.log([x, y, shapeIndex, colorIndex, x === shapeIndex, y === colorIndex, ansShape[shapeIndex], ansColor[colorIndex]]);
    if (x === shapeIndex && y === colorIndex && l.toString() === ansShape[shapeIndex] && u.toString() === ansColor[colorIndex]) {
        console.log(true);
        document.getElementById("loseImg").hidden = true;
        document.getElementById("winImg").hidden = false;
    }
    else {
        console.log(false);
        document.getElementById("loseImg").hidden = false;
        document.getElementById("winImg").hidden = true;
    }

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
        cellCounter++;
        val = (i*j).toString();
        len = val.length;
        if (cellCounter % 2 === 0) {
            if (i === x && j === y) { // когда достигается случайная позиция, ставится текстовое поле
                document.write("<td class='dotted'><input name='answer1' type='text' maxlength=\""+len+"\" size=\""+len+"\"></td>");
            }
            else {
                document.write("<td class='dotted'>" + new Array((3 - len) + 1).join("&nbsp;&nbsp;") + val + "</td>"); // не использую стили для выравнивания, отодвигаю пробелами. выглядит правдоподобно
            }
        }
        else
        {
            if (i === x && j === y) { // когда достигается случайная позиция, ставится текстовое поле
                document.write("<td><input name='answer1' type='text' maxlength=\"" + len + "\" size=\"" + len + "\"></td>");
            } else {
                document.write("<td>" + new Array((3 - len) + 1).join("&nbsp;&nbsp;") + val + "</td>"); // не использую стили для выравнивания, отодвигаю пробелами. выглядит правдоподобно
            }
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
    shapeIndex = array.indexOf(document.getElementById("ans1Select").value);
    document.getElementById("shapeName").textContent = shapes[shapeIndex];
}
function getColor(array) { // показывает цвет в соответствии с выбранным ответом
    colorIndex = array.indexOf(document.getElementById("ans2Select").value);
    document.getElementById("colorName").textContent = colors[colorIndex];
}

// первый пример на деление
l = rounded_rnd(1, 9);
m = rounded_rnd(1, 9);
// генерируются случайные и неповторяющиеся варианты ответа
let setShapes = new Set();
setShapes.add(l);
while (setShapes.size < 3) setShapes.add(rounded_rnd(1, 9));
let ansShape = shuffle(Array.from(setShapes, x => x.toString()));

document.write("<p>"+ l*m + "/ " +
    `<select id='ans1Select' onchange='getShape(ansShape)'>\n
          <option>?</option>\n
          <option>${ansShape[0]}</option>\n
          <option>${ansShape[1]}</option>\n
          <option>${ansShape[2]}</option>\n</select>` +
    " = " + m + "&nbsp;&nbsp;&nbsp;&nbsp;<span id='shapeName'></span></p>");

// второй пример на деление
u = rounded_rnd(1, 9);
v = rounded_rnd(1, 9);
// генерируются случайные и неповторяющиеся варианты ответа
let setColor = new Set();
setColor.add(u);
while (setColor.size < 3) setColor.add(rounded_rnd(1, 9));
let ansColor = shuffle(Array.from(setColor, x => x.toString()));

document.write("<p>"+ u*v + "/ " +
    `<select id='ans2Select' onchange='getColor(ansColor)'>\n<option>?</option>\n
        <option>${ansColor[0]}</option>\n
        <option>${ansColor[1]}</option>\n
        <option>${ansColor[2]}</option>\n</select>` +
    " = " + v + "&nbsp;&nbsp;&nbsp;&nbsp;<span id='colorName'></span></p>");



document.write(`<img src='./chose_figure.jpg' alt='сорян, картинка не прогрузилась, дальше ты не пройдешь' usemap='#zone' width='491' height='290'>
       <map name='zone'>
        <area shape='rect' coords='11, 13, 160, 75' onclick='checkFigure(0, 0)' onmouseenter="setCursorPointer()" onmouseleave="setCursorDefault()">
        <area shape='rect' coords='210, 11, 400, 80' onclick='checkFigure(0, 1)' onmouseenter="setCursorPointer()" onmouseleave="setCursorDefault()">
        <area shape='rect' coords='235, 170, 460, 250' onclick='checkFigure(0, 2)' onmouseenter="setCursorPointer()" onmouseleave="setCursorDefault()">
        <area shape='circle' coords='270,130,25' onclick='checkFigure(1, 0)' onmouseenter="setCursorPointer()" onmouseleave="setCursorDefault()">
        <area shape='circle' coords='347,125,20' onclick='checkFigure(1, 1)' onmouseenter="setCursorPointer()" onmouseleave="setCursorDefault()">
        <area shape='circle' coords='160,140,52' onclick='checkFigure(1, 2)' onmouseenter="setCursorPointer()" onmouseleave="setCursorDefault()">
        <area shape='poly' coords='380,150,434,76,485,153' onclick='checkFigure(2, 0)' onmouseenter="setCursorPointer()" onmouseleave="setCursorDefault()">
        <area shape='poly' coords='135,200,225,200,180,262' onclick='checkFigure(2, 1)' onmouseenter="setCursorPointer()" onmouseleave="setCursorDefault()">
        <area shape='poly' coords='12,97,175,270,12,270' onclick='checkFigure(2, 2)' onmouseenter="setCursorPointer()" onmouseleave="setCursorDefault()">
       </map>`);
document.write("<img src='lose_img.jpg' width='512' height='288' hidden  alt='Ты проигррал, чувак, тебя скушала рыбка, RIP!' id='loseImg'>");
document.write("<img src='win_img.jpg' width='512' height='288' hidden alt='Ты выиграл, чувак, скушай рыбку!' id='winImg'>");

document.write("<br><input type='button' onclick='location.reload()' value='Списите, помогите, уберите, хочу заново, хочу на ручки!'><br>");


