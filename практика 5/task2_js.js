let size = undefined;

function rounded_rnd(min, max) { // возвращает псевдослучайное целое число в заданном диапазоне. возможно неравномерное распределение
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log("min = ", min, "max = ", max, "rnd = ", rnd);
    return rnd;
}


function gen() {
    for (let  i = 0; i <= rounded_rnd(3, 20); i++) {
        let  newDiv  = document.createElement("div");
        let  newBtn  = document.createElement("div");
        newBtn.style.height = rounded_rnd(40, 400).toString() + "px";
        newBtn.style.width = rounded_rnd(40, 800).toString() + "px";
        newDiv.style.margin = rounded_rnd(40, 300).toString() + "px "  + rounded_rnd(40, 300).toString() + "px " + rounded_rnd(40, 300).toString() + "px " + rounded_rnd(40, 1300).toString() + "px";
        newBtn.className = "myBtn";
        newBtn.textContent = "";
        newBtn.onclick = function () {
            let myImg = document.getElementById("img");
            let imgParent = myImg.parentNode;
            let parent = this.parentNode;
            divKostrat = document.createElement("div");

            divKostrat.className = "kostrat";
            divKostrat.append(myImg);
            if (size) { imgParent.parentNode.removeChild(imgParent); }

            if (size) {
                divKostrat.style.width = size.width;
                divKostrat.style.height = size.height;
                size.width = this.style.width;
                size.height = this.style.height;
            }
            else {
                size = {
                    width: this.style.width,
                    height: this.style.height
                };
                divKostrat.style.width = size.width;
                divKostrat.style.height = size.height;
            }



            parent.append(divKostrat);
        };
        newDiv.append(newBtn);
        document.getElementById("mainDiv").append(newDiv);
    }

}

window.onload = function () {
    gen();
    console.log(size);
};
