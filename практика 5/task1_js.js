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


let colCount = 3;

function addRow() {
    let table = document.getElementsByTagName("tbody")[0];
    let newRow = document.createElement("tr");
    let newCol;
    for (let i = 0; i < colCount; i++) {
        newCol = document.createElement("td");
        newCol.innerHTML = '<td>&nbsp;</td>';
        newCol.onclick = function () {
            tdc(this)
        };
        newRow.append(newCol);
    }
    table.append(newRow);

}

function addCol() {
    let elems = document.getElementsByTagName("tr");
    let newCol;

    for (let i = 0; i < elems.length; i++) {
        newCol = document.createElement("td");
        newCol.innerHTML = '<td>&nbsp;</td>';
        newCol.onclick = function () {
            tdc(this)
        };
        elems[i].append(newCol);
    }
    colCount++;
}

