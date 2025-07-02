(function() {
    // Bloqueia o clique direito (opcional)
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Função para injetar um script dinamicamente
    function injectScript(src, attributes = {}) {
        const script = document.createElement('script');
        script.src = src;
        
        // Adiciona atributos (como 'disable-devtool-auto' e 'md5')
        Object.keys(attributes).forEach(attr => {
            script.setAttribute(attr, attributes[attr]);
        });

        // Injeta no <head> para garantir execução
        document.head.appendChild(script);
    }

    // Carrega o disable-devtool (versão CDN)
    injectScript('https://cdn.jsdelivr.net/npm/disable-devtool@0.2.5', {
        'disable-devtool-auto': '', // Ativa bloqueio automático
        'md5': 'b841d410dd9a2e513225935dfc4a2de8' // Hash de segurança (opcional)
    });

    // --- Código adicional para dificultar a desativação ---
    // 1. Remove o elemento <script> após a execução (dificulta encontrar a origem)
    setTimeout(() => {
        const scripts = document.querySelectorAll('script[src*="disable-devtool"]');
        scripts.forEach(script => script.remove());
    }, 3000);

    // 2. Verifica periodicamente se o disable-devtool ainda está ativo
    setInterval(() => {
        if (!window.DisableDevtool || !window.DisableDevtool.isRunning) {
            // Se foi desativado, reinicia o script
            injectScript('https://cdn.jsdelivr.net/npm/disable-devtool@0.2.5', {
                'disable-devtool-auto': '',
                'md5': 'b841d410dd9a2e513225935dfc4a2de8'
            });
        }
    }, 5000);
})();
