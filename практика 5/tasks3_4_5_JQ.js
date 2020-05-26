let count = -1;
let trueAnses = 0;
let users = [];
let resTd = [];
let julik = false;

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
        let resultDiv = $(`<div id='resDiv'>Правильных ответов ${trueAnses}</div>`);
        let baton = $("<div class='murkyBtn'>Сохранить</div>")
            .click(function () {
                showTable();
            });
        resultDiv.append(baton);
        $("#vic").append(resultDiv);
    }
    else {
        let newH1 = document.createElement("h1");
        newH1.textContent = qs[count][0];
        vic.append(newH1);

        let newUl = document.createElement("ul");
        for (let i = 2; i <= 6; i+=2) {
            let newLi = document.createElement("li");
            newLi.textContent = qs[count][i];
            newLi.id = qs[count][i-1];
            newLi.onclick = function () { deactivate(this, qs[count][i-1]) };
            newLi.className = "liBefore";
            if (julik && qs[count][i-1] === 0) {
                newLi.classList.add("liJulik");
            }
            newUl.append(newLi);
        }
        vic.append(newUl);

    }
}

function addUser() {
    let newUser = $("#username").val();
    if (newUser === "") { alert("Слыш, забыл ввести имя!"); return}

    let idx = users.indexOf(newUser);
    if (idx !== -1) {
        resTd[idx].text(trueAnses);
        alert("Результат обновлен!");

    }
    else {
        users.push(newUser);
        let newTr = $("<tr></tr>")
            .append($(`<td>${newUser}</td>`))

        let newResTd = $(`<td>${trueAnses}</td>`);
        resTd.push(newResTd);
        newTr.append(newResTd);

        $("#resTable").append(newTr);
    }
    document.getElementById("resData").hidden  = true;
    document.getElementById("vic").hidden  = false;
    document.getElementById("vic").innerHTML  = "";
    trueAnses = 0;
    count = -1;
    julik = false;
    remakeHideDiv();
    deactivate();


}

function becomeJulik() {
    if (!julik) {
        julik = true;
        let elems = document.getElementsByClassName("liBefore");
        for (let i = 0; i < elems.length; i++) {
            if (elems[i].id === "0") {
                elems[i].classList.add("liJulik");
            }
        }
    }
    else {
        julik = false;
        let elems = document.getElementsByClassName("liBefore");
        for (let i = 0; i < elems.length; i++) {
            if (elems[i].id === "0") {
                elems[i].classList.remove("liJulik");
            }
        }
    }
}

function rounded_rnd(min, max) { // возвращает псевдослучайное целое число в заданном диапазоне. возможно неравномерное распределение
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("min = ", min, "max = ", max, "rnd = ", rnd);
    return rnd;
}


function remakeHideDiv() {
    $("#hideDiv").remove();
    $("#julikDiv").hide();

    let hiddenDiv = $("<div id='hideDiv'></div>")
        .css("margin-left", rounded_rnd(0, 1000))
        .css("margin-top", rounded_rnd(0, screen.height))
        .click( function () {
            $("#julikDiv").show();
            this.remove();
        });
    $("body").append(hiddenDiv);
}

window.onload = function () {
    remakeHideDiv();
    deactivate();
};


