
//Dados json
let porte = { "pequeno":  70,
         // de 10 a 25 kg (37,5 kg por mes)
           "medio": 300,
           // de 25 a 40 kg ( 54 a 60 kg por mes)
          "grande": 450}
 
          // valores de acordo com a aplicação ou não da vacina
  let vacina =     
      { "vacinado": 0,
          // polivalente 100, raiva 80, gripe 110, gardia 120.
            "naoVacinado": 410} 
  
  let textos = { 
    "pequeno": 'pequeno',
    "medio": 'médio',
    "grande": 'grande'}

   function aparecerTexto(){
     let texto =textos[entradaPorte.value]
     //saida "porte" da explicação
      let saidaPorte = document.querySelector( "output[data-texto = 'porte']")  
      saidaPorte.textContent=texto
      document.querySelector("output[data-texto ='consumoRacao']")
      .textContent = "R$" + porte[
        entradaPorte.value]
         }
   

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
   stateHandle()
   aparecerTexto()
   if (entradaVacina.value=="vacinado") { 
     document.querySelector(".vacinado") 
     .classList.remove("nVisivel")
     document.querySelector(".naoVacinado") 
     .classList.add("nVisivel")
   }
   else {
   document.querySelector(".naoVacinado") 
   .classList.remove("nVisivel")
   document.querySelector(".vacinado") 
   .classList.add("nVisivel") }

    } 

                 
    // mandando ouvir evento  
 entradaPorte.addEventListener(
   "change", checar )    
  entradaVacina.addEventListener(
    "change", checar)  

    //colocar popup na resposta para aparecer uma notinha complementar 
    function alterarPopup() { 
     //pega o elemento da classe popup1 e cria uma classe ativa
    document.getElementById("popup-1").classList.toggle("ativa");
      }

 

// fazer aparecer uma resposta para .vacinado e outra p/ ..naoVacinado 

//habilitar e desabilitar botao 

   let habilitar = document.querySelector(".habilitar")    
   //escuta o evento de preencher (acho que se checar que é um número talvez de certo)
    
    function stateHandle() {
      console.log(entradaPorte.value)
        if (entradaPorte.value =="") {
     habilitar.disabled = true; 
   } else {
     habilitar.disabled = false;
   }
 }

 


 



