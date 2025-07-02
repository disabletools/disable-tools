(function() {
    // Mensagem que será exibida no console
    const disabledMsg = "%c DISABLED! 🚫";
    const disabledStyle = "color: red; font-size: 18px; font-weight: bold;";

    // Verifica se o DevTools está aberto
    let devToolsOpened = false;
    
    // Função que limpa o console e exibe a mensagem
    function clearAndSpamConsole() {
        if (devToolsOpened) {
            console.clear(); // Limpa o console
            console.log(disabledMsg, disabledStyle); // Exibe a mensagem
            
            // Tenta dificultar a depuração
            setTimeout(clearAndSpamConsole, 50); // Loop rápido
        }
    }

    // Método para detectar o DevTools (baseado em tamanho da janela)
    function checkDevTools() {
        const threshold = 160; // Largura mínima do DevTools
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if ((widthThreshold || heightThreshold) && !devToolsOpened) {
            devToolsOpened = true;
            clearAndSpamConsole(); // Inicia o loop de limpeza
        } else if (!widthThreshold && !heightThreshold) {
            devToolsOpened = false;
        }
    }

    // Verifica a cada 500ms se o DevTools foi aberto
    setInterval(checkDevTools, 500);

    // Bloqueia o clique direito (opcional)
    document.addEventListener('contextmenu', (e) => e.preventDefault());
})();
