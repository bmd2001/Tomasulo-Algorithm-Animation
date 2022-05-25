document.getElementsByTagName('tr')[0].children[4].style.visibility="hidden";

function hide(eSelect){
    var tr = eSelect.parentElement.parentElement;
    var td = tr.children[4];
    if(eSelect.selectedIndex === 1 | eSelect.selectedIndex === 2){
        td.style.visibility = 'hidden';
    }
    else if(td.style.visibility === 'hidden'){
        td.style.visibility = 'visible';
    }
}