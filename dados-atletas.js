class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
  
    // Calcula a categoria do atleta baseado na idade
    calculaCategoria() {
      if (this.idade >= 9 && this.idade <= 11) {
        return "Infantil";
      } else if (this.idade >= 12 && this.idade <= 13) {
        return "Juvenil";
      } else if (this.idade >= 14 && this.idade <= 15) {
        return "Intermediário";
      } else if (this.idade >= 16 && this.idade <= 30) {
        return "Adulto";
      } else {
        return "Sem categoria";
      }
    }
  
    // Calcula o IMC do atleta
    calculaIMC() {
      return this.peso / (this.altura * this.altura);
    }
  
    // Calcula a média válida das notas, descartando a maior e a menor
    calculaMediaValida() {
      const notasOrdenadas = [...this.notas].sort((a, b) => a - b); // Ordena as notas
      const notasValidas = notasOrdenadas.slice(1, -1); // Remove a maior e a menor nota
      const soma = notasValidas.reduce((acc, nota) => acc + nota, 0); // Soma as notas válidas
      return soma / notasValidas.length; // Retorna a média
    }
  
    // Métodos para obter os dados do atleta
    obtemNomeAtleta() {
      return this.nome;
    }
  
    obtemIdadeAtleta() {
      return this.idade;
    }
  
    obtemPesoAtleta() {
      return this.peso;
    }
  
    obtemNotasAtleta() {
      return this.notas;
    }
  
    obtemCategoria() {
      return this.calculaCategoria();
    }
  
    obtemIMC() {
      return this.calculaIMC();
    }
  
    obtemMediaValida() {
      return this.calculaMediaValida();
    }
  }
  
  // Exemplo de uso
  const atleta = new Atleta(
    "Cesar Abascal",
    30,
    80,
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
  );
  
  console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
  console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
  console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
  console.log(`Altura: ${atleta.altura}`);
  console.log(`Notas: ${atleta.obtemNotasAtleta().join(", ")}`);
  console.log(`Categoria: ${atleta.obtemCategoria()}`);
  console.log(`IMC: ${atleta.obtemIMC().toFixed(2)}`);
  console.log(`Média válida: ${atleta.obtemMediaValida().toFixed(2)}`);