const screen = document.querySelector('.screen');

const numbers = document.querySelector('button.numbers');

const calculator = document.querySelector('.calculator');

let varToCalc = [];
let operation;

function numberSelection(event){
    if(screen.innerText === '0'){
        screen.innerText = event.target.innerText;
    }
    else{
        screen.innerText += event.target.innerText;
    }
}

calculator.addEventListener("click", function(event){
    
    // Eleccion de los numeros
    if(event.target.className === "numbers" || event.target.className === "zero"){
        //screen.innerText += event.target.innerText;
        numberSelection(event);
    }
    else{
        //screen.innerText to int
        varToCalc.push(parseInt(screen.innerText));
        screen.innerText = "";
        console.log(varToCalc);
    }
    // Operacion SUMA
    if(event.target.innerText === "+"){
        operation = "suma";      
    }
    // Operacion RESTA
    if(event.target.innerText === "-"){
        operation = "resta";
    }
    // Operacion MULTIPLICACION
    if(event.target.innerText === "*"){
        operation = "multiplicacion";
    }
    // Operacion DIVISION
    if(event.target.innerText === "/"){
        operation = "division";
    }
    // Operación Limpieza
    if(event.target.innerText === "C"){
        screen.innerText = "";
        varToCalc = [];
    }
    // Operación Retroceso
    if(event.target.innerText === "←"){//------------------------------ARREGLAR ESTE------------------------------
        //screen.innerText = "OLIS";
        screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
        console.log(screen.innerText);
    }

    // Operacion Igual
    if(event.target.innerText === "="){
        if(operation === "suma"){
            operation = "";
            let sumOp = varToCalc[varToCalc.length - 1] + varToCalc[varToCalc.length - 2];
            varToCalc.push(sumOp);
            console.log("POP: ", sumOp);
            screen.innerText = sumOp;
        }
        if(operation === "resta"){
            operation = "";
            let sumOp = varToCalc[varToCalc.length - 2] - varToCalc[varToCalc.length - 1];
            varToCalc.push(sumOp);
            console.log("POP: ", sumOp);
            screen.innerText = sumOp;
        }
        if(operation === "multiplicacion"){
            operation = "";
            let sumOp = varToCalc[varToCalc.length - 2] * varToCalc[varToCalc.length - 1];
            varToCalc.push(sumOp);
            console.log("POP: ", sumOp);
            screen.innerText = sumOp;
        }
        if(operation === "division"){
            operation = "";
            let sumOp = varToCalc[varToCalc.length - 2] / varToCalc[varToCalc.length - 1];
            varToCalc.push(sumOp);
            console.log("POP: ", sumOp);
            screen.innerText = sumOp;
        }
        if(operation === ""){
            screen.innerText = varToCalc[varToCalc.length - 1];
        }
    }
});
