package com.atech;

import java.util.Scanner;

public class Exercício02String {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String frase = "";
        boolean confirmacao = false;
        char parenteseAberto = '(', parenteseFechado = ')';
        int contador = 0, novamente;

        do {

            contador = 0;

        System.out.println("\nDigite a sua frase: ");
        frase = sc.nextLine();
        for (int i = 0; i < frase.length(); i++){
            if (frase.charAt(i) == parenteseAberto) {
                contador++;
            } else if (frase.charAt(i) == parenteseFechado ) {
                contador--;
            }

        } if (contador == 0) {
            System.out.println(1);
        } else {
            System.out.println(0);
        }

            do {
                novamente = 0;
                System.out.println("\nDeseja escrever novamente?\n1 - Sim\n0 - Não");

                try {
                    novamente = Integer.parseInt(sc.nextLine());
                    if (novamente == 0) {
                        System.out.println("\nObrigado por jogar!");
                        System.exit(0);
                    }
                    if (novamente != 1 && novamente != 0) {
                        System.out.println("\nPor favor, digite uma opção válida!\n");
                    }

                } catch (NumberFormatException e) {
                    System.out.println("\nOpção inválida, por favor, digite novamente!\n");
                }
            } while (novamente != 1);
            confirmacao = false;
        } while (confirmacao == false);

    }

}
