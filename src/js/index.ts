let Input: HTMLInputElement = <HTMLInputElement>document.getElementById("Input");
let Output: HTMLDivElement = <HTMLDivElement>document.getElementById("Output");

let SelectionElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("DropDownSelection");
let ApplyButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ApplyButton");
ApplyButton.addEventListener("click",toUpperOrLowerCase)


function toUpperOrLowerCase(): void {
    let DropDownSelection: string = SelectionElement.value;
    let InputUser: string = Input.value;
    let TextInput = InputUser; 

    if(DropDownSelection === "Uppercase") {
    Output.innerHTML = String(TextInput).toUpperCase();
    }

    if(DropDownSelection === "Lowercase"){
    Output.innerHTML = String(TextInput).toLowerCase();
    }
 }