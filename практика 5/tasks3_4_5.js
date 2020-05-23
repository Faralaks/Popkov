let count = -1;
let trueAnses = 0;
let users = [];
let resTd = [];

let qs = [
    ["Добро пожаловать. ну что, начнем?", 0, "Да", 0, "Нет", 1, "Пойду ка я, от греха по дальше"],
    ["Сколько ёжику лет?", 0, "Я думаю, ему определенно около 14", 0, "Будь я проклят, если не 54", 1, "уже нисколько, сошел с ума на каратнтине в возрасте 21"],
    ["Где раки зимуют?", 1, "В морозилке", 0, "В стиарльной машине", 0, "В Лыткарино, прости Господи..."],
    ["Кто от нас не отстанет?", 0, "Синицин", 1, "Воронин", 0, "Лебедев"]
];

function showTable() {
    document.getElementById("resData").hidden  = false;
    document.getElementById("vic").hidden  = true;

}

function deactivate(e, right=0) {
    let anses = document.getElementsByTagName("li");
    let vic = document.getElementById("vic");
    for (let  i = 0; i < anses.length; i++) {
        anses[i].className = "liAfter";
        anses[i].onclick = function () {}
    }
    if (e) { e.style.background = "yellow"; }
    trueAnses += right;

    count++;
    if (count >= qs.length) {
        let resultDiv = document.createElement("div");
        resultDiv.id = "resDiv";
        resultDiv.textContent = "Правильных ответов "+trueAnses;

        let baton = document.createElement("div");
        baton.className = "murkyBtn";
        baton.textContent = "Сохранить!";
        baton.onclick = function () {
            showTable();
        };
        resultDiv.append(baton);
        vic.append(resultDiv);

    }
    else {
        let newH1 = document.createElement("h1");
        newH1.textContent = qs[count][0];
        vic.append(newH1);

        let newUl = document.createElement("ul");
        for (let i = 2; i <= 6; i+=2) {
            let newLi = document.createElement("li");
            newLi.textContent = qs[count][i];
            newLi.onclick = function () { deactivate(this, parseInt(qs[count][i-1])) }
            newLi.className = "liBefore";
            newUl.append(newLi);
        }
        vic.append(newUl);

    }
}

function addUser() {
    let newUserField = document.getElementById("username");
    let newUser = newUserField.value;
    if (newUser === "") { alert("Слыш, забыл ввести имя!"); return}

    let idx = users.indexOf(newUser);
    if (idx !== -1) {
        resTd[idx].textContent = trueAnses.toString();
        alert("Результат обновлен!");

    }
    else {
        users.push(newUser);
        let newTr = document.createElement("tr");

        let newNameTd = document.createElement("td");
        newNameTd.textContent = newUser;
        newTr.appendChild(newNameTd);

        let newResTd = document.createElement("td");
        newResTd.textContent = trueAnses.toString();
        resTd.push(newResTd);
        newTr.appendChild(newResTd);

        document.getElementById("resTable").append(newTr);
    }
    document.getElementById("resData").hidden  = true;
    document.getElementById("vic").hidden  = false;
    document.getElementById("vic").innerHTML  = "";
    trueAnses = 0;
    count = -1;
    deactivate();


}

window.onload = function () {
    deactivate();
};