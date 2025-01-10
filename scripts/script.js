const anoAtual = new Date().getFullYear();
const todosDireitos = `Todos os direitos reservados © ${anoAtual} Lucian Ortolan`;
document.querySelector(".rodape__paragrafo").textContent = todosDireitos;

(function() {
    emailjs.init("nGUVSLqh3qZWUp1G3"); // Substitua pelo seu USER ID do EmailJS
})();

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    // Dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Parâmetros para o EmailJS
    const templateParams = {
    from_name: nome,
    from_email: email,
    message: mensagem,
    };

    // Enviar o e-mail
    emailjs.send("service_7c58wjr", "template_zlo0keo", templateParams)
    .then(function(response) {
        document.getElementById("status").textContent = "Mensagem enviada com sucesso!";
    }, function(error) {
        document.getElementById("status").textContent = "Erro ao enviar mensagem. Tente novamente.";
        console.error("Erro:", error);
    });
});