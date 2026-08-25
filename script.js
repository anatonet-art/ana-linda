// Alerta Interativo para os botões das seções
function mostrarMensagem(mensagem) {
    alert(mensagem);
}

// ----------------------------------------------------
// GERENCIAMENTO DE TEMA (CLARO / ESCURO)
// ----------------------------------------------------
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// ----------------------------------------------------
// REDIMENSIONAMENTO DE FONTE APENAS PARA CONTEÚDO
// ----------------------------------------------------
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

let multiplicador = 1.0;

btnAumentar.addEventListener('click', () => {
    if (multiplicador < 1.4) { // Limite de 140%
        multiplicador += 0.1;
        aplicarTamanhoFonte();
    }
});

btnDiminuir.addEventListener('click', () => {
    if (multiplicador > 0.8) { // Limite de 80%
        multiplicador -= 0.1;
        aplicarTamanhoFonte();
    }
});

function aplicarTamanhoFonte() {
    // Seleciona exclusivamente os elementos de texto da página
    const elementosParaRedimensionar = document.querySelectorAll(
        'header h1, header p, .info h2, .info p, .info li, .destaque-alerta h3, .destaque-alerta p, .btn-interativo, footer p'
    );

    elementosParaRedimensionar.forEach(el => {
        // Armazena o tamanho original em px na primeira execução
        if (!el.dataset.tamanhoBase) {
            const estilo = window.getComputedStyle(el);
            el.dataset.tamanhoBase = parseFloat(estilo.fontSize);
        }

        const tamanhoOriginal = parseFloat(el.dataset.tamanhoBase);
        el.style.fontSize = (tamanhoOriginal * multiplicador) + 'px';
    });
}
