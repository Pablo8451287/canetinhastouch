/**
 * Script específico para a tela de Taxa de Paralisação do Motoboy
 */

// Função para processar o pagamento
function processarPagamento() {
    // Obter o tipo e valor da taxa
    const tipoTaxa = "Paralisação do Motoboy";
    const valorTaxa = "12.90";
    
    // Mostrar carregamento
    showLoading();
    
    // Simular processamento de pagamento
    setTimeout(() => {
        // Esconder carregamento
        hideLoading();
        
        // Mostrar mensagem de sucesso
        showMessage('Pagamento processado com sucesso!', 'success');
        
        // Redirecionar para página de sucesso após 1.5 segundos
        setTimeout(() => {
            window.location.href = '../sucesso.html';
        }, 1500);
    }, 2000);
}

// Função para exibir mensagens ao usuário
function showMessage(message, type = 'info') {
    const messageContainer = document.getElementById('message-container');
    if (!messageContainer) {
        const newContainer = document.createElement('div');
        newContainer.id = 'message-container';
        newContainer.className = 'fixed top-4 right-4 z-50';
        document.body.appendChild(newContainer);
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = `p-4 mb-4 rounded shadow-md transition-all duration-500 opacity-0 transform translate-y-2`;
    
    // Definir cores com base no tipo de mensagem
    if (type === 'success') {
        messageElement.className += ' bg-green-500 text-white';
    } else if (type === 'error') {
        messageElement.className += ' bg-red-500 text-white';
    } else {
        messageElement.className += ' bg-blue-500 text-white';
    }
    
    messageElement.textContent = message;
    
    document.getElementById('message-container').appendChild(messageElement);
    
    // Animar entrada da mensagem
    setTimeout(() => {
        messageElement.classList.remove('opacity-0', 'translate-y-2');
    }, 10);
    
    // Remover mensagem após 5 segundos
    setTimeout(() => {
        messageElement.classList.add('opacity-0', 'translate-x-full');
        setTimeout(() => {
            messageElement.remove();
        }, 500);
    }, 5000);
}

// Função para mostrar o indicador de carregamento
function showLoading() {
    const loadingOverlay = document.getElementById('loading-overlay') || createLoadingOverlay();
    loadingOverlay.classList.remove('hidden');
}

// Função para ocultar o indicador de carregamento
function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
    }
}

// Função para criar o overlay de carregamento
function createLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.className = 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
    
    const spinner = document.createElement('div');
    spinner.className = 'animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white';
    
    overlay.appendChild(spinner);
    document.body.appendChild(overlay);
    
    return overlay;
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    const botaoPagarTaxa = document.getElementById('botao-pagar-taxa');
    if (botaoPagarTaxa) {
        botaoPagarTaxa.addEventListener('click', processarPagamento);
    }
});
