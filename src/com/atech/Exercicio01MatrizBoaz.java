package com.atech;

public class Exercicio01MatrizBoaz {

    public static void main(String[] args) {
        int area = 0;
        int[][] a = {{1, 0, 1, 0, 0},
                    {1, 0, 1, 1, 1},
                    {1, 1, 1, 1, 1},
                    {1, 0, 0, 1, 0}};

        for (int i1 = 0; i1 < a.length; i1++) {
            for (int j1 = 0; j1 < a[i1].length; j1++) {
                int ponto1 = a[i1][j1];
                if (ponto1 == 0) {
                    continue;
                } else {
                    System.out.println("PONTO1 Position: " + i1 + "," + j1 + " | VALUE: " + ponto1);
                    for (int i2 = 0; i2 < a.length; i2++) {
                        for (int j2 = 0; j2 < a[i2].length; j2++) {
                            int ponto2 = a[i2][j2];
                            if (ponto2 == 0) {
                                continue;
                            } else {
                                System.out.println(" PONTO2 Position: " + i2 + "," + j2 + " | VALUE: " + ponto2);
                                if ((i1 - i2) == (j1 - j2)) {
                                    break;
                                } else {
                                    if (area < ((i1 - i2) * (j1 - j2))) {
                                        area = ((i1 - i2) * (j1 - j2));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        System.out.println("A maior area é " + area);
    }
}
