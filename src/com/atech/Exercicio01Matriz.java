package com.atech;

public class Exercicio01Matriz {

    public static void main(String[] args) {

        int[][] num1 =
                {{1, 1, 1, 1, 1},
                {1, 1, 1, 1, 1},
                {1, 0, 0},
                {0, 0, 0}};

        int altura = 1;
        int comprimento = 1;

        for (int i = 0; i < num1.length; i++) {
            for (int j = 0; j < num1[i].length; j++) {
                if (num1[i][j] == 1) {
                    if (num1[i][j] == 1 && i == 0 && j < num1[i].length - 1) {
                        if (num1[i][j] == 1 && num1[i][j + 1] == 1) {
                            comprimento+=1;
                        }

                        if (num1[i + 1][j] == 1 && num1[i][j + 1] == 1 ) {
                            System.out.println(num1[i][j + 1]);
                            altura++;
                        }
                    }
                }
            }

        }
        if (comprimento == 1){
            comprimento = 0;
        }
        System.out.println("\n" + comprimento);
        System.out.println("\n" + altura);
    }
}


