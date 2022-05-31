const tableRows = Array.from(document.getElementsByTagName('tr'));

tableRows[0].children[4].style.visibility="hidden";
for(let tr of tableRows.slice(1)){
    selectNone(tr.children);
}


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

function changeRegs(eSelect){
    var tr = eSelect.parentElement.parentElement;
    var tds = tr.children;
    const loads = ["LW", "SW"];
    if(eSelect.options[eSelect.selectedIndex].value === "none"){
        selectNone(tds);
    }
    else if(loads.includes(eSelect.options[eSelect.selectedIndex].value) & eSelect.id != "L"){
        selectLw(tds);
        eSelect.id = "L";
    }
    else if(!loads.includes(eSelect.options[eSelect.selectedIndex].value) & eSelect.id != "A"){
        selectALU(tds);
        eSelect.id = "A"
    }
}

function selectNone(tds){
    for (let i = 2; i < tds.length; i++) {
        var td = tds[i];
        var $options = Array.from(td.children[0].options);
        var optionToSelect = $options.find(item => item.value === "");
        optionToSelect.selected = true;
        optionToSelect.style.display = "inline";
        for (let i = 1; i < $options.length; i++) {
            $options[i].style.display = "none";
        }
    }
}

function selectLw(tds){
    tds = Array.from(tds);
    var $options = Array.from(tds[3].children[0].options);
    tds[2].children[0].options[1].selected = true;
    for(let i = 0; i< $options.length; i++){
        var option = $options[i];
        if(option.value.includes('F') | option.value === ""){
            option.style.display = "none";
        }
        else {
            if(option.value===('R1')){
                option.selected = true;
            }
            option.style.display = "inline";
        }
    }

    $options = Array.from(tds[2].children[0].options);
    for(let i = 0; i< $options.length; i++){
        $options[i].style.display = "inline";
        if(i===0){
            $options[i].style.display = "none";
        }
    }
}

function selectALU(tds){
    tds = Array.from(tds);
    var $options = Array.from(tds[3].children[0].options);
    tds[2].children[0].options[1].selected = true;
    tds[4].children[0].options[1].selected = true;
    for(let i = 0; i< $options.length; i++){
        var option = $options[i];
        if(option.value.includes('R') | option.value === ""){
            option.style.display = "none";
        }
        else {
            if(option.value===('F1')){
                option.selected = true;
            }
            option.style.display = "inline";
        }
    }

    $options = Array.from(tds[2].children[0].options);
    for(let i = 0; i< $options.length; i++){
        $options[i].style.display = "inline";
        if(i===0){
            $options[i].style.display = "none";
        }
    }

    $options = Array.from(tds[4].children[0].options);
    for(let i = 0; i< $options.length; i++){
        $options[i].style.display = "inline";
        if(i===0){
            $options[i].style.display = "none";
        }
    }
}