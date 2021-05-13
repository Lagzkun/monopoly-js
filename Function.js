console.log('uwu');

//const casilla = document.getElementsByClassName('item')
//console.log({casilla}); 

const selectors = {
    casillaPosition: '[data-casilla]',
    casillaNumber: '[data-number]',
    casilla: '[data-uno]'
} 
const casillaElement = document.querySelectorAll(selectors.casillaPosition)
const casillaNumber = document.querySelectorAll(selectors.casillaNumber)
console.log(casillaElement);
console.log(casillaNumber);

casillaElement.forEach(casilla => {
    casilla.addEventListener('click', function(){
    const valorNumerico = casilla.querySelector(selectors.casillaNumber)
        console.log(valorNumerico.innerHTML);
    })
})



//const uno = document.querySelector(selectors.casilla)
//const primerValor = uno.querySelector(selectors.casillaNumber)
//uno.addEventListener('click', function(){
   // mostrar()
//})
//function mostrar() {
    //console.log('uno');
    //console.log(primerValor.innerHTML);
//}



