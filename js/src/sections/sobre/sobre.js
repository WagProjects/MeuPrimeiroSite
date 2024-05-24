export function criarElementoSobre() {
    const sectionSobre = document.createElement('section');
    const cardSobre = document.createElement('div');
    sectionSobre.classList.add('container__sobre', 'container');
    sectionSobre.id = 'section2';
    cardSobre.classList.add('card__sobre');
    sectionSobre.innerHTML = `
        <h1 class="titulo__secao">Sobre</h1>
    `;
    cardSobre.innerHTML = `
            <div class="content">
                <h1 align="center">Bem-vindo(a)</h1>
                <p>Venho trabalhando em projetos em meu portfólio com o objetivo de agregar conhecimento e estar preparado para os desafios cotidianos de uma equipe de desenvolvimento.</p>
                <p>Algumas tecnologias que tenho atuado em meus projetos:</p>
                <ul class="content-tecnologias">
                    <li> <img src="./public/assets/images/icons/Icon-html5.svg" class="icon-tecnologias"/> HTML </li>
                    <li> <img src="./public/assets/images/icons/Icon-css3-alt.svg" class="icon-tecnologias"/> CSS </li>
                    <li> <img src="./public/assets/images/icons/Icon-js.svg" class="icon-tecnologias"/> JavaScript </li>
                    <li> 
                        <svg class="devicon-plain" viewBox="0 0 128 128">
                        <path fill="#FFF" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
                        </svg>
                        TypeScript 
                    </li>
                    <li> <img src="./public/assets/images/icons/Icon-react.svg" class="icon-tecnologias"/> React </li>
                    <li> <img src="./public/assets/images/icons/Icon-react.svg" class="icon-tecnologias"/> React Native </li>
                    <li> 
                        <svg class="devicon-plain" viewBox="0 0 128 128">
                            <path fill="#FFF" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
                        </svg> GIT 
                    </li>
                    <li> <img src="./public/assets/images/icons/Icon-figma.svg" class="icon-tecnologias"/> Figma </li>
                </ul>
            </div>
            <aside>
                <img src="./public/assets/images/thumb-sobre.png" alt="Thumb Sobre" />
                <a href="https://drive.google.com/file/d/14ji4DakvNSDD-YhCTzR7wNHbSmvukSky/view" target="_blank"><img src="./public/assets/images/icons/Icon-curriculum.svg" class="icon-curriculo" /> Currículo</a>
            </aside>
        `;
    sectionSobre.appendChild(cardSobre);
    return sectionSobre;
}
