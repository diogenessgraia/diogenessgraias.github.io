// Função para validar e exibir mensagem de sucesso
function validarFormulario(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Captura os dados do formulário
  const nome = document.getElementById('nome').value;
  const endereco = document.getElementById('endereco').value;
  const cpf = document.getElementById('cpf').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const servico = document.querySelector('input[name="servico"]:checked');
  const dataHorario = document.getElementById('data-horario').value;

  // Validação simples
  if (!nome || !endereco || !cpf || !telefone || !email || !servico || !dataHorario) {
    alert('Por favor, preencha todos os campos obrigatórios!');
    return;
  }

  // Exibe uma mensagem de sucesso
  alert('Cadastro realizado com sucesso!\nAgendamento para: ' + dataHorario + '\nServiço: ' + servico.value);
}

// Adiciona um event listener para o formulário de cadastro
document.querySelector('form').addEventListener('submit', validarFormulario);
