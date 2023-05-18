
function clicou(){
let bebida = parseInt(document.getElementById('bebida').value);
let naobebem = parseInt(document.getElementById('nao_bebem').value);
let crianca = Number (document.getElementById('criancas').value);

let textoCarne = document.getElementById('Carne');
let textoAcompanhamentos = document.getElementById('Acompanhamento');
let textoCerveja = document.getElementById('Cerveja');
let textoRefrigerante = document.getElementById('Refrigerante');
let textoAgua = document.getElementById('Agua');

let carne = 0.4
let acompanhamento = 0.2 
let cerveja = 2
let refrigerante = 0.5
let agua = 0.4

let totaldecarne = (bebida + naobebem + crianca) * carne;
let totaldeacompanhamentos = (bebida + naobebem + crianca) * acompanhamento;
let totaldecerveja = (bebida) * cerveja;
let totalderefrigerante = (bebida + naobebem + crianca) * refrigerante;
let totaldeagua = (bebida + naobebem + crianca) * agua;

textoCarne.innerHTML = `Total de carne: ${totaldecarne.toFixed(2)}KG`
textoAcompanhamentos.innerHTML = `Total de Acompanhamentos: ${totaldeacompanhamentos.toFixed(2)}KG`
textoCerveja.innerHTML = `Total de Cerveja: ${totaldecerveja.toFixed(2)}L`
textoRefrigerante.innerHTML = `Total de refrigerante: ${totalderefrigerante.toFixed(2)}L`
textoAgua.innerHTML = `Total de Água: ${totaldeagua.toFixed(2)}L`

}