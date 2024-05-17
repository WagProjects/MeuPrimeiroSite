export function criarContainerGeral() {
    const containerGeral = document.createElement('section');
    const containerEstrelas = document.createElement('section');
    const divEstrela1 = document.createElement('div');
    const divEstrela2 = document.createElement('div');
    const divEstrela3 = document.createElement('div');
    const divEstrela4 = document.createElement('div');
    containerGeral.classList.add('container__geral');
    containerEstrelas.classList.add('container__estrelas');
    divEstrela1.classList.add('stars');
    divEstrela2.classList.add('stars2');
    divEstrela3.classList.add('stars3');
    divEstrela4.classList.add('stars4');
    containerEstrelas.appendChild(divEstrela1);
    containerEstrelas.appendChild(divEstrela2);
    containerEstrelas.appendChild(divEstrela3);
    containerEstrelas.appendChild(divEstrela4);
    containerGeral.appendChild(containerEstrelas);
    return containerGeral;
}
