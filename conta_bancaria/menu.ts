import ler = require("readline-sync");
//import { colors } from "./src/util/colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let opcao: number;

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

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
