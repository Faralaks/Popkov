let  saved = [3, 2]; // Тут будут сохраняться вводимые размеры таблицы, чтобы можно было восстановить предыдущее значение
let savedColor = [201, 0, 0]; //  В последствие влияет на цвет первого квадратика
let colors = [];
let counts = [];

function regenTable() { // Функция для создания таблицы
    let table = $("#myTable"); // div, в который будет добавлена таблица
    let xField = $("#sizeX");
    let yField = $("#sizeY");
    let sizeX = xField.val(); // Ширина таблицы
    let sizeY = yField.val(); //  Длина таблицы
    let x, y;
    let newRow;
    let newCell;

    if (isNaN(sizeX) || isNaN(parseInt(sizeX))) {x = saved[0]; xField.val(x)}
    else if (sizeX === "0") {x = 1; xField.val(1)}
    else {x = parseInt(sizeX)}

    if (isNaN(sizeY) || isNaN(parseInt(sizeY))) {y = saved[1]; yField.val(y)}
    else if (sizeY === "0") {y = 1; yField.val(1)}
    else {y = parseInt(sizeY)}

    table.empty(); // Очистка содержимого таблицы, для того чтобы на ее месте появилась новая с новыми размерами
    // Генерация таблицы
    for (let i = 0; i < parseInt(y); i++) {
        newRow = document.createElement("tr");
        for (let j = 0; j < parseInt(x); j++) {
            newCell = document.createElement("td");
            newCell .id = "col"+i.toString()+"_"+j.toString();
            newCell.onclick = function () {
                this.style.background = `rgb(${savedColor[0]}, ${savedColor[1]}, ${savedColor[2]})`;
            };
            newRow.append(newCell);
        }
        table.append(newRow);
        saved = [x, y] // сохраняем на использованые значения
    }
}

function changeColor() {
    let redOrBlue = $("#color1");
    if (redOrBlue.css("backgroundColor") === "rgb(255, 0, 0)") {
        savedColor = [0, 0, 255];
        redOrBlue.css("backgroundColor","rgb(0, 0, 255)");
    }
    else if (redOrBlue.css("backgroundColor") === "rgb(0, 0, 255)") {
        savedColor = [255, 0, 0];
        redOrBlue.css("backgroundColor", "rgb(255, 0, 0)");
    }
    console.log(savedColor.join(" "));
}

function showError(errorLine, errorMsg) {
    errorLine.text(errorMsg);
    errorLine.show();
}

function addColor() {
    let colorsBlock = $("#colorsBlock");
    let r = parseInt($("#colorR").val());
    let g = parseInt($("#colorG").val());
    let b = parseInt($("#colorB").val());
    let colorCode = `${r}_${g}_${b}`;
    let errorLine = $("#errors");

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
        showError(errorLine,"Одно из полей имеет некорректное значение");
        return;
    }
    else if (r > 200 || g > 200 || b > 200) {
        showError(errorLine,"Значение в полях не может привышать 200");
        return;
    }
    else if (colors.indexOf(colorCode) !== -1) {
        showError(errorLine,"Такой цвет уже существует на палитре");
        return
    }
    else if (r+g+b === r*3) {
        showError(errorLine, "Оттенки серого запрещены!");
        return
    }
    else {errorLine.hide();}

    let newColor = document.createElement("div");

    newColor.onclick = function () {
        savedColor = this.id.split("_");
        counts[colors.indexOf(this.id)]++;
    };
    newColor.className = "colorSqr";
    newColor.id = colorCode;
    newColor.style.background = `rgb(${r}, ${g}, ${b})`;

    colors.push(colorCode);
    counts.push(0);
    colorsBlock.append(newColor);
}

function delColor() {
    let name = "#"+savedColor.join("_");
    $(name).detach();
    let colorIndex = colors.indexOf(savedColor)-1;
    colors.splice(colorIndex, 1);
    counts.splice(colorIndex, 1);
    console.log(colors, counts);

}


function sortKey(a, b) {
    if (counts[colors.indexOf(a)] > counts[colors.indexOf(b)]) {
        return -1;
    }
    if (counts[colors.indexOf(a)] < counts[colors.indexOf(b)]) {
        return 1;
    }
    else {return 0}
}

function sortColors() {
    let newNumLine = colors.slice();
    let colorsBlock = $("#colorsBlock");
    newNumLine = newNumLine.sort(sortKey);
    colorsBlock.empty();

    newNumLine.forEach(function (item)  { // Этот код дублируется, потому что не хватило времени(
        let newColor = document.createElement("div");
        let itemS = item.split("_");
        newColor.onclick = function () {
            savedColor = this.id.split("_");
            counts[colors.indexOf(this.id)]++;
        };
        newColor.className = "colorSqr";
        newColor.id = item;
        console.log(item);
        newColor.style.background = `rgb(${itemS[0]}, ${itemS[1]}, ${itemS[2]})`;

        colorsBlock.append(newColor);
    });


}

window.onload = function() {
    regenTable();
};
