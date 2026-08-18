// Função para os botões interativos das seções (Dica de Ouro, etc.)
function mostrarMensagem(mensagem) {
    alert(mensagem);
}

// ----------------------------------------------------
// LÓGICA DE ACESSIBILIDADE
// ----------------------------------------------------

// 1. Alternar Tema (Claro / Escuro)
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// 2. Aumentar e Diminuir Fonte Proporcionalmente
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

// Fator de escala inicial (1 = 100%)
let multiplicadorFonte = 1.0;

btnAumentar.addEventListener('click', () => {
    if (multiplicadorFonte < 1.5) { // Limite máximo de 150%
        multiplicadorFonte += 0.1;
        atualizarTamanhoTextos();
    }
});

btnDiminuir.addEventListener('click', () => {
    if (multiplicadorFonte > 0.8) { // Limite mínimo de 80%
        multiplicadorFonte -= 0.1;
        atualizarTamanhoTextos();
    }
});

function atualizarTamanhoTextos() {
    // Seleciona apenas os elementos de texto do conteúdo da página
    const elementosTexto = document.querySelectorAll(
        'header h1, header p, .info h2, .info p, .info li, .destaque-alerta h3, .destaque-alerta p, footer p, .btn-interativo'
    );

    elementosTexto.forEach(el => {
        // Guarda o tamanho original do elemento na primeira vez que for executado
        if (!el.dataset.tamanhoOriginal) {
            const estiloComputado = window.getComputedStyle(el);
            el.dataset.tamanhoOriginal = parseFloat(estiloComputado.fontSize);
        }

        // Aplica o novo tamanho baseado no tamanho original * multiplicador
        const tamanhoBase = parseFloat(el.dataset.tamanhoOriginal);
        el.style.fontSize = (tamanhoBase * multiplicadorFonte) + 'px';
    });
}