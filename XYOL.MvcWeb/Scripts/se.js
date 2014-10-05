// JavaScript Document
function em(id) { return document.getElementById(id); }
function chgMenu(w, Ind, Max) {
    for (var i = 1; i <= Max; i++) {
        em(w + "_" + i).className = w + "_f";
        em(w + "_1_" + i).style.display = "none";
    }
    em(w + "_" + Ind).className = w + "_o";
    em(w + "_1_" + Ind).style.display = "";
}

function chgMenux(w, Ind, Max) {
    for (var i = 1; i <= Max; i++) {
        //em(w+"_"+i).className=w+"_f";
        em(w + "_1_" + i).style.display = "none";
    }
    //em(w+"_"+Ind).className=w+"_o";
    em(w + "_1_" + Ind).style.display = "";
}
function chgMenuindex() {
    em("gg1").style.display = "none";
    em("gg").style.display = "";
}
function chgMenuindex1() {
    em("gg").style.display = "none";
    em("gg1").style.display = "";
}
function openLink(obj) {
    var urlStr = obj.options[obj.selectedIndex].value;
    //window.open(urlStr);
    document.form1.action = urlStr;
    document.form1.submit();
}
