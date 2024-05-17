export function criarContainerGeral() {
    const containerGeral = document.createElement('section');
    containerGeral.classList.add('container__geral');
    return containerGeral;
}
export function criarElementoSobre() {
    const sectionSobre = document.createElement('section');
    const cardSobre = document.createElement('div');
    sectionSobre.classList.add('container__sobre');
    cardSobre.classList.add('card__sobre');
    sectionSobre.innerHTML = `
        <video class="video__intro" loop="loop" muted="muted" autoplay>
            <source src="../public/assets/images/Video-intro.mp4" type="video/mp4">
        </video>
        <h1 class="titulo__secao">Sobre</h1>
    `;
    cardSobre.innerHTML = `
            <aside>
                <img src="./public/assets/images/Ultima.jpg" alt="Perfil" id="foto__perfil" />
                <ul>
                    <li class="meu__nome">Wagner Oliveira</li>
                    <li><img src="./public/assets/images/Icon-cap.svg" alt="Icone de Cap de Formando" />Desenvolvedor Front-End</li>
                    <li><img src="./public/assets/images/Icon-email.svg" alt="Iconte de Email" /><a href="mailto:contato-wagneros@outlook.com">contato-wagneros@outlook.com</a></li>
                    <li><img src="./public/assets/images/Icon-whatsapp.svg" alt="Icone de Contato" /><a href="https://wa.me/5521992316655" target="_blank">+55 21 992316655</a></li>
                    <li><img id="icon__localiza" src="./public/assets/images/Icon-location-dot-solid.svg" alt="Icone de Localização" /><a href="https://wa.me/5521992316655" target="_blank">Rio de Janeiro, RJ - Brasil</a></li>
                </ul>
            </aside>
            <div class="content">
                <h1 align="center">Bem-vindo(a)</h1>
                <p>Sou formado em Análise e Desenvolvimento de sistemas, atuo como desenvolvedor front-end, este é meu portfólio!</p>
                <p>Algumas tecnologias que tenho atuado em meus projetos:</p>
                <ul class="content-tecnologias">
                    <li> HTML </li>
                    <li> CSS </li>
                    <li> JavaScript </li>
                    <li> TypeScript </li>
                    <li> React </li>
                    <li> React Native </li>
                    <li> GIT </li>
                    <li> Figma </li>
                </ul>
            </div>
        `;
    sectionSobre.appendChild(cardSobre);
    return sectionSobre;
}
export function criarElementoProjetos() {
    const sectionProjetos = document.createElement('section');
    const cardProjetos = document.createElement('div');
    sectionProjetos.classList.add('container__projetos');
    cardProjetos.classList.add('card__projetos');
    sectionProjetos.innerHTML = `
        <h1 class="titulo__secao">Projetos</h1> 
    `;
    cardProjetos.innerHTML = `
        <!-- Slider main container -->
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <div class="swiper-player">
                        <img src="./public/assets/images/alurabook.jpg" alt="Projeto Alurabooks" />
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>AluraBooks</h1>
                            <p>Acreditamos que a leitura é uma jornada que enriquece a mente e inspira a imaginação. Nossa loja virtual é mais do que apenas um lugar para comprar livros; é um refúgio para os amantes da leitura, onde descobertas literárias aguardam em cada clique.</p>
                            <p>Responsivo para todas as plataformas.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/Icon-html5.svg" /> CSS</span>
                                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swiper/swiper-original.svg" /> Swiper JS</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/alura-books/" target="_blank"><img src="./public/assets/images/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/alura-books" target="_blank"><img class="icon-github" src="./public/assets/images/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-player">
                        <img src="./public/assets/images/museunacional.jpg" alt="Projeto Museu Nacional" />
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>Museu Nacional</h1>
                            <p>Seja transportado para um mundo de descobertas fascinantes e aprendizado enriquecedor ao explorar a página do Museu Nacional. Somos dedicados a preservar e compartilhar o patrimônio cultural e histórico, oferecendo uma experiência digital envolvente e educativa.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/Icon-html5.svg" /> CSS</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/Project-Museu/" target="_blank"><img src="./public/assets/images/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/Project-Museu" target="_blank"><img class="icon-github" src="./public/assets/images/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-player">
                        <img src="./public/assets/images/spotify.jpg" alt="Projeto Spotify" />
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>Spotify</h1>
                            <p>Através de streaming ouça músicas, assista ou escute podcasts, vídeos e muito mais. Tudo isso em alta qualidade e de qualquer lugar.</p>
                            <p>Desbloqueie ainda mais recursos incríveis com o Spotify Premium, incluindo qualidade de áudio aprimorada, sem anúncios e a capacidade de pular faixas ilimitadamente.</p>
                            <p>Responsivo para todas as plataformas.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/Icon-html5.svg" /> CSS</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/Projeto-Spotify/" target="_blank"><img src="./public/assets/images/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/Projeto-Spotify" target="_blank"><img class="icon-github" src="./public/assets/images/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-player">
                        <img src="./public/assets/images/culturama.jpg" alt="Projeto Culturama" />
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>Culturama</h1>
                            <p>Culturama é um guia de turismo e eventos que te auxilia a encontrar os eventos e programas de viagem que mais combinam com você. Não importa onde ou quando, culturama tem o pragama ideal para você.</p>
                            <p>Responsivo para todas as plataformas.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/Icon-html5.svg" /> CSS</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/Culturama/#" target="_blank"><img src="./public/assets/images/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/Culturama" target="_blank"><img class="icon-github" src="./public/assets/images/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-player">
                        <img src="./public/assets/images/monibank.jpg" alt="Projeto Monibank" />
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>MoniBank</h1>
                            <p>Estamos comprometidos em simplificar sua vida financeira. Com soluções inovadoras e atendimento personalizado, oferecemos uma experiência bancária moderna e eficiente. Controle suas finanças com facilidade, aproveite taxas competitivas e descubra um mundo de possibilidades com nossos serviços digitais. O MoniBank é mais do que um banco; é o seu parceiro de confiança para prosperar financeiramente.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/Icon-html5.svg" /> CSS</span>
                                <span><img src="./public/assets/images/Icon-js.svg" /> JavaScript</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/Monibank/index.html" target="_blank"><img src="./public/assets/images/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/Monibank" target="_blank"><img class="icon-github" src="./public/assets/images/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-player">
                        <img src="./public/assets/images/finans.jpg" alt="Projeto Banco Finans" />
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>Banco Finans</h1>
                            <p>Entendemos que cada jornada financeira é única. Oferecemos soluções personalizadas, desde contas acessíveis até investimentos estratégicos. Com atendimento dedicado e tecnologia inovadora, estamos comprometidos em impulsionar seu sucesso financeiro. Descubra um banco que vai além das transações, moldando um futuro sólido para você e sua família. Seja parte da comunidade BancoFinans, onde cada cliente é uma história de sucesso! </p>
                            <p>Responsivo para todas as plataformas.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/Icon-html5.svg" /> CSS</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/ProjetoFinans/" target="_blank"><img src="./public/assets/images/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/ProjetoFinans" target="_blank"><img class="icon-github" src="./public/assets/images/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <!-- <div class="swiper-button-prev"></div> -->
            <!-- <div class="swiper-button-next"></div> -->

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
    `;
    sectionProjetos.appendChild(cardProjetos);
    return sectionProjetos;
}
export function criarElementoEducacao() {
    const sectionEducacao = document.createElement('section');
    sectionEducacao.classList.add('container__educacao');
    const cardEducacao = document.createElement('div');
    cardEducacao.classList.add('card__educacao');
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
                        <p><a href="https://cursos.alura.com.br/user/contato-wagneros/degree-javascript-front-end-687029/certificate" target="_blank"><img src="./public/assets/images/Icon-link-solid.svg"/>Alura</a></p>
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
                        <p><a href="https://cursos.alura.com.br/user/contato-wagneros/degree-typescript-v309729-309729/certificate" target="_blank"><img src="./public/assets/images/Icon-link-solid.svg"/>Alura</a></p>
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
                        <p><a href="https://cursos.alura.com.br/user/contato-wagneros/degree-typescript-v309729-309729/certificate" target="_blank"><img src="./public/assets/images/Icon-link-solid.svg"/>Alura</a></p>
                        <p>2023</p>
                    </span>
                    <p>Formação: 3 cursos com carga horária estimada em 23 horas.</p>
                </div>
            </li>
        </ul>
    `;
    sectionEducacao.appendChild(cardEducacao);
    return sectionEducacao;
}
