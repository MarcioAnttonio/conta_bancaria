import ler = require("readline-sync");
//import { colors } from "./src/util/colors";
import { Conta } from "./src/model/Conta";

export function main() {
  let opcao: number;

  const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
  conta.visualizar();
  conta.sacar(30000);
  conta.visualizar();
  conta.depositar(5000);
  conta.visualizar();

  while (true) {;
    console.log("\n");
    console.log("       BANCO GENERATION");
    console.log("       1 - Criar Conta                          ");
    console.log("       2 - Listar todas as Contas               ");
    console.log("       3 - Buscar Conta por Numero              ");
    console.log("       4 - Atualizar Dados da Conta             ");
    console.log("       5 - Apagar Conta                         ");
    console.log("       6 - Sacar                                ");
    console.log("       7 - Depositar                            ");
    console.log("       8 - Transferir valores entre Contas      ");
    console.log("       9 - Sair                                 ");
    console.log("\n");

    console.log("Digite a opção:");
    opcao = ler.questionInt("");

    if (opcao == 9) {
      console.log("\nGeneration Bank - O seu Futuro começa aqui!");
      sobre();
      process.exit(0);
    }
      switch (opcao) {
        case 1:
          console.log("\n\nCriar Conta\n\n");

          break;
        case 2:
          console.log("\n\nListar todas as Contas\n\n");

          break;
        case 3:
          console.log("\n\nBuscar Conta por Numero\n\n");

          break;
        case 4:
          console.log("\n\nAtualizar Dados da Conta\n\n");

          break;
        case 5:
          console.log("\n\nApagar uma Conta\n\n");

          break;
        case 6:
          console.log("\n\nSacar\n\n");

          break;
        case 7:
          console.log("\n\nDepositar\n\n");

          break;
        case 8:
          console.log("\n\nTransferir valores entre Contas\n\n");

          break;
        default:
          console.log("\n\nOpção inválida! Tente novamente.\n\n");
          break;
      }
    }
  }

export function sobre(): void {
  console.log("Banco Generation - O seu Futuro começa aqui!");
  console.log("Projeto desenvolvido por: Antonio Marcio Barbeiro");
  console.log("https://github.com/MarcioAnttonio/Generationn");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    ler.prompt();
}
main();
