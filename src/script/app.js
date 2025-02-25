function abrirModal() {
    document.getElementById("loginModal").style.display = "block";
}

function fecharModal() {
    document.getElementById("loginModal").style.display = "none";
}

document.getElementById("loginBtn").addEventListener("click", abrirModal);

document.getElementById("btnLogin").addEventListener("click", function() {
    const login = document.getElementById("modalLogin").value;
    const senha = document.getElementById("modalSenha").value;

    const usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));

    if (usuarioCadastrado && login === usuarioCadastrado.login && senha === usuarioCadastrado.senha) {
        alert("Login bem-sucedido!");
        localStorage.setItem("usuarioLogado", login);
        fecharModal();
    } else {
        alert("Login ou senha incorretos!");
    }
});
