package com.atech;

public class Exercicio01Matriz {

    public static void main(String[] args) {

        int[][] num1 = {{1, 0, 1, 0, 0},
                        {1, 0, 1, 1, 1},
                        {1, 1, 1, 1, 1},
                        {1, 0, 0, 1, 0}};

        int comprimentoLinhaZero = 1;
        int comprimentoLinhaUm = 1;
        int comprimentoLinhaDois = 1;
        int comprimentoLinhaTres = 1;
        int area = 0;

        for (int i = 0; i < num1.length; i++) {
            for (int j = 0; j < num1[i].length; j++) {
                if (num1[i][j] == 1) {
                    if (num1[i][j] == 1 && i == i && i < num1.length - 1 && j < num1[i].length - 1) {
                        if (num1[i+1][j] == 1 && num1[i][j + 1] == 1 && i == 0) {
                            comprimentoLinhaZero += 1;
                        }
                    }
                    if (num1[i][j] == 1 && i == i && i < num1.length - 1 && j < num1[i].length - 1 && i > 0) {
                        if (num1[i - 1][j] == 1 && num1[i + 1][j] == 1 && num1[i][j + 1] == 1 && i == 1) {
                            comprimentoLinhaUm++;
                        }
                        if (num1[i - 1][j] == 1 && num1[i+1][j] == 1 && num1[i][j + 1] == 1 && i == 2) {
                            comprimentoLinhaDois+=1;
                        }
                    }
                    if (j < num1[i].length - 1 && i > 0) {
                        if (num1[i-1][j] == 1 && num1[i][j + 1] == 1 && i == 3) {
                            comprimentoLinhaTres += 1;
                        }
                    }
                }
            }

        }
        if (comprimentoLinhaZero < 2){
            comprimentoLinhaZero = 0;
        }
        if (comprimentoLinhaUm < 2){
            comprimentoLinhaUm = 0;
        }
        if (comprimentoLinhaDois < 2){
            comprimentoLinhaDois = 0;
        }
        if (comprimentoLinhaTres < 2){
            comprimentoLinhaTres = 0;
        }
        if (comprimentoLinhaZero != 0 || comprimentoLinhaUm != 0 && comprimentoLinhaDois != 0 || comprimentoLinhaTres != 0) {
            area = (comprimentoLinhaUm * comprimentoLinhaDois);
        }
        System.out.println("O valor da maior área do retângulo é: " + area);
    }
}


