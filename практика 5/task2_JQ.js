let size = undefined;

function rounded_rnd(min, max) { // возвращает псевдослучайное целое число в заданном диапазоне. возможно неравномерное распределение
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log("min = ", min, "max = ", max, "rnd = ", rnd);
    return rnd;
}


function gen() {
    for (let  i = 0; i <= rounded_rnd(3, 20); i++) {
        let  newDiv  = $("<div></div>")
            .css("margin-left", rounded_rnd(40, 300))
            .css("margin-top", rounded_rnd(40, 300));

        let  newBtn  = $("<div></div>")
            .css("height", rounded_rnd(40, 400))
            .css("width", rounded_rnd(40, 500))
            .addClass("myBtn");

        newBtn.click(function () {
            let divKostrat = $("<div></div>")
                .addClass("kostrat")
                .append($("#img"));


            if (size) {
                $(".kostrat").remove();
                divKostrat.css("width", size.width)
                    .css("height", size.height);

                size.width = this.style.width;
                size.height = this.style.height;
            }
            else {
                size = {
                    width: this.style.width,
                    height: this.style.height
                };
                divKostrat.css("width", size.width)
                    .css("height", size.height);
            }
            $(this).after(divKostrat);

        });
        newDiv.append(newBtn);
        $("#mainDiv").append(newDiv);
    }

}

window.onload = function () {
    gen();
    console.log(size);
};
