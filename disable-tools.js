// anti-devtool.js
(function() {
    // Bloqueia clique direito (opcional)
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Função para injetar scripts dinamicamente
    function injectScript(src, attributes = {}) {
        const script = document.createElement('script');
        script.src = src;
        
        // Adiciona atributos (como 'disable-devtool-auto' e 'md5')
        Object.keys(attributes).forEach(attr => {
            script.setAttribute(attr, attributes[attr]);
        });

        document.head.appendChild(script);
    }

    // Carrega o disable-devtool via CDN
    injectScript('https://cdn.jsdelivr.net/npm/disable-devtool@0.2.5', {
        'disable-devtool-auto': '', // Ativa bloqueio automático
        'md5': 'b841d410dd9a2e513225935dfc4a2de8' // Hash de segurança
    });

    // Remove o script após carregar (dificulta rastreamento)
    setTimeout(() => {
        const scripts = document.querySelectorAll('script[src*="disable-devtool"]');
        scripts.forEach(script => script.remove());
    }, 3000);

    // Verifica se o disable-devtool ainda está ativo (se não, reinicia)
    setInterval(() => {
        if (!window.DisableDevtool || !window.DisableDevtool.isRunning) {
            injectScript('https://cdn.jsdelivr.net/npm/disable-devtool@0.2.5', {
                'disable-devtool-auto': '',
                'md5': 'b841d410dd9a2e513225935dfc4a2de8'
            });
        }
    }, 5000);
})();
