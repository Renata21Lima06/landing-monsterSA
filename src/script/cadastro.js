
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const login = document.getElementById("login").value;
        const senha = document.getElementById("senha").value;

        if (!nome || !email || !login || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        // Criando objeto usuário
        const usuario = { nome, email, login, senha };

        // Salvando no localStorage
        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

        alert("Cadastro realizado com sucesso!");
        window.location.href = "../../index.html"; 
    });

