
//Dados json
let porte = { "pequeno": 70,
         // de 10 a 25 kg (37,5 kg por mes)
           "medio": 300,
           // de 25 a 40 kg ( 54 a 60 kg por mes)
          "grande": 450}
 
 // valores de acordo com a aplicação ou não da vacina
  let vacina =     
      { "vacinado": 0,
          // polivalente 100, raiva 80, gripe 110, gardia 120.
            "naoVacinado": 410} 

  //criar um objeto chamado entrada para as duas listas select Porte e vacina. Meu javascript vai procurar no  html pelo elemento com a tag input.
  let entradaPorte = document.querySelector( "select.porte") 
  let entradaVacina = document.querySelector( "select.vacina")   

//busca o elemento <output> e coloca o valor declarado no porte e vacina
 let saidavalorMinimo = document.querySelector( "output[data-texto = 'valorMinimo'"); 
 let saidaconsumoRacao = document.querySelector( "output.consumoRacao")

 //detectar mudanças no select - entrada porte é uma entrada no querySelector, dentro do objeto entrada.porte coloca a função de add evento
 
 function checar() {
  let resultado = porte[
  entradaPorte.value] + vacina[entradaVacina.value]   

  //calcular os valores e texto que precisam aparecer nos outputs 
  saidavalorMinimo.textContent = "R$" + resultado + " em um mês."
    }
      
    let saidaPorte = document.querySelector( "output[data-texto = 'porte'")
    
     // saida do elemento data "porte" 
       
  
  // mandando ouvir evento!!  
 entradaPorte.addEventListener(
   "change", checar )    
  entradaVacina.addEventListener(
    "change", checar)  








 
// declarar o bloco explicacao
// aparecer o bloco de respost e explicação quando a pessoa clica em enter
// fazer aparecer uma resposta para .vacinado e outra p/ ..naoVacinado 

//colocar popup na resposta para aparecer uma notinha complementar 
function alterarPopup() { 
  //pega o elemento da classe popup1 e cria uma classe ativa
    document.getElementById("popup-1").classList.toggle("ativa");
  }
 


 



