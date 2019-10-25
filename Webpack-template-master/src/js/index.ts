let udregnetInputPris: number;
let udregnetFærdigPris: number;
let valgAfBilType: string;

//OutPutElement
let OutPutElement: HTMLDivElement =  <HTMLDivElement>document.getElementById("output");

//Bil Pris
let BilPrisInput: HTMLInputElement = <HTMLInputElement>document.getElementById("BilPris");

//Se Skat Button
let SeeSkatButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("SeeSkatButton");
SeeSkatButton.addEventListener("click", udregning);



function udregning()
{
    let inputAfBil = (<HTMLSelectElement>document.getElementById('selectIdCarStuffOverHere')).value;
    if (inputAfBil=='PersonBil') 
    {
    udregnetInputPris = parseInt(BilPrisInput.value);

    if (udregnetInputPris<=200000) 
    {
        udregnetFærdigPris = udregnetInputPris * 0.85;
    }
    else{
    udregnetFærdigPris=(udregnetInputPris * 1.50) - 130000;
    }
    OutPutElement.innerHTML = udregnetFærdigPris.toString();
    }

    if(inputAfBil=='ElBil')
    {
    udregnetInputPris = parseInt(BilPrisInput.value);

    if (udregnetInputPris <= 200000) 
    {
        udregnetFærdigPris = (udregnetInputPris * 0.85)*0.2;
    }
    else{
    udregnetFærdigPris=((udregnetInputPris * 1.50) - 130000)*0.2;
    }
    OutPutElement.innerHTML = udregnetFærdigPris.toString();
    }
}