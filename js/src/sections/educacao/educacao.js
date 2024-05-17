export function criarElementoEducacao() {
    const sectionEducacao = document.createElement('section');
    sectionEducacao.classList.add('container__educacao', 'container');
    sectionEducacao.id = 'section4';
    const cardEducacao = document.createElement('div');
    cardEducacao.classList.add('card__educacao');
    const tituloExtraEducacao = document.createElement('h1');
    tituloExtraEducacao.classList.add('titulo__secao', 'titulo__extra-educacao');
    const cardExtraEducacao = document.createElement('div');
    cardExtraEducacao.classList.add('card__extra-educacao');
    sectionEducacao.innerHTML = `
        <h1 class="titulo__secao">Educação</h1>
    `;
    cardEducacao.innerHTML = `
        <ul class="nav__educacao">
            <li class="educacao__item-01">
                <div class="educacao__background">
                </div>
                <div class="educacao__content">
                    <h1>Superior de Tecnologia em Análise e Desenvolvimento de Sistemas</h1>
                    <p>2021-2023</p>
                </div>
            </li>
            <li class="educacao__item-02">
                <div class="educacao__background">
                </div>
                <div class="educacao__content">
                    <h1>Desenvolva Aplicações Web com Javascript</h1>
                    <span class="educacao__instituicao">
                        <p><a href="https://cursos.alura.com.br/degree/certificate/6af9601e-f652-40db-b268-b1ea626f4d96?lang=pt_BR" target="_blank"><img src="./public/assets/images/icons/Icon-link-solid.svg"/>Alura</a></p>
                        <p>2023</p>
                    </span>
                    <p>Formação: 8 cursos com carga horária estimada de 62 horas</p>
                </div>
            </li>
            <li class="educacao__item-03">
                <div class="educacao__background">
                </div>
                <div class="educacao__content">
                    <h1>Melhore Sua Experiência de Desenvolvimento com Typescript</h1>
                    <span class="educacao__instituicao">
                        <p><a href="https://cursos.alura.com.br/degree/certificate/3e64eb1b-a896-45e4-8c99-c64d3b0618ec?lang=pt_BR" target="_blank"><img src="./public/assets/images/icons/Icon-link-solid.svg"/>Alura</a></p>
                        <p>2023</p>
                    </span>
                    <p>Formação: 3 cursos com carga horária estimada em 31 horas.</p>
                </div>
            </li>
            <li class="educacao__item-04">
                <div class="educacao__background">
                </div>
                <div class="educacao__content">
                    <h1>Desenvolva Aplicações Web em Javascript com Tarefas Concorrentes e Orientadas a Objetos</h1>
                    <span class="educacao__instituicao">
                        <p><a href="https://cursos.alura.com.br/degree/certificate/aa8e5058-1f53-4355-9e7d-9c520488efe4?lang=pt_BR" target="_blank"><img src="./public/assets/images/icons/Icon-link-solid.svg"/>Alura</a></p>
                        <p>2023</p>
                    </span>
                    <p>Formação: 3 cursos com carga horária estimada em 23 horas.</p>
                </div>
            </li>
        </ul>
    `;
    tituloExtraEducacao.innerHTML = `
        Extracurriculares
    `;
    cardExtraEducacao.innerHTML = `
    <div class="swiper swiper2">
        <div class="swiper-wrapper swiper-wrapper2">
            <div class="swiper-slide swiper-slide2">
                <img src="./public/assets/images/certificados/certificado-js1.png" />
                </div>
            <div class="swiper-slide swiper-slide2">
                <img src="./public/assets/images/certificados/certificado-js2.png" />
            </div>
            <div class="swiper-slide swiper-slide2">
                <img src="./public/assets/images/certificados/certificado-js3.png" />
            </div>
            <div class="swiper-slide swiper-slide2">
                <img src="./public/assets/images/certificados/certificado-git.webp" />
            </div>
            <div class="swiper-slide swiper-slide2">
                <img src="./public/assets/images/certificados/certificado-rct1.png" />
            </div>
            <div class="swiper-slide swiper-slide2">
            <img src="./public/assets/images/certificados/certificado-rct2.png" />
            </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination swiper-pagination2"></div>
    </div>
    <div class="conteudo__extra-educacao">
        <nav class="conteudo__extra-educacao-nav">
            <ul>
                <li class="conteudo-extra-item-01">Mais Recentes</li>
                <li class="conteudo-extra-item-02">Outros</li>
            </ul>
        </nav>
        <div class="conteudo__extra-educacao-conteudo-recente">
            <ul class="conteudo__extra-educacao-lista">
                <li>
                    <p class="lista-curso javascript"><a href="https://cursos.alura.com.br/certificate/14e45e52-1343-4768-a48f-450c10df91a7" target="_blank">Javascript: De Padrões A Uma Abordagem Funcional</a></p>
                    <p class="lista-data">30/01/2024</p>
                </li>
                <li>
                    <p class="lista-curso javascript"><a href="https://cursos.alura.com.br/certificate/248b629c-c518-4a3a-9ab7-0a66ae83d0fc" target="_blank">Javascript: Consumindo E Tratando Dados De Uma API</a></p>
                    <p class="lista-data">20/12/2023</p>
                </li>
                <li>
                    <p class="lista-curso javascript"><a href="https://cursos.alura.com.br/certificate/04605247-d029-4c2e-a224-e56da0d43daf" target="_blank">Javascript: explorando A Manipulação De Elementos E Da Localstorage</a></p>
                    <p class="lista-data">15/12/2023</p>
                </li>
                <li>
                    <p class="lista-curso git">
                        <a href="https://www.dio.me/certificate/3988733A/share" target="_blank">Versionamento de Código com Git e GitHub</a>
                    </p>
                    <p class="lista-data">12/12/2023</p>
                </li>
                <li>
                    <p class="lista-curso react"><a href="https://cursos.alura.com.br/certificate/a315cba6-9690-4a57-a91d-457956a162f5" target="_blank">React Native: Utilizando E Criando Hooks</a></p>
                    <p class="lista-data">08/12/2023</p>
                </li>
                <li>
                    <p class="lista-curso react"><a href="https://cursos.alura.com.br/certificate/0d5a55d7-5827-4a21-893e-68e260d940f5" target="_blank">React Native: Criando Um App</a></p>
                    <p class="lista-data">04/12/2023</p>
                </li>
            </ul>
        </div>
        <div class="conteudo__extra-educacao-conteudo-outro">
            <ul class="conteudo__extra-educacao-lista">
                <li>
                    <p class="lista-curso react"><a href="https://cursos.alura.com.br/certificate/8aa71ab6-3697-452b-b525-36e534230892" target="_blank">React: desenvolvendo com javascript</a></p>
                    <p class="lista-data">29/11/2023</p>
                </li>
                <li>
                    <p class="lista-curso javascript"><a href="https://cursos.alura.com.br/certificate/825c7912-86ce-4765-8c3d-faa67ffdaf1b" target="_blank">Javascript na web: armazenando dados no navegador</a></p>
                    <p class="lista-data">27/10/2023</p>
                </li>
                <li>
                    <p class="lista-curso javascript"><a href="https://cursos.alura.com.br/certificate/bfa66f2a-75da-439b-b09c-347531b283e3" target="_blank">Javascript: manipulando elementos no dom</a></p>
                    <p class="lista-data">23/10/2023</p>
                </li>
                <li>
                    <p class="lista-curso css"><a href="https://cursos.alura.com.br/certificate/b01bfe8d-aa41-4103-9e94-82da92c2a7c8" target="_blank">Praticando CSS: grid e flexbox</a></p>
                    <p class="lista-data">02/10/2023</p>
                </li>
                <li>
                    <p class="lista-curso html"><a href="https://cursos.alura.com.br/certificate/fc7cecb3-c205-4d42-b6d9-3b121587a750" target="_blank">HTML e CSS: responsividade com mobile-first</a></p>
                    <p class="lista-data">28/09/2023</p>
                </li>
            </ul>
            <span>
                <a href="https://www.linkedin.com/in/wagner-oliveira-b3959a170/details/certifications/" target="_blank"><img src="./public/assets/images/icons/Icon-plus-solid.svg"/> Mais</a>
            </span>
        </div>
    </div>
    `;
    /*SCRIPT REFERENTE A TROCA DE SEÇÃO 'MAIS RECENTE' NO CONTEUDO EXTRACURRICULAR*/
    document.addEventListener('DOMContentLoaded', function () {
        var conteudoExtraItem1 = document.querySelector('.conteudo-extra-item-01');
        var conteudoExtraItem2 = document.querySelector('.conteudo-extra-item-02');
        var conteudoRecente = document.querySelector('.conteudo__extra-educacao-conteudo-recente');
        var conteudoOutro = document.querySelector('.conteudo__extra-educacao-conteudo-outro');
        if (conteudoExtraItem1) {
            conteudoExtraItem1.addEventListener('click', function () {
                if (conteudoRecente) {
                    // Mostrar 'Mais Recente' e ocultar conteúdo 'Outros'
                    conteudoRecente.style.display = 'block';
                    conteudoOutro.style.display = 'none';
                }
                // Adicionar classe "active" ao botão 'Mais Recentes'
                if (conteudoExtraItem1) {
                    conteudoExtraItem1.classList.add('active');
                }
                // Remover classe "active" do outro botão
                if (conteudoExtraItem2) {
                    conteudoExtraItem2.classList.remove('active');
                }
            });
        }
        if (conteudoExtraItem2 && conteudoRecente && conteudoOutro) {
            conteudoExtraItem2.addEventListener('click', function () {
                if (conteudoOutro) {
                    // Mostrar conteúdo 'Outros' e ocultar 'Mais Recente'
                    conteudoRecente.style.display = 'none';
                    conteudoOutro.style.display = 'block';
                }
                // Adicionar classe "active" ao botão 'Outros'
                if (conteudoExtraItem2) {
                    conteudoExtraItem2.classList.add('active');
                }
                // Remover classe "active" do outro botão 'Mais Recentes'
                if (conteudoExtraItem1) {
                    conteudoExtraItem1.classList.remove('active');
                }
            });
        }
    });
    sectionEducacao.appendChild(cardEducacao);
    sectionEducacao.appendChild(tituloExtraEducacao);
    sectionEducacao.appendChild(cardExtraEducacao);
    return sectionEducacao;
}
