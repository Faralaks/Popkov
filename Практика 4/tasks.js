let maxCaseCount;
let caseCount;

let right;
let wrong;

let users = [];
let curUser;

function fresh() {
    console.log(users);
    let sessions = $("#sessions");
    sessions.empty();
    users.sort().reverse();
    users.forEach(function(item, i, arr) {
        let newUserP = document.createElement("p");
        newUserP.textContent = item[1]+" - "+item[0];
        sessions.append(newUserP);
    });
}

function check(login) {
    for (let i = 0; i<users.length; i++) {
        if (users[i][1] === login) {
            return i
        }
    }
    return -1;
}

function justHide() {
    $("#fullScreen").hide();
    $("#addWindow").hide();
    $("#loginForm").show();
}
function showResultWindow() {
    $("#fullScreen").show();
    $("#addWindow").show();
    $("#loginForm").hide()
}
function addResult() {
    let dataField = $("#data");
    let data = dataField.val().split(":");

    dataField.val("");

    users.push([parseFloat(data[1]), data[0], 0]);
    justHide();
    fresh();
}


function hideLoginForm() {
    let loginField = $("#login");
    let login = loginField.val();
    if (login === "") {alert("Поле Логин должно быть заполнено!"); return;}
    let inx = check(login);
    if (inx !== -1) {
        if (!$("#checkLogin").is(':checked')) {
            alert("Такой логин уже существует(");
            return;
        }
        else {
            login = users[inx][1]+"_"+users[inx][2];
            alert(`Такой логин уже занят, Вам присвоен логин ${login}`);
            users[inx][2]++;
        }
    }

    maxCaseCount = parseInt($("#level").val())*10;
    console.log("maxCaseCount = ", maxCaseCount);
    $("#fullScreen").hide();
    $("#casesBlock").empty();
    $("#results").hide();
    caseCount = 1;
    wrong = 0;
    right = 0;

    let newUser = [" ", login, 0];
    users.push(newUser);
    curUser = newUser;
    loginField.val("");
    alert(`Добро пожаловать ${login}, посмотрим, на что ты способен!`)
    fresh();
    genCase();
}

function showLoginForm() {
    $("#fullScreen").show()
}

function rounded_rnd(min, max) { // возвращает псевдослучайное целое число в заданном диапазоне. возможно неравномерное распределение
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("min = ", min, "max = ", max, "rnd = ", rnd);
    return rnd;
}

function plus(p, x, y) {
    console.log("PLUS func");
    p.textContent = x+"+"+y+"=";
    return  (x+y).toString();
}
function minus(p, x, y) {
    console.log("MINUS func");
    p.textContent = x+"-"+y+"=";
    return (x-y).toString();
}
function multiply(p, x, y) {
    console.log("MULTIPLY func");
    p.textContent = x+"x"+y+"=";
    return (x*y).toString();
}
function division(p, x, y) {
    console.log("DIVISION func");
    p.textContent = x*y+"/"+y+"=";
    return (x).toString();
}
function sqr(p, x) {
    console.log("SQR func");
    p.textContent = "sqr("+x*x+")=";
    return x.toString();
}
let funcs = [plus, minus, multiply, division, sqr];

function genCase() {
    if (caseCount <= maxCaseCount) {
        console.log("caseCount = ", caseCount);
        let caseBlock = $("#casesBlock");
        let newP = document.createElement("p");
        let newField = document.createElement("input");
        let newBtn = document.createElement("div");
        let newAns = document.createElement("p");

        newField.type = "number";
        newField.max = "999";
        newField.min = "-999";
        newField.className = "textFields";

        newBtn.className = "murkyBtnLittle";
        newBtn.textContent = "Проверить";

        newAns.style.display = "inline";

        let result =  funcs[rounded_rnd(0,4)](newP, rounded_rnd(1, 10), rounded_rnd(1, 10));

        newField.placeholder = result;
        newBtn.id = result;
        newBtn.onclick = function() {
            if (newField.value === "") {alert("Поле с ответом должно быть заполнено!"); return;}
            newAns.textContent = newField.value;
            newField.hidden = true;
            if (this.id === newField.value) {
                this.className = "okBtn";
                this.textContent = "ОК";
                this.onclick = function () {};
                right++;
            }
            else {
                this.className = "wrongBtn";
                this.textContent = "Неверно";
                this.onclick = function () {};
                wrong++;
            }
            genCase();
        };

        newP.append(newField);
        newP.append(newAns);
        newP.append(newBtn);
        caseBlock.append(newP);

        caseCount++;
        console.log("===============")
    }
    else {
        $("#results").show();
        $("#wrongCount").text(`Неверных оветов ${wrong}`);
        $("#rightCount").text(`Верных оветов ${right}`);
        $("#middleCount").text(`Среднее  ${Math.floor((right/maxCaseCount)*100)/100}`);
        $("#mark").text(`По шкале  ${Math.round(right*15/maxCaseCount)}`); // пропорция, произведения крайних равно произведению средних
        $("#final").text(`Финальная  ${(right/maxCaseCount) * ((maxCaseCount/10)*(maxCaseCount/10))}`);
        curUser[0] = (right/maxCaseCount) * ((maxCaseCount/10)*(maxCaseCount/10));
        fresh()
    }

}

