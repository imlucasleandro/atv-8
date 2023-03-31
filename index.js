let contatos = []; // array para armazenar os contatos
      
      function adicionarContato() {
        let form = document.getElementById("formulario");
        let contato = {
          nome: form.nome.value,
          sobrenome: form.sobrenome.value,
          nascimento: form.nascimento.value,
          endereco: form.endereco.value,
          email: form.email.value
        };
        contatos.push(contato);
        listarContatos();
        form.reset();
      }
      
      function removerContato() {
        let indice = prompt("Digite o índice do contato a ser removido:");
        if (indice !== null && indice !== "") {
          contatos.splice(indice, 1);
          listarContatos();
        }
      }
      
      function editarContato() {
        let indice = prompt("Digite o índice do contato a ser editado:");
        if (indice !== null && indice !== "") {
          let form = document.getElementById("formulario");
          form.nome.value = contatos[indice].nome;
          form.sobrenome.value = contatos[indice].sobrenome;
          form.nascimento.value = contatos[indice].nascimento;
          form.endereco.value = contatos[indice].endereco;
          form.email.value = contatos[indice].email;
          contatos.splice(indice, 1);
          listarContatos();
        }
      }
      
      function listarContatos() {
  let lista = document.getElementById("contatos");
  lista.innerHTML = "";
  for (let i = 0; i < contatos.length; i++) {
    let contato = contatos[i];
    let item = document.createElement("li");
    item.textContent = `${contato.nome} ${contato.sobrenome}`;
    lista.appendChild(item);
  }
}
