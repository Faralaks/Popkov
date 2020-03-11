cellule = 0;
function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
a = random(2,9);
b = random(2,9);
cellule = (a * b).toString();

function table() {
    document.write("<table border= \" 1 \" cellspacing= \" 0 \" cellpadding= \"5 \"align= \"center \" >");
    for (let i = 1; i <= 9; i++)
    {document.write("<tr>");
        for (let j = 1; j <= 9; j++) {
            if (a === i && b === j){
                document.write("<td><input type='text' maxlength=\"3\" size=\"1\"></td>");
            }
            else {
                document.write("<td align='right'>" + "&nbsp;&nbsp;" +  (i * j) + "</td>");
            }
        }
        document.write("</tr>");

    }

    document.write("</table>");




    document.write("<br>");
    document.write(a + " * " + x + " = " + " <input type='text' maxlength=\"3\" size=\"1\" id=\'answer\'  required >"); //клетка
    document.write("<br>");
    document.write(b + " * " + y + " = " + z); //чек
    document.write("   Ответ верен", "<input type='checkbox' id='flag'>");

}
let x,y,z,c;
x = random(1,9);
y = random(1,9);
r = random(0,1);
z = b * y + r;

function check_flag(){
    if (b * y !== z && document.getElementById('flag').checked === true || b * y === z && document.getElementById('flag').checked === false){
        return false;
    }
    else {
        return  true;
    }

}

function check(){
    c = document.getElementById('answer').value;
    if (a * x === c && check_flag()){
        document.write("Ты молодец!");
    }
    else {
        document.write("Ты отстой, чувак!");
    }
}





