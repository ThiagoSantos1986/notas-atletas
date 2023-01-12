// Definição da classe Funcionario
class NotasAtletas{

  constructor(atletas){
      this.atletas = atletas;
  }
      notasValidas(){
          let notasMedias = [];
          let soma = 0;
          
          let notasValidas = this.atletas.map(function(nota){
              //console.log(nota.notas.length)
              return nota.notas.slice(1,4);
          })
           for (let i= 0; i < notasValidas.length ; i++){
              for (let x = 0 ; x < notasValidas[i].length ; x++){
                      soma += notasValidas[i][x];                     
                } 
                 
              notasMedias.push(soma / notasValidas[0].length);                              
              soma =0;
           }   
          for(let l = 0; l < this.atletas.length ; l++){ 
           this.atletas[l].media = notasMedias[l];                   
          }
      return this.atletas
      }  
     
      dadosAtletas(){
         
         this.notasValidas().forEach(function(dado){
              console.log("Atleta: "+ dado.nome)
              console.log("Notas Obtidas: " + dado.notas)
              console.log("Média Valida: " + dado.media)
              console.log()

          });
          return "Notas obtidas com sucesso!"
      }
 
}
  let atletas = [
{
 nome: "Cesar Abascal",
 notas: [10, 9.34, 8.42, 10, 7.88]
},
{
 nome: "Fernando Puntel",
 notas:  [8, 10, 10, 7, 9.33]
},
{
 nome: "Daiane Jelinsky",
 notas: [7, 10, 9.5, 9.5, 8]
},
{
 nome: "Bruno Castro",
 notas: [10, 10, 10, 9, 9.5]
}
];

let  notasAtletas = new NotasAtletas(atletas);
  console.log(notasAtletas.dadosAtletas());
 

