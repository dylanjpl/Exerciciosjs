const botao = document.getElementbyld("botao");
const texto = document.getElementbyld('texto');

botao.addEventListrner("click", function() {
    texto.textcontext = "OBa!Voce clicou no botao";

    texto.style.color = "red";
    texto.style.fontSize ="24px";
    texto.style.fontWright ="bold";

    
});