let n = 0;

function startDich() {
    let btn = document.createElement("input");
    n++;
    btn.type = "button";
    btn.value = 'best';
    btn.name = n.toString();
    btn.className = "btn";
    btn.onclick = function () {
        alert("I am the "+ this.name)
    };
    if (n % 2 === 0) {
        btn.id  = "even";
        document.body.append(btn);
    }
    else {
        if (n === 21) {
            btn.className = "btn";
            btn.id = "btn21";
            btn.value =  "back";
            btn.onclick = function () {
                location.href = "task2.html"
            };
            console.log("BTN21")
        }
        document.body.append(btn);
    }
    if (n % 10 === 0) {
        document.body.append(document.createElement("br"));
    }


}