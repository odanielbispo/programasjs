function ex1() {
	var nota1 = Number(document.getElementById("nota1").value);
	//recebe a nota 1

	var nota2 = Number(document.getElementById("nota2").value);
	//recebe a nota 2

	var nota3 = Number(document.getElementById("nota3").value);
	//recebe a nota 3

	var nota4 = Number(document.getElementById("nota4").value);
	//recebe a nota 4

	var media = (nota1 + nota2 + nota3 + nota4) / 4;
	//calcula a média

	if ( media >= 7){
		alert("Aluno Aprovado!")
	}
	else {
		alert("Aluno Reprovado!")
	}
}

function ex2(){
	var nota1 = Number(document.getElementById("nota1").value);
	//recebe a primeira nota

	var nota2 = Number(document.getElementById("nota2").value);
	//recebe a segunda nota

	var media = (nota1 + nota2) / 2;
	//calcula a média

	if ( media >= 7){
		alert("Aluno Aprovado!")
	}
	else if ( media <= 3){
		alert("Aluno Reprovado!")
	}
	else{
		alert("Aluno fara o Exame")
	}
}

function ex3(){
	var n1 = Number(document.getElementById("n1").value);
	//recebe o primeiro número

	var n2 = Number(document.getElementById("n2").value);
	//recebe o segundo número

	if (n1 > n2){
		alert("Entre " + n1 + " e " + n2 + " o menor é " + n2)
	}
	else{
		alert("Entre " + n1 + " e " + n2 + " o menor é " + n1)
	}
}

function ex4(){
	var n1 = Number(document.getElementById("n1").value);
	//recebe o primeiro número

	var n2 = Number(document.getElementById("n2").value);
	//recebe o segundo número

	var n3 = Number(document.getElementById("n3").value);
	//recebe o terceiro número

	if ( n1 > n2 && n1 > n3 ){
		alert("O maior número é " + n1)
	}
	else if (n2 > n1 && n2 > n3 ){
		alert("O maior número é " + n2)
	}
	else if (n3 > n1 && n3 > n2 ){
		alert("O maior número é " + n3)
	}
	else {
		alert("O maior número é " + n4)
	}
}

function ex5(){
	var n1 = Number(document.getElementById("n1").value);
	var n2 = Number(document.getElementById("n2").value);
	var operacao = Number(document.getElementById("operacao").value)
	var resultado

	switch (operacao){
		case 0:
			resultado = (n1 + n2)/2;
		break

		case 1: if (n1 >= n2) {
			resultado = n1 - n2;
			}
			else {
			resultado = n2 - n1
			}
		break

		case 2:
			resultado = n1 * n2
		break

		case 3: if (n2 != 0){
			resultado = n1 / n2
			}
			else {
			resultado = "Divisão por Zero"
			}
		break
		default: resultado = "opção Inválida"
		alert("Resultado " + resultado)
	}
}

function ex7(){
	var salario = Number(document.getElementById("salario").value);
	if (salario < 500) {
		var novo = salario + salario*30/100
		alert("Novo valor " + novo)
	}
	else{
		alert("Não vai ter aumento")
	}

}