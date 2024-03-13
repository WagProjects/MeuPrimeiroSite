export function criarElementoPoster() {
    const sectionPoster = document.createElement('section');
    sectionPoster.classList.add('container__poster');
    sectionPoster.innerHTML = `
        <video class="video__intro " loop="loop" muted="muted" autoplay>
            <source src="../public/assets/images/backgrounds/background-banner.mp4" type="video/mp4">
        </video>
        <div class="card__poster">
            <div>
                <h1>Zoio</h1>
            </div>
            <div class="poster__buttons">
                <div class="rede__button git">
                    <a><img class="icon__rede" alt="Icone do github" src="../public/assets/images/icons/Icon-square-github.svg"/>Github</a>
                </div>
                <div class="rede__button linkedin">
                    <a><img class="icon__rede" alt="Icone do linkedin" src="../public/assets/images/icons/Icon-linkedin.svg"/>Linkedin</a>
                </div>
            </div>
        </div>
        <div class="poster__setas">
            <div class="seta__avancar1"></div>
            <div class="seta__avancar2"></div>
            <div class="seta__avancar3"></div>
        </div>
    `;
    const gitButton = sectionPoster.querySelector('.rede__button.git');
    const linkedinButton = sectionPoster.querySelector('.rede__button.linkedin');
    if (gitButton !== null) {
        gitButton.addEventListener('click', () => redirecionaLink('https://github.com/WagProjects'));
    }
    if (linkedinButton !== null) {
        linkedinButton.addEventListener('click', () => redirecionaLink('https://www.linkedin.com/in/wagner-oliveira-b3959a170/'));
    }
    function redirecionaLink(url) {
        window.open(url, '_blank');
    }
    return sectionPoster;
}
