function exibirAlerta() {
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-success";
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "15%"; // Ajuste a posição vertical em relação à altura da tela
    alertDiv.style.right = "15%"; // Ajuste a posição em relação à largura da tela
    alertDiv.style.width = "18%"; // Ajuste a largura do alerta em relação à largura da tela
    alertDiv.style.backgroundColor = "rgba(0, 103, 65, 0.7)"; // Cor verde mais clara e um pouco mais transparente
    alertDiv.style.padding = "10px"; // Ajuste o padding para torná-lo menor
    alertDiv.style.color = "white"; // Cor do texto
    alertDiv.style.fontSize = "1.2vw"; // Ajuste o tamanho da fonte em relação à largura da tela
    alertDiv.style.borderRadius = "4px"; // Ajuste a borda arredondada
    alertDiv.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)"; // Adiciona sombreado
    alertDiv.innerHTML = "Logado com sucesso!";
    document.body.appendChild(alertDiv);

    // Animação de entrada
    var startPosition = -200;
    var endPosition = 0; // Posição final (grudado no lado direito)
    var interval = setInterval(function() {
        if (startPosition >= endPosition) {
            clearInterval(interval);
        } else {
            alertDiv.style.right = startPosition + "px";
            startPosition += 3; // Ajuste a velocidade de entrada conforme necessário
        }
    }, 10); // Intervalo de atualização da posição

    setTimeout(function() {
        // Animação de saída
        var opacity = 1;
        var fadeInterval = setInterval(function() {
            if (opacity <= 0) {
                clearInterval(fadeInterval);
                document.body.removeChild(alertDiv);
            } else {
                alertDiv.style.opacity = opacity;
                opacity -= 0.01; // Ajuste a velocidade de desaparecimento conforme necessário
            }
        }, 50); // Intervalo de atualização da opacidade
    }, 5000); // Tempo de exibição antes da animação de saída
}

// Verifica se há um parâmetro "login_success" na URL
// Verifica se há um parâmetro "login_success" na URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("login_success")) {
    // Verifica se a largura da tela é maior que 768 pixels (pode ajustar esse valor conforme necessário)
    if (window.innerWidth > 500) {
        exibirAlerta();
    }
    // Remove o parâmetro da URL para que o alerta não seja exibido novamente ao atualizar a página
    history.replaceState(null, "", window.location.pathname);
}