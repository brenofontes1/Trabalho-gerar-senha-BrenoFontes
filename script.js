const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()_+-'

function gerarSenha() {
  const quantidade = Number(document.getElementById("caracteres").value)

  if (!quantidade || quantidade < 8) {
    mostrarMensagem("Digite no mínimo 8 caracteres")
  }

  let senha = ""
  for (let i = 0; i < quantidade; i++) {
    const posicao = Math.floor(Math.random() * caracteres.length)
    senha += caracteres.charAt(posicao)
  }

  document.getElementById("senha").value = senha
  mostrarMensagem("")
}

function copiar() {
  const valor = document.getElementById("senha").value
  if (valor) {
    navigator.clipboard.writeText(valor)
    mostrarMensagem("Senha copiada")
  } else {
    mostrarMensagem("Nenhuma senha foi gerada")
  }
}

function mostrarMensagem(texto) {
  document.getElementById("mensagem").textContent = texto
}

document.getElementById("btn-gerar").addEventListener("click", gerarSenha)
document.getElementById("btn-copiar").addEventListener("click", copiar)