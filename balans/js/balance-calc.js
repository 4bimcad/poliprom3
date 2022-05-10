function writeMetal(){

				// Writing in table Names os the metals
				var metal1 = $('#metal1').val();
				var metal2 = $('#metal2').val();
				$('#concMetal1, #concMetal1-1, #concMetal1-2, #concMetal1-3, #concMetal1-4').html(metal1);
				$('#concMetal2, #concMetal2-1, #concMetal2-2, #concMetal2-3, #concMetal2-4').html(metal2);
				// Writing in table Names os the metals//

				//Takes values (LEYES) from Table Reporte 
				var	F = $("#F").val();
				var a = $("#a").val();
				var a1 = $("#a1").val();
				var a2 = $("#a2").val();
				var a3 = $("#a3").val();
				var b = $("#b").val();
				var b1 = $("#b1").val();
				var b2 = $("#b2").val();
				var b3 = $("#b3").val();
				//Writing numbers (LEYES) in Table Balance
				
				$("#ley_a").html(a);
				$("#ley_a1").html(a1);
				$("#ley_a2").html(a2);
				$("#ley_a3").html(a3);
				$("#ley_b").html(b);
				$("#ley_b1").html(b1);
				$("#ley_b2").html(b2);
				$("#ley_b3").html(b3);

				// 1. Determinent A (Delta A), by law of the triangle
        var detA = (1*a2*b3)+(a1*b2*1)+(1*a3*b1) - (b1*a2*1)-(1*b3*a1)-(1*b2*a3);

        //2. Transpose the matrix
        //  1  1  1         1  a1  b1
        // a1 a2 a3    in   1  a2  b2
        // b1 b2 b3         1  a3  b3

        // 3. Algebraic Supplements  (first row "-" then col.)
        //  a b  = a*d - b*c  //For example = (-1 in square 1+1,1+2) * a*d - b*c
        //	c d
        var algs_det11 = Math.pow(-1, 2) * (a2*b3 - b2*a3);

				var algs_det12 = Math.pow(-1, 3) * (1*b3 - b2*1);

        var algs_det13 = Math.pow(-1, 4) * (1*a3 - a2*1);

        var algs_det21 = Math.pow(-1, 3) * (a1*b3 - b1*a3);
 
        var algs_det22 = Math.pow(-1, 4) * (1*b3 - b1*1);

        var algs_det23 = Math.pow(-1, 5) * (1*a3 - a1*1);

        var algs_det31 = Math.pow(-1, 4) * (a1*b2 - b1*a2);

        var algs_det32 = Math.pow(-1, 5) * (1*b2 - b1*1);

        var algs_det33 = Math.pow(-1, 6) * (1*a2 - a1*1);

        //4. We seek the matrix X by the formula: X = A-1 • B

        var f1 = (1/detA) * ((algs_det11*1) + (algs_det12*a) + (algs_det13*b));

        var f2 = (1/detA) * ((algs_det21*1) + (algs_det22*a) + (algs_det23*b));

        var f3 = (1/detA) * ((algs_det31*1) + (algs_det32*a) + (algs_det33*b));


        //Writing in table
        //Weight in percentes %

        var peso_porc_A = f1 * 100;
        peso_porc_A = peso_porc_A.toFixed(2);
        $("#peso_porc_A").html(peso_porc_A);

        var peso_porc_B = f2 * 100;
        peso_porc_B = peso_porc_B.toFixed(2);
        $("#peso_porc_B").html(peso_porc_B);

        var peso_porc_T = f3 * 100;
        peso_porc_T = peso_porc_T.toFixed(2);
        $("#peso_porc_T").html(peso_porc_T);

				var peso_porc_F = (peso_porc_A*1) + (peso_porc_B*1) + (peso_porc_T*1);
				peso_porc_F = peso_porc_F.toFixed(2);
        $("#peso_porc_F").html(peso_porc_F);


				//Weight in tons 
				var A = f1 * F;
				A = A.toFixed(3);
				$("#A").html(A);

				var B = f2 * F;
				B = B.toFixed(3);
				$("#B").html(B);

				var T = f3 * F;
				T = T.toFixed(3);
				$("#T").html(T);

				var Fpeso = (A*1) + (B*1) + (T*1);
				Fpeso = Fpeso.toFixed(1);
				$("#Fpeso").html(Fpeso);

				//Tons of Metals in TM
				var peso_a = (F*a)/100;
				peso_a = peso_a.toFixed(2);
				$("#peso_a").html(peso_a);

				var peso_b = (F*b)/100;
				peso_b = peso_b.toFixed(2);
				$("#peso_b").html(peso_b);

				var peso_a1 = (A*a1)/100;
				peso_a1 = peso_a1.toFixed(3);
				$("#peso_a1").html(peso_a1);

				var peso_b1 = (A*b1)/100;
				peso_b1 = peso_b1.toFixed(3);
				$("#peso_b1").html(peso_b1);

				var peso_a2 = (B*a2)/100;
				peso_a2 = peso_a2.toFixed(3);
				$("#peso_a2").html(peso_a2);

				var peso_b2 = (B*b2)/100;
				peso_b2 = peso_b2.toFixed(3);
				$("#peso_b2").html(peso_b2);

				var peso_a3 = (T*a3)/100;
				peso_a3 = peso_a3.toFixed(3);
				$("#peso_a3").html(peso_a3);

				var peso_b3 = (T*b3)/100;
				peso_b3 = peso_b3.toFixed(3);
				$("#peso_b3").html(peso_b3);

				// Recovery of valuable metal %
				var distr_a1 = ((a1*A)/(a*Fpeso))*100;
				distr_a1 = distr_a1.toFixed(2);
				$("#distr_a1").html(distr_a1);

				var distr_b1 = ((b1*A)/(b*F))*100;
				distr_b1 = distr_b1.toFixed(2);
				$("#distr_b1").html(distr_b1);

				var distr_a2 = ((a2*B)/(a*F))*100;
				distr_a2 = distr_a2.toFixed(2);
				$("#distr_a2").html(distr_a2);

				var distr_b2 = ((b2*B)/(b*F))*100;
				distr_b2 = distr_b2.toFixed(2);
				$("#distr_b2").html(distr_b2);

				var distr_a3 = ((a3*T)/(a*F))*100;
				distr_a3 = distr_a3.toFixed(2);
				$("#distr_a3").html(distr_a3);

				var distr_b3 = ((b3*T)/(b*F))*100;
				distr_b3 = distr_b3.toFixed(2);
				$("#distr_b3").html(distr_b3);

				var distr_aF = (distr_a1*1) + (distr_a2*1) + (distr_a3*1);
				distr_aF = distr_aF.toFixed(2);
        $("#distr_aF").html(distr_aF);

        var distr_bF = (distr_b1*1) + (distr_b2*1) + (distr_b3*1);
				distr_bF = distr_bF.toFixed(2);
        $("#distr_bF").html(distr_bF);
        // Ratio

        var KA = F/A;
        KA = KA.toFixed(2);
        $("#KA").html(KA);

        var KB = F/B;
        KB = KB.toFixed(2);
        $("#KB").html(KB);

}






