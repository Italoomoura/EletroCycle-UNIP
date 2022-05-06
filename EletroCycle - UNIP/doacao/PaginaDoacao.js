function mostrar(doar1, doar2) {
	
    var div2 = document.getElementById(doar2);
	var disp2 = div2.style.display;
    div2.style.display = disp2 == 'none' ? 'block' : 'none';

	var div1 = document.getElementById(doar1);
	var disp1 = div1.style.display;
    div1.style.display = disp1 == 'none' ? 'block' : 'none';
	
}

function Enviar() {
    var nome = document.getElementById("nome");
    var valor = document.getElementById("valor");
    if (valor.value > 1) {
        var moeda = "reais";
    }
    else {
        var moeda = "real";
    }
    if (valor.value < 1) {
        document.write("<head><link rel='stylesheet' href='PaginaDoacao.css'><title>EletroCycle - Doar</title></head><div class='container'><h1 style='text-align: center;'>Por favor, insira um valor!</h1></div>");
    }
    else {
        if (nome.value != "") {
            document.write(
                "<head><link rel='stylesheet' href='PaginaDoacao.css'><title>EletroCycle - Doar</title></head><div class='container'><h1 style='text-align: center;'>Obrigado por doar "+valor.value+" "+moeda+", senhor(a) "+nome.value+"!</h1></div>");
        }
        else {
            document.write("<head><link rel='stylesheet' href='PaginaDoacao.css'><title>EletroCycle - Doar</title></head><div class='container'><h1 style='text-align: center;'>Obrigado Por Doar "+valor.value+" "+moeda+"!</h1></div>");
        }
    }
}

function fim(doar2, fim) {

    var div3 = document.getElementById(fim);
	var disp3 = div3.style.display;
    div3.style.display = disp3 == 'none' ? 'block' : 'none';

	var div2 = document.getElementById(doar2);
	var disp2 = div2.style.display;
    div2.style.display = disp2 == 'none' ? 'block' : 'none';
    Enviar();
}