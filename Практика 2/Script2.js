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
        document.write("</tr>")
    }
    document.write("</table>")
}


