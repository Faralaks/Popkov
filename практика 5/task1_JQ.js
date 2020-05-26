var stepdraw="X" ;
function tdc(e) {
    if (e.innerHTML!="&nbsp;" ) return; //Работа над ошибками ;) Кто заметил - молодец...
    e.innerHTML="<b class=' "+stepdraw+" '>"+stepdraw+ "</b>"; stepdraw=stepdraw==="X"?"O": "X" ;
    var classch="tableClass tableClass"+stepdraw;
    document.getElementById("TableToFill").setAttribute("class",classch);
}
function filltable() {
    var s=' ';
    for(i= 0 ;i < 3 ;i++) {
        s += '<tr>';
        for (j = 0; j < 3; j++) {
            s += '<td onclick="tdc(this)">&nbsp;</td>';
        }
        s += '</tr>'
    }
    document.getElementById("TableToFill").innerHTML=s;
}


let rowCount = 3;
let colCount = 3;

function addRow() {
    let newRow = $("<tr></tr>");
    for (let i = 0; i < colCount; i++) {
        newRow.append($("<td onclick=\"tdc(this)\">&nbsp;</td>"));
    }
    $("tr:last").after(newRow);
}

function addCol() {
    $("tr").append($("<td onclick=\"tdc(this)\">&nbsp;</td>"));
    colCount++;
}

