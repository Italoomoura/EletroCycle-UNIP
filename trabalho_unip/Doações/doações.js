function mostrar(doar1, doar2) {
	
    var div2 = document.getElementById(doar2);
	var disp2 = div2.style.display;
    div2.style.display = disp2 == 'none' ? 'block' : 'none';

	var div1 = document.getElementById(doar1);
	var disp1 = div1.style.display;
    div1.style.display = disp1 == 'none' ? 'block' : 'none';
	
}

function fim(doar2, fim) {

    var div3 = document.getElementById(fim);
	var disp3 = div3.style.display;
    div3.style.display = disp3 == 'none' ? 'block' : 'none';

	var div2 = document.getElementById(doar2);
	var disp2 = div2.style.display;
    div2.style.display = disp2 == 'none' ? 'block' : 'none';

}