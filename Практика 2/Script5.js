document.write("<br>");
let n,m,a,b;
let colours = ['Желтый','Красный','Синий'];
let shapes = ['Круг','Треугольник','Прямоугольник'];
let col = Math.floor(Math.random() * colours.length);
let sha = Math.floor(Math.random() * shapes.length);
function rand(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getcol() {
    document.getElementById('pa').textContent = colours[col];
}
function getshap() {
    document.getElementById('pi').textContent = shapes[sha];
}

n = rand(1,9);
m = rand(1,9);
c = rand(1,9);
z = rand(1,9);
document.write(n*m+ "/" + n + "=" );
document.write("<input type='text' id='M' maxlength=\"3\" size=\"1\" onchange='getcol()' >");
document.write("<p id='pa'></p>");
document.write(c*z + "/" + c + "=" );
document.write("<input type='text' id='Z' maxlength=\"3\" size=\"1\" onchange='getshap()' >");
document.write("<p id='pi'></p>");


function result(color, shape) {
    a = parseInt(document.getElementById('M').value);
    b = parseInt(document.getElementById("Z").value);
    if (a === m && b === z &&  color === col && shape === sha){
        document.getElementById("win").hidden = false;
        document.getElementById("lose").hidden = true;}
    else{
        document.getElementById("win").hidden = true;
        document.getElementById("lose").hidden = false;
    }
}

