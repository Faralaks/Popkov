let  saved = [3, 2]; // Тут будут сохраняться вводимые размеры таблицы, чтобы можно было восстановить предыдущее значение
let status = "red"; //  В последствие влияет на цвет первого квадратика

function serColor(cell) {
    cell.style.background = status;

}

function regenTable() { // Функция для создания таблицы
    let table = $("#myTable"); // div, в который будет добавлена таблица
    let xField = $("#sizeX");
    let yField = $("#sizeY");
    let sizeX = xField.val(); // Ширина таблицы
    let sizeY = yField.val(); //  Длина таблицы
    let x, y;
    let newRow;
    let newCol;

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
            newCol = document.createElement("td");
            newCol.textContent = i.toString()+"_"+j.toString();
            newCol .id = "col"+i.toString()+"_"+j.toString();
            newCol.onclick = function () {
                serColor(this)
            };
            newRow.append(newCol);
        }
        table.append(newRow);
        saved = [x, y] // сохраняем на использованые значения
    }
}

function changeColor() {
    if (status === "red") {
        status = "blue";
        $("#color1").css("backgroundColor", "blue");
    }
    else {
        status = "red";

        $("#color1").css("backgroundColor", "red");
    }

}
