function calcular() {

    //get
    let salario = document.getElementById('salario').value;
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    //calcular
    let eps = salario * 0.125;
    let pension = salario * 0.16;

    //set

    document.getElementById('eps').value = eps;
    document.getElementById('pension').value = pension;

}

function reset() {


    document.getElementById('nombre').value = "";
    document.getElementById('edad').value = "";
    document.getElementById('salario').value = "";
    document.getElementById('eps').value = "";
    document.getElementById('pension').value = "";
}

