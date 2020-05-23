let count = -1;
let trueAnses = 0;

let qs = [
    ["Сколько ёжику лет?", 0, "Я думаю, ему определенно около 14", 0, "Будь я проклят, если не 54", 1, "уже нисколько, сошел с ума на каратнтине в возрасте 21"],
    ["Где раки зимуют?", 1, "В морозилке", 0, "В стиарльной машине", 0, "В Лыткарино, прости Господи..."],
    ["Кто от нас не отстанет?", 0, "Синицин", 1, "Воронин", 0, "Лебедев"]
];

function deactivate(e, right=0) {
    let anses = document.getElementsByTagName("li");
    for (let  i = 0; i < anses.length; i++) {
        anses[i].className = "liAfter";
        anses[i].onclick = function () {}
    }
    e.style.background = "yellow";
    trueAnses += right;

    count++;
    if (count >= qs.length) {
        let resultDiv = document.createElement("div");
        resultDiv.id = "resDiv";
        resultDiv.textContent = "Правильных ответов "+trueAnses;
        document.body.append(resultDiv);
    }
    else {
        let newH1 = document.createElement("h1");
        newH1.textContent = qs[count][0];
        document.body.append(newH1);

        let newUl = document.createElement("ul");
        for (let i = 2; i <= 6; i+=2) {
            let newLi = document.createElement("li");
            newLi.textContent = qs[count][i];
            newLi.onclick = function () { deactivate(this, parseInt(qs[count][i-1])) }
            newLi.className = "liBefore";
            newUl.append(newLi);
        }
        document.body.append(newUl);


    }
}