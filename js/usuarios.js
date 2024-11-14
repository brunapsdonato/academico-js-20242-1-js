const usuarios = [
    {
        "nome": "Ana",
        "idade": "20",
        "cpf": "987.654.321-70"
    },
    {
        "nome": "Carla",
        "idade": "25",
        "cpf": "869.856.321-78"
    },

    {
        "nome": "Débora",
        "idade": "30",
        "cpf": "563.856.854-89"
    }
]
function adicionarUsuario(nome, idade, cpf) {
    usuarios.push({ nome, idade, cpf });
    listarUsuarios();
}
function listarUsuarios() {
    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";
    usuarios.forEach((usuario, index) => {
        const item = document.createElement("li");
        item.innerHTML = `<strong>Nome:</strong> ${usuario.nome}<br>
                          <strong>Idade:</strong> ${usuario.idade}<br>
                          <strong>CPF:</strong> ${usuario.cpf}<br>
                          <button onclick="apagarUsuario(${index})">X</button>`;
        lista.appendChild(item);
    });
}
function apagarUsuario(index) {
    usuarios.splice(index, 1);
    listarUsuarios();
}
