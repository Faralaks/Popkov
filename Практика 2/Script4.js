function answers() {
    count = 0;
    if (document.getElementById("r11").checked) count +=1;
    if (document.getElementById("r22").checked) count +=1;
    if (document.getElementById("r31").checked) count +=1;
    if (count === 3){
        document.getElementById("art").hidden = false  }
    else {
        document.getElementById("res").value = `Неправильных ответов: ${3 - count}  `}
    if (count === 3){
        document.getElementById("res").hidden = true}
}
function changes() {
    document.getElementById("res").value = "Тыкни для проверочки";
   if (document.getElementById("res").hidden = true){
       document.getElementById("res").hidden = false
   }
   if (document.getElementById("art").hidden = true){
       document.getElementById("art").hidden = true
   }
}