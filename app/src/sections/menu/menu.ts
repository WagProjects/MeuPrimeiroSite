export function criarElementoMenu(): HTMLElement{
    const menuNavegacao = document.createElement('nav');
    menuNavegacao.classList.add('menu');
    menuNavegacao.innerHTML = `
        <div>
            <span class="container-icon-music">
                <img class="menu-icon-music" src="../../../public/assets/images/icons/Icon-music-solid.svg" alt="Icone Musica" />
            </span>
            <span>
                <img class="menu-logo" src="../../../public/assets/images/Logo-01.png" alt="Logo" />
            </span>
        </div>
        <ul class="menu__nav">
            <li class="menu-button" data-target="section1" onclick="active(this)"><a href="#" title="Vá para o topo da página" onclick="scrollElemento('.container__geral', event)">Home</a></li>
            <li class="menu-button" data-target="section2" onclick="active(this)"><a href="#" title="Uma preve apresentação sobre mim" onclick="scrollElemento('.container__sobre', event)">Sobre</a></li>
            <li class="menu-button" data-target="section3" onclick="active(this)"><a href="#" title="Meus projetos pessoais" onclick="scrollElemento('.container__projetos', event)">Projetos</a></li>
            <li class="menu-button" data-target="section4" onclick="active(this)"><a href="#" title="Minhas formações e cursos" onclick="scrollElemento('.container__educacao', event)">Educação</a></li>
            <li class="menu-button" data-target="section5" onclick="active(this)"><a href="#" title="Entre em contato" onclick="scrollElemento('.container__contato', event)">Contato</a></li>
        </ul>
    `;
    const iconMusic = menuNavegacao.querySelector('.container-icon-music');
    if (iconMusic !== null) {
        iconMusic.addEventListener('click', alternaMute);
    }
    function alternaMute() {
        var audios = document.querySelectorAll('.audio-tema') as NodeListOf<HTMLAudioElement>;
        audios.forEach((audio) => {
            if (audio.muted) {
                audio.muted = false;
                iconMusic?.classList.remove('muted');
            }
            else {
                audio.muted = true;
                iconMusic?.classList.add('muted');
            }
        });
    }
    return menuNavegacao;
}