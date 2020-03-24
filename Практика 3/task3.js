let n = 0;

function startDich() {
    let btn = document.createElement("input");
    n++;
    btn.type = "button";
    btn.value = 'best';
    btn.id = n.toString();
    btn.onclick = function () {
        alert(this.id)
    };
    if (n % 2 === 0) {
        btn.className  = "even";
        document.body.append(btn);
    }
    else {
        document.body.append(btn);
    }
    if (n % 10 === 0) {
        document.body.append(document.createElement("br"));
    }


}