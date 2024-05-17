export function criarElementoContato() {
    const sectionContato = document.createElement('section');
    sectionContato.classList.add('container__contato', 'container');
    const cardContato = document.createElement('div');
    cardContato.classList.add('card__contato');
    sectionContato.innerHTML = `
        <h1 class="titulo__secao">Contato</h1>
    `;
    cardContato.innerHTML = `
        <div class="div__titulo-contato">
            <h1 class="titulo__contato">Entre em contato!</h1>
            <p>Envie um feedback, anônimo ou não, sobre este portfólio ou sobre qualquer assunto.</p>
        </div>
        <form action="https://formspree.io/f/xleqnedy" method="POST" accept-charset="utf-8">
            <label class="form-group" for="name">
                <span>
                    Nome
                </span>
                <input type="text" id="name" name="nome" placeholder="Nome" required>
            </label>
            <label class="form-group" for="email">
                <span>
                    E-mail (opcional)
                </span>
                <input type="email" id="email" name="email" placeholder="e-mail@dominio.etc">
            </label>

            <label class="form-group" for="assunto">
                <span>
                    Assunto
                </span>
                <div>
                    <select id="tag" name="tag" required>
                        <option value="" disabled selected hidden class="option-desabled">Propósito</option>
                        <option value="Contato">Contato</option>
                        <option value="Feedback">Feedback</option>
                    </select>
                    <input type="text" id="assunto" name="assunto" placeholder="Assunto da mensagem" required>
                </div>
            </label>

            <label class="form-group" for="conteudo">
                <span id="mensagem">
                    Mensagem
                </span>
                <textarea id="conteudo" name="conteudo" rows="5" placeholder="Mensagem..." required></textarea>      
            </label>

            <div class="buttons-container">
                <button type="reset" id="limpar">Limpar</button>
                <button type="button" id="enviar" class="confirmar">Enviar</button>
            </div>

            <div class="confirmacao" style="display: none;">
                <p>Você deseja enviar o e-mail?</p>
                <span>
                    <button type="submit" id="confirmar" >Confirmar</button>
                    <button type="button" id="revisar" class="confirmar">Revisar</button>
                <span>
            </div>
        </form>
        <section class="section__contato">
            <div>
                <aside>
                    <img src="./public/assets/images/icons/Icon-email.svg" alt="Icone de Email" />
                </aside>
                <span>
                    <h1>E-mail</h1>
                    <a href="mailto:contato-wagneros@outlook.com" target="_blank">contato-wagneros@outlook.com</a>
                </span>
            </div>
        </section>
        <section class="section__contato">
            <div>
                <aside>
                    <img src="./public/assets/images/icons/Icon-phone-solid.svg" alt="Icone de Email" />
                </aside>
                <span>
                    <h1>Telefone</h1>
                    <a href="https://wa.me/5521992316655" target="_blank">+55 21 992316655</a>
                </span>
            </div>
        </section>
        <section class="section__contato">
            <div>
                <aside>
                    <img src="./public/assets/images/icons/Icon-globe-solid.svg" alt="Icone de Telefone" />
                </aside>
                <span>
                    <h1>Redes</h1>
                    <ul>
                        <li><a href="https://github.com/WagProjects" target="_blank"><img src="./public/assets/images/icons/Icon-github.svg" alt="Icone do github"/></a></li>
                        <li><a href="https://www.linkedin.com/in/wagner-oliveira-b3959a170/" target="_blank"><img src="./public/assets/images/icons/Icon-linkedin-in.svg" alt="Icone do linkedin"/></a></li>
                        <li><a href="javascript:void(0)"><img src="./public/assets/images/icons/Icon-dev.svg" alt="Icone do devpool"/></a></li>
                        <li><a href="javascript:void(0)"><img src="./public/assets/images/icons/Icon-instagram.svg" alt="Icone do instagram"/></a></li>
                        <li><a href="javascript:void(0)"><img src="./public/assets/images/icons/Icon-facebook-f.svg" alt="Icone do facebook"/></a></li>
                        <li><a href="javascript:void(0)"><img src="./public/assets/images/icons/Icon-twitter.svg" alt="Icone do twitter"/></a></li>
                    </ul>
                </span>
            </div>
        </section>
    `;
    document.addEventListener('DOMContentLoaded', function () {
        const botaoEnviar = document.querySelector("button.confirmar");
        const botaoRevisar = document.querySelector(".confirmacao button.confirmar");
        const elementoConfirma = document.querySelector(".confirmacao");
        const elementoBotoes = document.querySelector(".buttons-container");
        // Verificar se os seletores encontraram os elementos corretamente
        if (!botaoEnviar || !botaoRevisar || !elementoConfirma) {
            console.error("Elemento de confirmação não encontrado.");
            return;
        }
        function alteraDisplay() {
            // Verificar o estado atual do display e alternar
            elementoConfirma.style.display =
                (elementoConfirma.style.display === "none" || elementoConfirma.style.display === "") ? "flex" : "none";
        }
        botaoEnviar.addEventListener("click", function () {
            elementoBotoes.style.display = "none";
            alteraDisplay();
        });
        botaoRevisar.addEventListener("click", function () {
            elementoBotoes.style.display = "flex";
            alteraDisplay();
        });
    });
    sectionContato.appendChild(cardContato);
    return sectionContato;
}
