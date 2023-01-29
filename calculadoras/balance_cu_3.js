//ES
// PROPIEDAD INTELECTUAL DE POLIPROM SAC
// COPIAR O USAR PARTE DE CODICO SIN PERMISO DE ADMINISTRACION DE POLIPROM SAC PROHIBIDO!!!!
// TODOS DERECHOS RESERVADOS

//EN
// INTELLECTUAL PROPERTY OF POLIPROM SAC
// COPY OR USE PART OF CODE WITHOUT PERMISSION OF ADMINISTRATION OF POLIPROM SAC PROHIBITED !!!!
// ALL RIGHTS RESERVED


//откл правую кнопку

  document.oncontextmenu = cmenu; 
  function cmenu() { return false; }


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//

  if (window.location.href == "http://poliprom.pe/calculadoras/balance_met_cu+au+ag.html") {
  balance();
} else {
  window.alert("ERROR 404. INTERNET CONNECTION WITH ´http://poliprom.pe´ IS LOST. PLEASE, CHECK YOUR INTERNET CONNECTION.");
  window.close();
}
  
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////




//START FUNCTION BALANCE
function balance() {

//TABLE 1 calc START
		var TMH = $("#TMH").val();
    var exploracion_TMH = TMH *1;
    $('#exploracion_TMH').html(exploracion_TMH);
    var transporte_TMH = TMH *1;
    $('#transporte_TMH').html(transporte_TMH);
		var agua = (TMH * $("#agua").val())/100;
		var merma = TMH * $("#merma").val()/100;
    var agua_peso = (TMH * $("#agua").val()/100);
    $("#agua_peso").html(agua_peso.toFixed(2));
    var merma_peso = (TMH * $("#merma").val()/100);
    $("#merma_peso").html(merma_peso.toFixed(2));
    var TMS_bruto = TMH - agua_peso;
    $("#TMS_bruto").html(TMS_bruto.toFixed(2));
		var TMS = TMH - agua - merma;
		$('#TMS, #cabeza').html(TMS.toFixed(2));
//TABLE 1 calc END

//TABLE 2 calc START
  //SELECT PESO VALUE 
  //Au_select
    var Au_select = $( "#Au_select option:selected" ).text();
    $("#Au_select_cont_met").html(Au_select);
  //Ag_select
    var Ag_select = $( "#Ag_select option:selected" ).text();
    $("#Ag_select_cont_met").html(Ag_select);      
	//TABLE 2 - PESOS
		var cabeza = $("#cabeza").html();
		var peso_Cu = cabeza * ( ( $("#Cu_1").val() - $("#Cu_3").val() ) / ( $("#Cu_2").val() - $("#Cu_3").val() ) );
    peso_Cu = peso_Cu || 0 //Nan to 0
		$("#peso_Cu, #transporte_TMS_2").html(peso_Cu.toFixed(2));
		var peso_Relave = cabeza - peso_Cu;
    peso_Relave = peso_Relave || 0 //Nan to 0
		$("#peso_Relave").html(peso_Relave.toFixed(2));

	//TABLE 2 - PORCIENTOS		 
		var Cu_porc = (peso_Cu * 100 ) / cabeza;
    Cu_porc = Cu_porc || 0 //Nan to 0
		$("#Cu_porc, #Cu_porc_penal_lote").html(Cu_porc.toFixed(2) + "%");
		var Relave_porc = (peso_Relave * 100) / cabeza;
    Relave_porc = Relave_porc || 0 //Nan to 0
		$("#Relave_porc").html(Relave_porc.toFixed(2) + "%");
		var cab_porc = Cu_porc + Relave_porc;
    cab_porc = cab_porc || 0 //Nan to 0
		$("#cab_porc").html(cab_porc.toFixed(2) + "%");
	//TABLE 2 - CONTENIDO METALICO, TM
	//Cu TM
		var cont_met_Cu_1 = cabeza * $("#Cu_1").val() /100;
		$("#cont_met_Cu_1").html(cont_met_Cu_1.toFixed(4));
		var cont_met_Cu_2 = peso_Cu * $("#Cu_2").val() /100;
		$("#cont_met_Cu_2").html(cont_met_Cu_2.toFixed(4));
		var cont_met_Cu_3 = peso_Relave * $("#Cu_3").val() /100;
		$("#cont_met_Cu_3").html(cont_met_Cu_3.toFixed(4));
    var cont_met_Cu_4 = cont_met_Cu_2 + cont_met_Cu_3;
    $("#cont_met_Cu_4").html(cont_met_Cu_4.toFixed(4));
	//Au Oz
		var cont_met_Au_1 = cabeza * $("#Au_1").val();
		$("#cont_met_Au_1").html(cont_met_Au_1.toFixed(4));
		var cont_met_Au_2 = peso_Cu * $("#Au_2").val();
		$("#cont_met_Au_2").html(cont_met_Au_2.toFixed(4));
		var cont_met_Au_3 = peso_Relave * $("#Au_3").val();
		$("#cont_met_Au_3").html(cont_met_Au_3.toFixed(4));
    var cont_met_Au_4 = cont_met_Au_2 + cont_met_Au_3;
    $("#cont_met_Au_4").html(cont_met_Au_4.toFixed(4));
	//Ag Oz
		var cont_met_Ag_1 = cabeza * $("#Ag_1").val();
		$("#cont_met_Ag_1").html(cont_met_Ag_1.toFixed(4));
		var cont_met_Ag_2 = peso_Cu * $("#Ag_2").val();
		$("#cont_met_Ag_2").html(cont_met_Ag_2.toFixed(4));
		var cont_met_Ag_3 = peso_Relave * $("#Ag_3").val();
		$("#cont_met_Ag_3").html(cont_met_Ag_3.toFixed(4));
		var cont_met_Ag_4 = cont_met_Ag_2 + cont_met_Ag_3;
		$("#cont_met_Ag_4").html(cont_met_Ag_4.toFixed(4));		
    //Cu4 (Cabeza Calculada Cu)
    var Cu_4 = cont_met_Cu_4 / cabeza *100;
    Cu_4 = Cu_4 || 0 //Nan to 0
    $("#Cu_4").html(Cu_4.toFixed(2));
    //Au4 (Cabeza Calculada Au)
    var Au_4 = cont_met_Au_4 / cabeza;
    Au_4 = Au_4 || 0 //Nan to 0
    $("#Au_4").html(Au_4.toFixed(2));
		//Ag4 (Cabeza Calculada Ag)
		var Ag_4 = cont_met_Ag_4 / cabeza;
    Ag_4 = Ag_4 || 0 //Nan to 0
		$("#Ag_4").html(Ag_4.toFixed(2));
	//RECUPERACION en %
	//Cu %
		var rec_Cu_2 = cont_met_Cu_2 *100 / cont_met_Cu_1;
    rec_Cu_2 = rec_Cu_2 || 0 //Nan to 0
		$("#rec_Cu_2").html(rec_Cu_2.toFixed(2) + "%");
		var rec_Cu_3 = cont_met_Cu_3 *100 / cont_met_Cu_1;
    rec_Cu_3 = rec_Cu_3 || 0 //Nan to 0
		$("#rec_Cu_3").html(rec_Cu_3.toFixed(2) + "%");
		var rec_Cu_1 = rec_Cu_2 + rec_Cu_3;
    rec_Cu_1 = rec_Cu_1 || 0 //Nan to 0
		$("#rec_Cu_1").html(rec_Cu_1.toFixed(2) + "%");
	//Au %
		var rec_Au_2 = cont_met_Au_2 / cont_met_Au_4 *100;
    rec_Au_2 = rec_Au_2 || 0 //Nan to 0
		$("#rec_Au_2").html(rec_Au_2.toFixed(2) + "%");
		var rec_Au_3 = cont_met_Au_3 / cont_met_Au_4 *100;
    rec_Au_3 = rec_Au_3 || 0 //Nan to 0
		$("#rec_Au_3").html(rec_Au_3.toFixed(2) + "%");
		var rec_Au_1 = rec_Au_2 + rec_Au_3;
    rec_Au_1 = rec_Au_1 || 0 //Nan to 0
		$("#rec_Au_1").html(rec_Au_1.toFixed(2) + "%");
	//Ag %
		var rec_Ag_2 = cont_met_Ag_2  / cont_met_Ag_4 *100;
    rec_Ag_2 = rec_Ag_2 || 0 //Nan to 0
		$("#rec_Ag_2").html(rec_Ag_2.toFixed(2) + "%");
		var rec_Ag_3 = cont_met_Ag_3  / cont_met_Ag_4 *100;
    rec_Ag_3 = rec_Ag_3 || 0 //Nan to 0
		$("#rec_Ag_3").html(rec_Ag_3.toFixed(2) + "%");
		var rec_Ag_1 = rec_Ag_2 + rec_Ag_3;
    rec_Ag_1 = rec_Ag_1 || 0 //Nan to 0
		$("#rec_Ag_1").html(rec_Ag_1.toFixed(2) + "%");
	//RATIOS
	//Cu
		var ratio_Cu = cabeza / peso_Cu;
    ratio_Cu = ratio_Cu || 0 //Nan to 0
		$("#ratio_Cu").html(ratio_Cu.toFixed(2)); 
//TABLE 2 calc END		

//START TABLA DE PENALIDADES
//As
  //Reading Numbers Input for As 
  var As_paso = $("#As_paso").val();
  var As_porc_max = $("#As_porc_max").val();
  var As_precio_und = $("#As_precio_und").val();
  var As_ensayo = $("#As_ensayo").val();
  //Calculation As Unidades      
  var As_und = ( As_ensayo - As_porc_max) / As_paso;
  $("#As_und").html(As_und.toFixed(2)); 
   if (As_und <= 0) {
    $("#As_und").html(0);
  } 
  //Calculation As Precio Total  
  var As_precio_total = As_und * As_precio_und;    
  $("#As_precio_total").html(As_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (As_precio_total <= 0) {
    $("#As_precio_total").html(0);
  }
//Sb
  //Reading Numbers Input for Sb 
  var Sb_paso = $("#Sb_paso").val();
  var Sb_porc_max = $("#Sb_porc_max").val();
  var Sb_precio_und = $("#Sb_precio_und").val();
  var Sb_ensayo = $("#Sb_ensayo").val();
  //Calculation Sb Unidades      
  var Sb_und = (Sb_ensayo - Sb_porc_max) / Sb_paso;
  $("#Sb_und").html(Sb_und.toFixed(2));  
   if (Sb_und <= 0) {
    $("#Sb_und").html(0);
  }
  //Calculation Sb  Precio Total  
  var Sb_precio_total = Sb_und * Sb_precio_und;    
  $("#Sb_precio_total").html(Sb_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Sb_precio_total <= 0) {
    $("#Sb_precio_total").html(0);
  }
//Bi
  //Reading Numbers Input for Bi 
  var Bi_paso = $("#Bi_paso").val();
  var Bi_porc_max = $("#Bi_porc_max").val();
  var Bi_precio_und = $("#Bi_precio_und").val();
  var Bi_ensayo = $("#Bi_ensayo").val();
  //Calculation Bi Unidades      
  var Bi_und = (Bi_ensayo - Bi_porc_max) / Bi_paso;
  $("#Bi_und").html(Bi_und.toFixed(2)); 
   if (Bi_und <= 0) {
    $("#Bi_und").html(0);
  } 
  //Calculation Bi  Precio Total  
  var Bi_precio_total = Bi_und * Bi_precio_und;    
  $("#Bi_precio_total").html(Bi_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Bi_precio_total <= 0) {
    $("#Bi_precio_total").html(0);
  }
//Pb
  //Reading Numbers Input for Pb 
  var Pb_paso = $("#Pb_paso").val();
  var Pb_porc_max = $("#Pb_porc_max").val();
  var Pb_precio_und = $("#Pb_precio_und").val();
  var Pb_ensayo = $("#Pb_ensayo").val();
  //Calculation Pb Unidades      
  var Pb_und = (Pb_ensayo - Pb_porc_max) / Pb_paso;
  $("#Pb_und").html(Pb_und.toFixed(2)); 
   if (Pb_und <= 0) {
    $("#Pb_und").html(0);
  } 
  //Calculation Pb  Precio Total  
  var Pb_precio_total = Pb_und * Pb_precio_und;    
  $("#Pb_precio_total").html(Pb_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Pb_precio_total <= 0) {
    $("#Pb_precio_total").html(0);
  }
//Zn
  //Reading Numbers Input for Zn 
  var Zn_paso = $("#Zn_paso").val();
  var Zn_porc_max = $("#Zn_porc_max").val();
  var Zn_precio_und = $("#Zn_precio_und").val();
  var Zn_ensayo = $("#Zn_ensayo").val();
  //Calculation Zn Unidades      
  var Zn_und = (Zn_ensayo - Zn_porc_max) / Zn_paso;
  $("#Zn_und").html(Zn_und.toFixed(2));
   if (Zn_und <= 0) {
    $("#Zn_und").html(0);
  }  
  //Calculation Zn  Precio Total  
  var Zn_precio_total = Zn_und * Zn_precio_und;    
  $("#Zn_precio_total").html(Zn_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Zn_precio_total <= 0) {
    $("#Zn_precio_total").html(0);
  }
//Cu
  //Reading Numbers Input for Cu 
  var Cu_paso = $("#Cu_paso").val();
  var Cu_porc_max = $("#Cu_porc_max").val();
  var Cu_precio_und = $("#Cu_precio_und").val();
  var Cu_ensayo = $("#Cu_ensayo").val();
  //Calculation Cu Unidades      
  var Cu_und = (Cu_ensayo - Cu_porc_max) / Cu_paso;
  $("#Cu_und").html(Cu_und.toFixed(2));  
   if (Cu_und <= 0) {
    $("#Cu_und").html(0);
  }
  //Calculation Cu  Precio Total  
  var Cu_precio_total = Cu_und * Cu_precio_und;    
  $("#Cu_precio_total").html(Cu_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Cu_precio_total <= 0) {
    $("#Cu_precio_total").html(0);
  }
//Fe
  //Reading Numbers Input for Fe 
  var Fe_paso = $("#Fe_paso").val();
  var Fe_porc_max = $("#Fe_porc_max").val();
  var Fe_precio_und = $("#Fe_precio_und").val();
  var Fe_ensayo = $("#Fe_ensayo").val();
  //Calculation Fe Unidades      
  var Fe_und = (Fe_ensayo - Fe_porc_max) / Fe_paso;
  $("#Fe_und").html(Fe_und.toFixed(2));  
   if (Fe_und <= 0) {
    $("#Fe_und").html(0);
  }
  //Calculation Fe  Precio Total  
  var Fe_precio_total = Fe_und * Fe_precio_und;    
  $("#Fe_precio_total").html(Fe_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Fe_precio_total <= 0) {
    $("#Fe_precio_total").html(0);
  }
//S
  //Reading Numbers Input for S
  var S_paso = $("#S_paso").val();
  var S_porc_max = $("#S_porc_max").val();
  var S_precio_und = $("#S_precio_und").val();
  var S_ensayo = $("#S_ensayo").val();
  //Calculation S Unidades      
  var S_und = (S_ensayo - S_porc_max) / S_paso;
  $("#S_und").html(S_und.toFixed(2)); 
   if (S_und <= 0) {
    $("#S_und").html(0);
  } 
  //Calculation S  Precio Total  
  var S_precio_total = S_und * S_precio_und;    
  $("#S_precio_total").html(S_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (S_precio_total <= 0) {
    $("#S_precio_total").html(0);
  }
//C
  //Reading Numbers Input for C
  var C_paso = $("#C_paso").val();
  var C_porc_max = $("#C_porc_max").val();
  var C_precio_und = $("#C_precio_und").val();
  var C_ensayo = $("#C_ensayo").val();
  //Calculation C Unidades      
  var C_und = (C_ensayo - C_porc_max) / C_paso;
  $("#C_und").html(C_und.toFixed(2)); 
   if (C_und <= 0) {
    $("#C_und").html(0);
  } 
  //Calculation C  Precio Total  
  var C_precio_total = C_und * C_precio_und;    
  $("#C_precio_total").html(C_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (C_precio_total <= 0) {
    $("#C_precio_total").html(0);
  }
//Cd
  //Reading Numbers Input for Cd
  var Cd_paso = $("#Cd_paso").val();
  var Cd_porc_max = $("#Cd_porc_max").val();
  var Cd_precio_und = $("#Cd_precio_und").val();
  var Cd_ensayo = $("#Cd_ensayo").val();
  //Calculation Cd Unidades      
  var Cd_und = (Cd_ensayo - Cd_porc_max) / Cd_paso;
  $("#Cd_und").html(Cd_und.toFixed(2)); 
   if (Cd_und <= 0) {
    $("#Cd_und").html(0);
  } 
  //Calculation Cd  Precio Total  
  var Cd_precio_total = Cd_und * Cd_precio_und;    
  $("#Cd_precio_total").html(Cd_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Cd_precio_total <= 0) {
    $("#Cd_precio_total").html(0);
  }
//Mn
  //Reading Numbers Input for Mn
  var Mn_paso = $("#Mn_paso").val();
  var Mn_porc_max = $("#Mn_porc_max").val();
  var Mn_precio_und = $("#Mn_precio_und").val();
  var Mn_ensayo = $("#Mn_ensayo").val();
  //Calculation Mn Unidades      
  var Mn_und = (Mn_ensayo - Mn_porc_max) / Mn_paso;
  $("#Mn_und").html(Mn_und.toFixed(2)); 
   if (Mn_und <= 0) {
    $("#Mn_und").html(0);
  } 
  //Calculation Mn  Precio Total  
  var Mn_precio_total = Mn_und * Mn_precio_und;    
  $("#Mn_precio_total").html(Mn_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Mn_precio_total <= 0) {
    $("#Mn_precio_total").html(0);
  }

//SO4
  //Reading Numbers Input for SO4
  var SO4_paso = $("#SO4_paso").val();
  var SO4_porc_max = $("#SO4_porc_max").val();
  var SO4_precio_und = $("#SO4_precio_und").val();
  var SO4_ensayo = $("#SO4_ensayo").val();
  //Calculation SO4 Unidades      
  var SO4_und = (SO4_ensayo - SO4_porc_max) / SO4_paso;
  $("#SO4_und").html(SO4_und.toFixed(2));  
   if (SO4_und <= 0) {
    $("#SO4_und").html(0);
  }
  //Calculation SO4  Precio Total  
  var SO4_precio_total = SO4_und * SO4_precio_und;    
  $("#SO4_precio_total").html(SO4_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (SO4_precio_total <= 0) {
    $("#SO4_precio_total").html(0);
  }
//SiO2
  //Reading Numbers Input for SiO2
  var SiO2_paso = $("#SiO2_paso").val();
  var SiO2_porc_max = $("#SiO2_porc_max").val();
  var SiO2_precio_und = $("#SiO2_precio_und").val();
  var SiO2_ensayo = $("#SiO2_ensayo").val();
  //Calculation SiO2 Unidades      
  var SiO2_und = (SiO2_ensayo - SiO2_porc_max) / SiO2_paso;
  $("#SiO2_und").html(SiO2_und.toFixed(2));  
   if (SiO2_und <= 0) {
    $("#SiO2_und").html(0);
  }
  //Calculation SiO2  Precio Total  
  var SiO2_precio_total = SiO2_und * SiO2_precio_und;    
  $("#SiO2_precio_total").html(SiO2_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (SiO2_precio_total <= 0) {
    $("#SiO2_precio_total").html(0);
  }
//Cl
  //Reading Numbers Input for Cl
  var Cl_paso = $("#Cl_paso").val();
  var Cl_porc_max = $("#Cl_porc_max").val();
  var Cl_precio_und = $("#Cl_precio_und").val();
  var Cl_ensayo = $("#Cl_ensayo").val();
  //Calculation Cl Unidades      
  var Cl_und = (Cl_ensayo - Cl_porc_max) / Cl_paso;
  $("#Cl_und").html(Cl_und.toFixed(2)); 
   if (Cl_und <= 0) {
    $("#Cl_und").html(0);
  } 
  //Calculation Cl  Precio Total  
  var Cl_precio_total = Cl_und * Cl_precio_und;    
  $("#Cl_precio_total").html(Cl_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Cl_precio_total <= 0) {
    $("#Cl_precio_total").html(0);
  }
//Co
  //Reading Numbers Input for Co
  var Co_paso = $("#Co_paso").val();
  var Co_porc_max = $("#Co_porc_max").val();
  var Co_precio_und = $("#Co_precio_und").val();
  var Co_ensayo = $("#Co_ensayo").val();
  //Calculation Co Unidades      
  var Co_und = (Co_ensayo - Co_porc_max) / Co_paso;
  $("#Co_und").html(Co_und.toFixed(2));  
   if (Co_und <= 0) {
    $("#Co_und").html(0);
  }
  //Calculation Co  Precio Total  
  var Co_precio_total = Co_und * Co_precio_und;    
  $("#Co_precio_total").html(Co_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Co_precio_total <= 0) {
    $("#Co_precio_total").html(0);
  }
//F
  //Reading Numbers Input for F
  var F_paso = $("#F_paso").val();
  var F_porc_max = $("#F_porc_max").val();
  var F_precio_und = $("#F_precio_und").val();
  var F_ensayo = $("#F_ensayo").val();
  //Calculation F Unidades      
  var F_und = (F_ensayo - F_porc_max) / F_paso;
  $("#F_und").html(F_und.toFixed(2));  
   if (F_und <= 0) {
    $("#F_und").html(0);
  }
  //Calculation F  Precio Total  
  var F_precio_total = F_und * F_precio_und;    
  $("#F_precio_total").html(F_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (F_precio_total <= 0) {
    $("#F_precio_total").html(0);
  }
//Hg
  //Reading Numbers Input for Hg
  var Hg_paso = $("#Hg_paso").val();
  var Hg_porc_max = $("#Hg_porc_max").val();
  var Hg_precio_und = $("#Hg_precio_und").val();
  var Hg_ensayo = $("#Hg_ensayo").val();
  //Calculation Hg Unidades      
  var Hg_und = (Hg_ensayo - Hg_porc_max) / Hg_paso;
  $("#Hg_und").html(Hg_und.toFixed(2));  
   if (Hg_und <= 0) {
    $("#Hg_und").html(0);
  }
  //Calculation Hg  Precio Total  
  var Hg_precio_total = Hg_und * Hg_precio_und;    
  $("#Hg_precio_total").html(Hg_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Hg_precio_total <= 0) {
    $("#Hg_precio_total").html(0);
  }
//In
  //Reading Numbers Input for In
  var In_paso = $("#In_paso").val();
  var In_porc_max = $("#In_porc_max").val();
  var In_precio_und = $("#In_precio_und").val();
  var In_ensayo = $("#In_ensayo").val();
  //Calculation In Unidades      
  var In_und = (In_ensayo - In_porc_max) / In_paso;
  $("#In_und").html(In_und.toFixed(2));
   if (In_und <= 0) {
    $("#In_und").html(0);
  }  
  //Calculation In  Precio Total  
  var In_precio_total = In_und * In_precio_und;    
  $("#In_precio_total").html(In_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (In_precio_total <= 0) {
    $("#In_precio_total").html(0);
  }
//Mo
  //Reading Numbers Input for Mo
  var Mo_paso = $("#Mo_paso").val();
  var Mo_porc_max = $("#Mo_porc_max").val();
  var Mo_precio_und = $("#Mo_precio_und").val();
  var Mo_ensayo = $("#Mo_ensayo").val();
  //Calculation Mo Unidades      
  var Mo_und = (Mo_ensayo - Mo_porc_max) / Mo_paso;
  $("#Mo_und").html(Mo_und.toFixed(2));
    if (Mo_und <= 0) {
    $("#Mo_und").html(0);
  }
  //Calculation Mo  Precio Total  
  var Mo_precio_total = Mo_und * Mo_precio_und;    
  $("#Mo_precio_total").html(Mo_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Mo_precio_total <= 0) {
    $("#Mo_precio_total").html(0);
  }
//Ni
  //Reading Numbers Input for Ni
  var Ni_paso = $("#Ni_paso").val();
  var Ni_porc_max = $("#Ni_porc_max").val();
  var Ni_precio_und = $("#Ni_precio_und").val();
  var Ni_ensayo = $("#Ni_ensayo").val();
  //Calculation Ni Unidades      
  var Ni_und = (Ni_ensayo - Ni_porc_max) / Ni_paso;
  $("#Ni_und").html(Ni_und.toFixed(2));  
    if (Ni_und <= 0) {
    $("#Ni_und").html(0);
  }
  //Calculation Ni  Precio Total  
  var Ni_precio_total = Ni_und * Ni_precio_und;    
  $("#Ni_precio_total").html(Ni_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Ni_precio_total <= 0) {
    $("#Ni_precio_total").html(0);
  }
//Se
  //Reading Numbers Input for Se
  var Se_paso = $("#Se_paso").val();
  var Se_porc_max = $("#Se_porc_max").val();
  var Se_precio_und = $("#Se_precio_und").val();
  var Se_ensayo = $("#Se_ensayo").val();
  //Calculation Se Unidades      
  var Se_und = (Se_ensayo - Se_porc_max) / Se_paso;
  $("#Se_und").html(Se_und.toFixed(2));  
    if (Se_und <= 0) {
    $("#Se_und").html(0);
  }
  //Calculation Se  Precio Total  
  var Se_precio_total = Se_und * Se_precio_und;    
  $("#Se_precio_total").html(Se_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
  //Return "0" en Precio total
  if (Se_precio_total <= 0) {
    $("#Se_precio_total").html(0);
  }

//TOTAL PENALIDADES
  var total_penalidades =  As_precio_total 
                        +  Sb_precio_total
                        +  Bi_precio_total
                        +  Pb_precio_total
                        +  Zn_precio_total
                        +  Cu_precio_total
                        +  Fe_precio_total
                        +  S_precio_total
                        +  C_precio_total
                        +  Cd_precio_total
                        +  Mn_precio_total
                        +  SO4_precio_total
                        +  SiO2_precio_total
                        +  Cl_precio_total
                        +  Co_precio_total
                        +  F_precio_total
                        +  Hg_precio_total
                        +  In_precio_total
                        +  Mo_precio_total
                        +  Ni_precio_total
                        +  Se_precio_total *1;//end
  $("#total_penalidades, #penalidades_en_gastos").html(total_penalidades.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
   if (total_penalidades <= 0) {
    $("#total_penalidades").html(0);
  }
//PENALIDADES GASTOS TOTAL por Concentrado
    var  total_penalidades_gastos = total_penalidades * peso_Cu * 1;
    $("#total_penalidades_gastos").html(total_penalidades_gastos.toLocaleString("en-US", {style: "currency", currency: "USD"}));
//END of the TABLA DE PENALIDADES

//PENALIDADES POR PORCENTAJE DE COBRE EN LOTE
  //Reading Numbers Input for Se
  var pen_lote_paso = $("#pen_lote_paso").val();
  var pen_lote_porc_max = $("#pen_lote_porc_max").val();
  var pen_lote_precio_und = $("#pen_lote_precio_und").val();
  var Cu_porc_lote_ensayo = $("#Cu_2").val() * 1; //присваиваю, на вывод Cu % 
  $("#Cu_porc_lote_ensayo").html(Cu_porc_lote_ensayo.toFixed(2)); 
  var pen_lote_ensayo = Cu_porc_lote_ensayo; //присваиваю для расчёта Und 
//Calculation penalidades de lote Unidades      
  var pen_lote_und = (pen_lote_porc_max - pen_lote_ensayo) / pen_lote_paso; 
    if (pen_lote_und <= 0) {
    pen_lote_und = 0;
  }
  $("#pen_lote_und").html(pen_lote_und.toFixed(2));  
//  цвет поля красный на %  
   if (pen_lote_ensayo <= pen_lote_porc_max) {
    $("#table_Cu_porc_lote_ensayo").css("background-color", "#F1B0B7"); 
  }
   else { 
    $("#table_Cu_porc_lote_ensayo").css("background-color", "#B1DFBB"); 
    }
//Calculation penalalidades de lote  por 1TMS  
  var pen_lote_precio_total = pen_lote_und * pen_lote_precio_und;    
  $("#pen_lote_precio_total").html(pen_lote_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
//Return "0" en Precio total
  var gastos_pen_lote_precio_total = pen_lote_precio_total;
  $("#gastos_pen_lote_precio_total, #gastos_pen_lote_1tms").html(gastos_pen_lote_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));

//Calculation penalalidades de lote TOTAL  
  var pen_lote_precio_total_2 = pen_lote_precio_total * peso_Cu;    
  $("#pen_lote_precio_total_2, #gastos_pen_lote_total").html(pen_lote_precio_total_2.toLocaleString("en-US", {style: "currency", currency: "USD"}));  
//Return "0" en Precio total
/////////



//TABLE 3 calc START
	//Exploracion
		var exploracion_1tm = $("#exploracion_1tm").val();
		var total_exploracion = exploracion_1tm * TMH;
		$("#total_exploracion, #gastos_exploracion").html(total_exploracion.toLocaleString("en-US", {style: "currency", currency: "USD"}));
	//Servicios de Fabrica
    var fabrica_1tm = $("#fabrica_1tm").val();
    var fabrica_TMH = TMH * 1;
    $("#fabrica_TMH").html(fabrica_TMH.toFixed(2));  
    var total_fabrica = fabrica_1tm * TMH;
    $("#total_fabrica, #gastos_fabrica_cu ").html(total_fabrica.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  //Transporte a Fabrica
		var  transporte_1tm = $("#transporte_1tm").val();
		var total_transporte = transporte_1tm * TMH;
		$("#total_transporte, #gastos_transporte").html(total_transporte.toLocaleString("en-US", {style: "currency", currency: "USD"}));	
  //Transporte a Puerto + Humedad de Agua 2
    var  porc_de_agua_2 = $("#porc_de_agua_2").val();
    var  humedad_de_agua_2 = (porc_de_agua_2 * $("#transporte_TMS_2").html()) / 100;
    $("#humedad_de_agua_2").html(humedad_de_agua_2.toFixed(3));  
  //LA SUMA DE TMS + HUMEDAD 2
    var suma_agua2 = + $("#humedad_de_agua_2").html() + (+ $("#transporte_TMS_2").html());
    $("#suma_agua2").html(suma_agua2.toFixed(3));
  //Transporte a Puerto
    var transporte_1tm_2 = $("#transporte_1tm_2").val();
    var total_transporte_2 = $("#suma_agua2").html() * transporte_1tm_2;
    $("#total_transporte_2, #gastos_transporte_2").html(total_transporte_2.toLocaleString("en-US", {style: "currency", currency: "USD"})); 
  
//TABLE 3 calc END
		
//TABLE 4 calc START
// PESO DE VENTA TOTAL en TM
    //Cu
    var Cu_peso_tm_venta = $("#cont_met_Cu_2").html();
    $("#Cu_peso_tm_venta").html(Cu_peso_tm_venta); 
    ///////
    //Au
      $("#Au_select").change(function cw_Au() {
    if ($(this).val() === '1') {
      var oz_tc_oz_tm = $("#cont_met_Au_2").html() * 0.90718475;
      $("#Au_peso_tm_venta").html(oz_tc_oz_tm.toFixed(4));
    } else if ($(this).val() === '2') {
      var oz_tm_oz_tm = $("#cont_met_Au_2").html() * 1;
      $("#Au_peso_tm_venta").html(oz_tm_oz_tm.toFixed(4));
    } else if ($(this).val() === '3') {
      var g_tm_oz_tm = $("#cont_met_Au_2").html() * 0.03215075;
      $("#Au_peso_tm_venta").html(g_tm_oz_tm.toFixed(4));
    } 
    else { 
      var Au_select_0 = 0;
      $("#Au_peso_tm_venta").html(Au_select_0);
    }
    });
    //Repetiendo funcion balance para  function cw_Au
    if ($("#Au_select").val() === '1') {
      var oz_tc_oz_tm = $("#cont_met_Au_2").html() * 0.90718475;
      $("#Au_peso_tm_venta").html(oz_tc_oz_tm.toFixed(4));
    } else if ($("#Au_select").val() === '2') {
      var oz_tm_oz_tm = $("#cont_met_Au_2").html() * 1;
      $("#Au_peso_tm_venta").html(oz_tm_oz_tm.toFixed(4));
    } else if ($("#Au_select").val() === '3') {
      var g_tm_oz_tm = $("#cont_met_Au_2").html() * 0.03215075;
      $("#Au_peso_tm_venta").html(g_tm_oz_tm.toFixed(4));
    } 
    else { 
      var Au_select_0 = 0;
      $("#Au_peso_tm_venta").html(Au_select_0);
    }
    //////
    //Ag
      $("#Ag_select").change(function cw_Ag() {
    if ($(this).val() === '1') {
      var oz_tc_oz_tm_2 = $("#cont_met_Ag_2").html() * 0.90718475;
      $("#Ag_peso_tm_venta").html(oz_tc_oz_tm_2.toFixed(4));
    } else if ($(this).val() === '2') {
      var oz_tm_oz_tm_2 = $("#cont_met_Ag_2").html() * 1;
      $("#Ag_peso_tm_venta").html(oz_tm_oz_tm_2.toFixed(4));
    } else if ($(this).val() === '3') {
      var g_tm_oz_tm_2 = $("#cont_met_Ag_2").html() * 0.03215075;
      $("#Ag_peso_tm_venta").html(g_tm_oz_tm_2.toFixed(4));
    } 
    else { 
      var Ag_select_0_2 = 0;
      $("#Ag_peso_tm_venta").html(Ag_select_0_2);
    }
    });
    //Repetiendo funcion balance para  function cw_Ag
    if ($("#Ag_select").val() === '1') {
      var oz_tc_oz_tm_2 = $("#cont_met_Ag_2").html() * 0.90718475;
      $("#Ag_peso_tm_venta").html(oz_tc_oz_tm_2.toFixed(4));
    } else if ($("#Ag_select").val() === '2') {
      var oz_tm_oz_tm_2 = $("#cont_met_Ag_2").html() * 1;
      $("#Ag_peso_tm_venta").html(oz_tm_oz_tm_2.toFixed(4));
    } else if ($("#Ag_select").val() === '3') {
      var g_tm_oz_tm_2 = $("#cont_met_Ag_2").html() * 0.03215075;
      $("#Ag_peso_tm_venta").html(g_tm_oz_tm_2.toFixed(4));
    } 
    else { 
      var Ag_select_0 = 0;
      $("#Ag_peso_tm_venta").html(Ag_select_0);
    } 
///////
/////Precio para Cu $/lb, $/TM, $/kg
//Cu price converter and Cu PRICE TOTAL
      $("#Cu_price_select").change(function Cu_price_3_el() {
    if ($(this).val() === '1') {
      var cu_lb_price = $("#Cu_price").val() * 2204.62 * $("#Cu_peso_tm_venta").html() * ( $("#Cu_porc_de_pago").val() /100);
      $("#Cu_precio_total2").html(cu_lb_price.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    } else if ($(this).val() === '2') {
      var cu_TM_price = $("#Cu_price").val() * 1 * $("#Cu_peso_tm_venta").html() * ( $("#Cu_porc_de_pago").val() /100);      
      $("#Cu_precio_total2").html(cu_TM_price.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    } else if ($(this).val() === '3') {
      var cu_kg_price = $("#Cu_price").val() * 1000 * $("#Cu_peso_tm_venta").html() * ( $("#Cu_porc_de_pago").val() /100);      
      $("#Cu_precio_total2").html(cu_kg_price.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    } 
    else { 
      var Cu_price_select_0 = 0;
      $("#Cu_price_select").html();
    }
    });
    //Repetiendo funcion balance para  function Cu_price
    if ($("#Cu_price_select").val() === '1') {
      var cu_lb_price = $("#Cu_price").val() * 2204.62 * $("#Cu_peso_tm_venta").html() * ( $("#Cu_porc_de_pago").val() /100);
      $("#Cu_precio_total2").html(cu_lb_price.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    } else if ($("#Cu_price_select").val() === '2') {
      var cu_TM_price = $("#Cu_price").val() * 1 * $("#Cu_peso_tm_venta").html() * ( $("#Cu_porc_de_pago").val() /100);      
      $("#Cu_precio_total2").html(cu_TM_price.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    } else if ($("#Cu_price_select").val() === '3') {
      var cu_kg_price = $("#Cu_price").val() * 1000 * $("#Cu_peso_tm_venta").html() * ( $("#Cu_porc_de_pago").val() /100);      
      $("#Cu_precio_total2").html(cu_kg_price.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    } 
    else { 
      var Cu_price_select_0 = 0;
      $("#Cu_price_select").html();
    }
//Precio de VENTA de DE METALES TOTAL
		//Au
		var Au_precio_total = $("#Au_peso_tm_venta").html() * $("#Au_price").val() * ( $("#Au_porc_de_pago").val() /100); 
		$("#Au_precio_total").html(Au_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
		//Ag
		var Ag_precio_total = $("#Ag_peso_tm_venta").html() * $("#Ag_price").val() * ( $("#Ag_porc_de_pago").val() /100); 
		$("#Ag_precio_total").html(Ag_precio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));

//ADMINISTRACION GASTOS
    var  admin_gastos = $("#admin_gastos").val();
    var  total_admin_gastos = admin_gastos * peso_Cu;
    $("#total_admin_gastos").html(total_admin_gastos.toLocaleString("en-US", {style: "currency", currency: "USD"}));
//MAQUILA GASTOS
    var  maquila_gastos = $("#maquila_gastos").val();
    var  total_maquila_gastos = maquila_gastos * peso_Cu;
    $("#total_maquila_gastos").html(total_maquila_gastos.toLocaleString("en-US", {style: "currency", currency: "USD"}));
//REFINACION Au
    var  refinacion_Au = $("#refinacion_Au").val();
    var  total_refinacion_Au = refinacion_Au * $("#Au_peso_tm_venta").html();
    $("#total_refinacion_Au").html(total_refinacion_Au.toLocaleString("en-US", {style: "currency", currency: "USD"}));
//REFINACION Ag
    var  refinacion_Ag = $("#refinacion_Ag").val();
    var  total_refinacion_Ag = refinacion_Ag * $("#Ag_peso_tm_venta").html();
    $("#total_refinacion_Ag").html(total_refinacion_Ag.toLocaleString("en-US", {style: "currency", currency: "USD"}));
//DEDUCCIONES TOTAL
    var total_deducciones = total_exploracion + 
                            total_fabrica +
                            total_transporte + 
                            total_transporte_2 + 
                            total_admin_gastos + 
                            total_maquila_gastos + 
                            total_penalidades_gastos +
                            pen_lote_precio_total_2 + //TOTAL penalidades en lote, % de Cobre 
                            total_refinacion_Au + 
                            total_refinacion_Ag * 1; 
    $("#total_deducciones").html(total_deducciones.toLocaleString("en-US", {style: "currency", currency: "USD"}));                                       
//Beneficio TOTAL

 //SELECTOR Cu para 
if ($("#Cu_price_select").val() === '1') {
      var Cu_price_total = cu_lb_price;
    } else if ($("#Cu_price_select").val() === '2') {
      var Cu_price_total = cu_TM_price;      
    } else if ($("#Cu_price_select").val() === '3') {
      var Cu_price_total = cu_kg_price;      
    } 
    else { 
      var Cu_price_total = 0;
    }

///SUMA DE METALES TOTAL (VERDE)
    var Suma_de_metales_total = Cu_price_total + Au_precio_total + Ag_precio_total;
    $("#Suma_de_metales_total").html(Suma_de_metales_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
///IGV 18%
    var igv_18 = Suma_de_metales_total * $("#igv_input").val() / 100;
    $("#igv_18").html(igv_18.toLocaleString("en-US", {style: "currency", currency: "USD"}));
///METALES TOTAL INC. IGV
    var total_metales_igv = Suma_de_metales_total + igv_18;
    $("#total_metales_igv").html(total_metales_igv.toLocaleString("en-US", {style: "currency", currency: "USD"}));

  //Valor de LOTE TOTAL
    var beneficio_total = total_metales_igv - //suma de metales + igv
                          total_exploracion -
                          total_fabrica - 
                          total_transporte - 
                          total_transporte_2 - 
                          total_admin_gastos - 
                          total_maquila_gastos - 
                          total_penalidades_gastos - 
                          pen_lote_precio_total_2 -
                          total_refinacion_Au - 
                          total_refinacion_Ag;
    $("#beneficio_total").html(beneficio_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
//Beneficio TOTAL


//RENTABILIDAD
//Valor de 1 TM Cu
    var beneficio_1tm = beneficio_total / TMH; 
    beneficio_1tm = beneficio_1tm || 0 //Nan to 0
    $("#beneficio_1tm").html(beneficio_1tm.toLocaleString("en-US", {style: "currency", currency: "USD"}));
// VALOR DE 1 TM DE CONCENTRADO DE MINERAL Cu
    var valor_1tm_conc = beneficio_total / peso_Cu;
    valor_1tm_conc = valor_1tm_conc || 0 //Nan to 0
    $("#valor_1tm_conc").html(valor_1tm_conc.toLocaleString("en-US", {style: "currency", currency: "USD"}));


///NUMBERS TO WORDS START
var mapNumbers = {
    0 : [2, 1, "CERO"],
    1 : [0, 2, "UN", "UN"],
    2 : [1, 2, "DOS", "DOS"],
    3 : [1, 1, "TRES"],
    4 : [1, 1, "CUATRO"],
    5 : [2, 1, "CINCO"],
    6 : [2, 1, "SÉIS"],
    7 : [2, 1, "SIETE"],
    8 : [2, 1, "OCHO"],
    9 : [2, 1, "NUEVE"],
    10 : [2, 1, "DIEZ"],
    11 : [2, 1, "ONCE"],
    12 : [2, 1, "DOCE"],
    13 : [2, 1, "TRECE"],
    14 : [2, 1, "CATORCE"],
    15 : [2, 1, "QUINCE"],
    16 : [2, 1, "DIECISÉIS"],
    17 : [2, 1, "DIECISIETE"],
    18 : [2, 1, "DIECIOCHO"],
    19 : [2, 1, "DIECINUEVE"],
    20 : [2, 1, "VEINTE"],
    30 : [2, 1, "TREINTA"],
    40 : [2, 1, "CUARENTA"],
    50 : [2, 1, "CINCUENTA"],
    60 : [2, 1, "SESENTA"],
    70 : [2, 1, "SETENTA"],
    80 : [2, 1, "OCHENTA"],
    90 : [2, 1, "NOVENTA"],
    100 : [2, 1, "CIENTO","CIEN"],
    200 : [2, 1, "DOSCIENTOS"],
    300 : [2, 1, "TRESCIENTOS"],
    400 : [2, 1, "CUATROCIENTOS"],
    500 : [2, 1, "QUINIENTOS"],
    600 : [2, 1, "SEISCIENTOS"],
    700 : [2, 1, "SETECIENTOS"],
    800 : [2, 1, "OCHOCIENTOS"],
    900 : [2, 1, "NOVECIENTOS"]
};

var mapOrders = [
    { _Gender : true, _arrStates : ["DOLAR AMERICANO (USD)", "DOLARES AMERICANÓS (USD)", "DOLARES AMERICANÓS (USD)"] },
    { _Gender : false, _arrStates : ["MIL", "MIL", "MIL"] },
    { _Gender : true, _arrStates : ["MILLÓN", "MILLÓNES", "MILLÓNES"] },
    { _Gender : true, _arrStates : ["BILLÓN", "BILLÓNES", "BILLÓNES"] },
    { _Gender : true, _arrStates : ["TRILLÓN", "TRILLÓNES", "TRILLÓNES"] }
];

var objKop = { _Gender : false, _arrStates : ["CENTAVO", "CENTAVOS", "CENTAVOS"] };

function Value(dVal, bGender) {
    var xVal = mapNumbers[dVal];
    if (xVal[1] == 1) {
        return xVal[2];
    } else {
        return xVal[2 + (bGender ? 0 : 1)];
    }
}

function From0To999(fValue, oObjDesc, fnAddNum, fnAddDesc)
{
    var nCurrState = 2;
    if (Math.floor(fValue/100) > 0) {
        var fCurr = Math.floor(fValue/100)*100;
        fnAddNum(Value(fCurr, oObjDesc._Gender));
        nCurrState = mapNumbers[fCurr][0];
        fValue -= fCurr;
    }

    if (fValue < 20) {
        if (Math.floor(fValue) > 0) {
            fnAddNum(Value(fValue, oObjDesc._Gender));
            nCurrState = mapNumbers[fValue][0];
        }
    } else {
        var fCurr = Math.floor(fValue/10)*10;
        fnAddNum(Value(fCurr, oObjDesc._Gender));
        nCurrState = mapNumbers[fCurr][0];
        fValue -= fCurr;

        if (Math.floor(fValue) > 0) {
            fnAddNum(Value(fValue, oObjDesc._Gender));
            nCurrState = mapNumbers[fValue][0];
        }
    }

    fnAddDesc(oObjDesc._arrStates[nCurrState]);
}

function FloatToSamplesInWordsRus(fAmount)
{
    var fInt = Math.floor(fAmount + 0.005);
    var fDec = Math.floor(((fAmount - fInt) * 100) + 0.5);

    var arrRet = [];
    var iOrder = 0;
    var arrThousands = [];
    for (; fInt > 0.9999; fInt/=1000) {
        arrThousands.push(Math.floor(fInt % 1000));
    }
    if (arrThousands.length == 0) {
        arrThousands.push(0);
    }

    function PushToRes(strVal) {
        arrRet.push(strVal);
    }

    for (var iSouth = arrThousands.length-1; iSouth >= 0; --iSouth) {
        if (arrThousands[iSouth] == 0) {
            continue;
        }
        From0To999(arrThousands[iSouth], mapOrders[iSouth], PushToRes, PushToRes);
    }

    if (arrThousands[0] == 0) {
        //  Handle zero amount
        if (arrThousands.length == 1) {
            PushToRes(Value(0, mapOrders[0]._Gender));
        }

        var nCurrState = 2;
        PushToRes(mapOrders[0]._arrStates[nCurrState]);
    }

    if (arrRet.length > 0) {
        // Capitalize first letter
        arrRet[0] = arrRet[0].match(/^(.)/)[1].toLocaleUpperCase() + arrRet[0].match(/^.(.*)$/)[1];
    }

    arrRet.push((fDec < 10) ? ("0" + fDec) : ("" + fDec));
    From0To999(fDec, objKop, function() {}, PushToRes);

    return arrRet.join(" ");
}

//выводит переменную в #id 
var beneficio_total_words = beneficio_total;
$("#beneficio_total_words").html(FloatToSamplesInWordsRus(parseFloat(beneficio_total_words)));

///NUMBERS TO WORDS END





}//END FUNCTION balance


//COPY name of Incortem DAP
function transporte() {
  //take value from input transporte
  var transporte_1 = $("#transporte_1").val();
  var transporte_2 = $("#transporte_2").val();
  //writing value in GASTOS transporte
  $("#transporte_1_1").html(transporte_1);
  $("#transporte_2_2").html(transporte_2);
}


////TOOLTIPS PODSKAZKI 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})







  
