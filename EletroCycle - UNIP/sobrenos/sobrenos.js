function MenuMostrar(Menu2, menu) {
	
    var div2 = document.getElementById(menu);
	var disp2 = div2.style.display;
    div2.style.display = disp2 == 'none' ? 'block' : 'block';

	var div1 = document.getElementById(Menu2);
	var disp1 = div1.style.display;
    div1.style.display = disp1 == 'none' ? 'block' : 'none';
	
}