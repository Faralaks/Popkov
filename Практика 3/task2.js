let status = true;
let baton;
let text;
function saveText(newValue) {
    text = newValue;
}

function change() {
    baton = $("#ya_baton");
    if (status) {
        status = !status;
        baton.text( "Нажата");
        baton.css("background", "darkred");
        $("#second").show();
        $("#first").hide();
        $("#text2").val(text)
    }
    else {
        status = !status;
        baton.text("Отжата");
        baton.css("background", "red");
        $("#first").show();
        $("#second").hide();
        $("#text1").val(text)

    }

}