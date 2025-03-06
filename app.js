//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    let sorteioValido = false;
    let sorteados = [];
    let resultado = [];

    while (!sorteioValido) {
        sorteados = [...amigos];
        sorteados.sort(() => Math.random() - 0.5);
        sorteioValido = true;

        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === sorteados[i]) {
                sorteioValido = false;
                break;
            }
        }
    }

    for (let i = 0; i < amigos.length; i++) {
        resultado.push(`${amigos[i]} → ${sorteados[i]}`);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const lista = document.getElementById("resultado");
    lista.innerHTML = "";

    resultado.forEach((item) => {
        const elemento = document.createElement("li");
        elemento.textContent = item;
        lista.appendChild(elemento);
    });
}
