const form  = document.getElementById('regSel');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
})

class FormData{

    constructor(form){
        this.form = Array.from(form.elements);
        this.instructions = [];
        this.intCycles = 0;
        this.addCycles = 0;
        this.mulCycles = 0;
        this.divCycles = 0;
        this.reservationStations = 3;
        this.update();
    }

    getSelectedValue(select){
        return select.options[select.selectedIndex].value;
    }

    update() {
        const instrSelections = this.form.filter(item => item.tagName === "SELECT");
        const cycles = this.form.filter(item => item.tagName === "INPUT");

        for(var i = 0; i < instrSelections.length; i+=4){
            var selectValue = this.getSelectedValue(instrSelections[i]);
            switch(selectValue){
                case "none":
                    break;
                case "LW":
                case "SW":
                    this.instructions.push(this.addLoadInstruction(i, selectValue, instrSelections));
                    break;
                default:
                    this.instructions.push(this.addArithmeticinstruction(i, selectValue, instrSelections));
                    break;
            }
        }
        
        this.intCycles = parseInt(cycles[0].value);
        this.addCycles = parseInt(cycles[1].value);
        this.mulCycles = parseInt(cycles[2].value);
        this.divCycles = parseInt(cycles[3].value);
    }

    addLoadInstruction(index, startValue, selects){
        return startValue + " " + this.getSelectedValue(selects[index+1]) + " " + this.getSelectedValue(selects[index+2]);
    }

    addArithmeticinstruction(index, startValue, selects){
        return startValue + " " + this.getSelectedValue(selects[index+1]) + " " + this.getSelectedValue(selects[index+2]) + " " + this.getSelectedValue(selects[index+3]);
    }

}