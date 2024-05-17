import { criarElementoMenu } from "./src/sections/menu/menu.js";
import { criarElementoMenuLateral } from "./src/sections/menu/menuLateral.js";
import { criarContainerGeral } from "./src/main/main.js";
import { criarElementoPoster } from "./src/sections/poster/poster.js";
import { criarElementoSobre } from "./src/sections/sobre/sobre.js";
import { criarElementoProjetos } from "./src/sections/projetos/projetos.js";
import { criarElementoEducacao } from "./src/sections/educacao/educacao.js";
import { criarElementoContato } from "./src/sections/contato/contato.js";
import { criarElementoRodaPe } from "./src/sections/rodape/footer.js";
function inserirElementoBody(elemento) {
    const menu = document.querySelector("body");
    menu.appendChild(elemento);
}
function inserirElementoNoContainerGeral(elemento) {
    const container = document.querySelector(".container__geral");
    container.appendChild(elemento);
}
inserirElementoBody(criarElementoMenu());
inserirElementoBody(criarElementoMenuLateral());
inserirElementoBody(criarContainerGeral());
inserirElementoNoContainerGeral(criarElementoPoster());
inserirElementoNoContainerGeral(criarElementoSobre());
inserirElementoNoContainerGeral(criarElementoProjetos());
inserirElementoNoContainerGeral(criarElementoEducacao());
inserirElementoNoContainerGeral(criarElementoContato());
inserirElementoNoContainerGeral(criarElementoRodaPe());
