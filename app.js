//Muda a imagem do celular

function imgColorChange (e){
	document.querySelector('#phone').src = e
}

//Muda a cor do circulo

function circleColorChange(color){
	const circle = document.querySelector('.circle')

	circle.style.background = color
}