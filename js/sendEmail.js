const nome = document.getElementById("nome");
const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");
const tipo_projeto = document.getElementById("tipo-projeto");
const valor_luz = document.getElementById("valor-luz");
const email = document.getElementById("email");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let ebody = `
    <h1>Nome: </h1>${nome.value}
    <br>
    <h1>Estado: </h1>${estado.value}
    <br>
    <h1>Cidade: </h1>${cidade.value}
    <br>
    <h1>Tipo do projeto: </h1>${tipo_projeto.value}
    <br>
    <h1>Valor da conta de luz no mês: </h1>${valor_luz.value}
    <br>
    <h1>Email: </h1>${email.value}
    `;

  Email.send({
    SecureToken: "4745527e-3b45-4988-aefd-aa4b0c771acc", //add your token here
    To: "orcamentos@pwon.com.br",
    From: "orcamentos@pwon.com.br",
    Subject: "Orçamento do site PWON",
    Body: ebody,
  }).then((message) => alert("Formulário Enviado"), apagarDadosFormulario());
});

function apagarDadosFormulario() {
  nome.value = "";
  estado.value = "";
  cidade.value = "";
  tipo_projeto.value = "";
  valor_luz.value = "";
  email.value = "";
}
