export function criarElementoProjetos() {
    const sectionProjetos = document.createElement('section');
    const cardProjetos = document.createElement('div');
    sectionProjetos.classList.add('container__projetos', 'container');
    sectionProjetos.id = 'section3';
    cardProjetos.classList.add('card__projetos');
    sectionProjetos.innerHTML = `
        <h1 class="titulo__secao">Projetos</h1> 
    `;
    cardProjetos.innerHTML = `
        <!-- Slider main container -->
        <div class="swiper swiper1">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper swiper-wrapper-projetos">
                <!-- Slides -->
                <div class="swiper-slide swiper-slide-projetos">
                    <div class="swiper-player">
                        <video class="projeto__video" loop="loop" muted="muted" autoplay>
                            <source src="../public/assets/videos/video-alurabook.mp4" type="video/mp4">
                            <img src="./public/assets/images/alurabook.jpg" alt="Miniatura do vídeo Projeto Alura Book" />
                        </video>
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>AluraBooks</h1>
                            <p>Acreditamos que a leitura é uma jornada que enriquece a mente e inspira a imaginação. Nossa loja virtual é mais do que apenas um lugar para comprar livros; é um refúgio para os amantes da leitura, onde descobertas literárias aguardam em cada clique.</p>
                            <p>Responsivo para todas as plataformas.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/icons/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/icons/Icon-html5.svg" /> CSS</span>
                                <span><i class="devicon-swiper-original"></i> Swiper JS</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/alura-books/" target="_blank"><img src="./public/assets/images/icons/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/alura-books" target="_blank"><img class="icon-github" src="./public/assets/images/icons/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="swiper-slide swiper-slide-projetos">
                    <div class="swiper-player">
                        <img src="./public/assets/images/museunacional.jpg" alt="Miniatura do vídeo Museu Nacional" />
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>Museu Nacional</h1>
                            <p>Seja transportado para um mundo de descobertas fascinantes e aprendizado enriquecedor ao explorar a página do Museu Nacional. Somos dedicados a preservar e compartilhar o patrimônio cultural e histórico, oferecendo uma experiência digital envolvente e educativa.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/icons/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/icons/Icon-html5.svg" /> CSS</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/Project-Museu/" target="_blank"><img src="./public/assets/images/icons/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/Project-Museu" target="_blank"><img class="icon-github" src="./public/assets/images/icons/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="swiper-slide swiper-slide-projetos">
                    <div class="swiper-player">
                        <video class="projeto__video" loop="loop" muted="muted" autoplay>
                            <source src="../public/assets/videos/video-spotify.mp4" type="video/mp4">
                            <img src="./public/assets/images/spotify.jpg" alt="Miniatura do vídeo do Projeto Spotify" />
                        </video>
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
                                <span><img src="./public/assets/images/icons/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/icons/Icon-html5.svg" /> CSS</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/Projeto-Spotify/" target="_blank"><img src="./public/assets/images/icons/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/Projeto-Spotify" target="_blank"><img class="icon-github" src="./public/assets/images/icons/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="swiper-slide swiper-slide-projetos">
                    <div class="swiper-player">
                        <video class="projeto__video" loop="loop" muted="muted" autoplay>
                            <source src="../public/assets/videos/video-culturama.mp4" type="video/mp4">
                            <img src="./public/assets/images/culturama.jpg" alt="Miniatura do vídeo do Projeto Culturama" />
                        </video>
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>Culturama</h1>
                            <p>Culturama é um guia de turismo e eventos que te auxilia a encontrar os eventos e programas de viagem que mais combinam com você. Não importa onde ou quando, culturama tem o pragama ideal para você.</p>
                            <p>Responsivo para todas as plataformas.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/icons/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/icons/Icon-html5.svg" /> CSS</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/Culturama/#" target="_blank"><img src="./public/assets/images/icons/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/Culturama" target="_blank"><img class="icon-github" src="./public/assets/images/icons/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="swiper-slide swiper-slide-projetos">
                    <div class="swiper-player">
                        <video class="projeto__video" loop="loop" muted="muted" autoplay>
                            <source src="../public/assets/videos/video-monibank.mp4" type="video/mp4">
                            <img src="./public/assets/images/monibank.jpg" alt="Miniatura do vídeo do Projeto Monibank" />
                        </video>
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>MoniBank</h1>
                            <p>Estamos comprometidos em simplificar sua vida financeira. Com soluções inovadoras e atendimento personalizado, oferecemos uma experiência bancária moderna e eficiente. Controle suas finanças com facilidade, aproveite taxas competitivas e descubra um mundo de possibilidades com nossos serviços digitais. O MoniBank é mais do que um banco; é o seu parceiro de confiança para prosperar financeiramente.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/icons/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/icons/Icon-html5.svg" /> CSS</span>
                                <span><img src="./public/assets/images/icons/Icon-js.svg" /> JavaScript</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/Monibank/index.html" target="_blank"><img src="./public/assets/images/icons/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/Monibank" target="_blank"><img class="icon-github" src="./public/assets/images/icons/Icon-square-github.svg" /> Repositório</a>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="swiper-slide swiper-slide-projetos">
                    <div class="swiper-player">
                        <video class="projeto__video" loop="loop" muted="muted" autoplay>
                            <source src="../public/assets/videos/video-finans.mp4" type="video/mp4">
                            <img src="./public/assets/images/finans.jpg" alt="Miniatura do vídeo Projeto Banco Finans" />
                        </video>
                    </div>
                    <aside>
                        <div class="aside-content">
                            <h1>Banco Finans</h1>
                            <p>Entendemos que cada jornada financeira é única. Oferecemos soluções personalizadas, desde contas acessíveis até investimentos estratégicos. Com atendimento dedicado e tecnologia inovadora, estamos comprometidos em impulsionar seu sucesso financeiro. Descubra um banco que vai além das transações, moldando um futuro sólido para você e sua família. Seja parte da comunidade BancoFinans, onde cada cliente é uma história de sucesso! </p>
                            <p>Responsivo para todas as plataformas.</p>
                        </div>
                        <div class="aside-link">
                            <div>
                                <span><img src="./public/assets/images/icons/Icon-css3-alt.svg" /> HTML</span>
                                <span><img src="./public/assets/images/icons/Icon-html5.svg" /> CSS</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://wagprojects.github.io/ProjetoFinans/" target="_blank"><img src="./public/assets/images/icons/Icon-globe-solid.svg" /> Link</a>
                                </span>
                                <span>
                                    <a href="https://github.com/WagProjects/ProjetoFinans" target="_blank"><img class="icon-github" src="./public/assets/images/icons/Icon-square-github.svg" /> Repositório</a>
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
            <div class="swiper-scrollbar swiper-scrollbar-projetos"></div>
        </div>
    `;
    sectionProjetos.appendChild(cardProjetos);
    return sectionProjetos;
}
