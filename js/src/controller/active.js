function active(elementoClicado) {
    // Obtém todos os elementos <li> dentro da lista
    const itensLista = document.querySelectorAll('.menu__nav li');
    if (elementoClicado) {
        // Remove a classe 'active' de todos os itens
        itensLista.forEach((item) => {
            item.classList.remove('active');
        });
        // Adiciona a classe 'active' apenas ao elemento clicado
        elementoClicado.classList.add('active');
    }
    else {
        console.error(`Elemento ${elementoClicado} não encontrado.`);
    }
}
// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // Calcula a posição vertical do centro da janela de visualização
    const viewportCenterY = windowHeight / 2;
    // Verifica se o centro vertical do elemento está dentro da área de visualização central
    return (rect.top <= viewportCenterY && rect.bottom >= viewportCenterY);
}
// Função para atualizar a classe 'active' com base na posição da página
function updateActiveButton() {
    const sections = document.querySelectorAll('.container'); // Adicione a classe 'container' às seções da sua página
    sections.forEach((section, index) => {
        const button = document.querySelectorAll('.menu-button')[index]; // Botão correspondente ao índice da seção
        const isInViewport = isElementInViewport(section);
        if (isInViewport) {
            button.classList.add('active');
        }
        else {
            button.classList.remove('active');
        }
    });
}
// Adiciona um evento de rolagem à janela para chamar a função de atualização
window.addEventListener('scroll', updateActiveButton);
// Chama a função inicialmente para definir o estado inicial
updateActiveButton();
