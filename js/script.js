var carre = document.getElementsByTagName('button');
var ecran = document.getElementById('ecranjoueur');
var joueur = 0;

function verif(){
	if (document.getElementById('a1').innerHTML + document.getElementById('a2').innerHTML + document.getElementById('a3').innerHTML =='OOO'
		||
		document.getElementById('b1').innerHTML + document.getElementById('b2').innerHTML + document.getElementById('b3').innerHTML =='OOO'
		||
		document.getElementById('c1').innerHTML + document.getElementById('c2').innerHTML + document.getElementById('c3').innerHTML =='OOO'
		||
		document.getElementById('a1').innerHTML + document.getElementById('b1').innerHTML + document.getElementById('c1').innerHTML =='OOO'
		||
		document.getElementById('a2').innerHTML + document.getElementById('b2').innerHTML + document.getElementById('c2').innerHTML =='OOO'
		||
		document.getElementById('a3').innerHTML + document.getElementById('b3').innerHTML + document.getElementById('c3').innerHTML =='OOO'
		||
		document.getElementById('a1').innerHTML + document.getElementById('b2').innerHTML + document.getElementById('c3').innerHTML =='OOO'
		||
		document.getElementById('c1').innerHTML + document.getElementById('b2').innerHTML + document.getElementById('a3').innerHTML =='OOO'){
		alert('joueur 1 a gagné');
		reset();
	}
	if (document.getElementById('a1').innerHTML + document.getElementById('a2').innerHTML + document.getElementById('a3').innerHTML =='XXX'
		||
		document.getElementById('b1').innerHTML + document.getElementById('b2').innerHTML + document.getElementById('b3').innerHTML =='XXX'
		||
		document.getElementById('c1').innerHTML + document.getElementById('c2').innerHTML + document.getElementById('c3').innerHTML =='XXX'
		||
		document.getElementById('a1').innerHTML + document.getElementById('b1').innerHTML + document.getElementById('c1').innerHTML =='XXX'
		||
		document.getElementById('a2').innerHTML + document.getElementById('b2').innerHTML + document.getElementById('c2').innerHTML =='XXX'
		||
		document.getElementById('a3').innerHTML + document.getElementById('b3').innerHTML + document.getElementById('c3').innerHTML =='XXX'
		||
		document.getElementById('a1').innerHTML + document.getElementById('b2').innerHTML + document.getElementById('c3').innerHTML =='XXX'
		||
		document.getElementById('c1').innerHTML + document.getElementById('b2').innerHTML + document.getElementById('a3').innerHTML =='XXX'){
		alert('joueur 2 a gagné');
		reset();
	}
	if (carre.innerHTML != '' && tour==9){
		alert('égalité !');
		reset();
	}
}

function reset (){
	for (var i=0, il=carre.length; i<il; i++){
	joueur=0;
	tour=0;
	carre[i].disabled=false;
	carre[i].innerHTML='';
	}
}

for(var i=0, il=carre.length, tour=0; i<il; i++){
	carre[i].addEventListener('click', function(event){
		joueur = joueur == 0 ? 1:0;
		switch (joueur){
			case 1:
				ecran.innerHTML = 'Joueur 1'
				this.innerHTML = 'O';
				this.disabled=true;
				tour++;
				verif();
				break;
			default:
				ecran.innerHTML = 'Joueur 2'
				this.innerHTML = 'X';
				this.disabled=true;
				tour++;
				verif()
		}
	console.log(tour)
	})
}