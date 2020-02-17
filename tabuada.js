function CalculaTabuada() {
    let tabuada = document.querySelector("#tabuada tbody");
    let ValorA = parseInt(document.querySelector("#valorA").value);

    tabuada.innerHTML = '';

    for (let ValorB = 0; ValorB <= 10; ValorB++) {
        let resultado = ValorA * ValorB;

        let template = `
        <td>${ValorA}</td>
        <td>x</td>
        <td>${ValorB}</td>
        <td>=</td>
        <td>${resultado}</td>
        `;
        let tr = document.createElement('tr');
        tr.innerHTML = template;
        tabuada.append(tr);

    }
}
/*CalculaTabuada();*/
document.querySelector("#valorA").addEventListener('change', CalculaTabuada);