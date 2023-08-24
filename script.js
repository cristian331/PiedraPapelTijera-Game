window.addEventListener('load',iniciarPagina)
let ataqueJugador
let ataqueEnemigo
let vidasJugador=3
let vidasEnemigo=3

function iniciarPagina(){
  let seccionVidaJugadores = document.getElementById("vidaJugadores")
  seccionVidaJugadores.style.display='none'
  let seccionElegirAtaque = document.getElementById("elegirAtaque")
  seccionElegirAtaque.style.display='none'
  let seccionReiniciarJuego = document.getElementById("reiniciarGame")
  seccionReiniciarJuego.style.display='none'
  let seccionMensajeCombate = document.getElementById("mensajeCombate")
  seccionMensajeCombate.style.display='none'  

  let botonIniciarJuego = document.getElementById("iniciar")
  botonIniciarJuego.addEventListener('click',iniciarJuego)

  let botonReiniciarJuego = document.getElementById("reIniciar")
  botonReiniciarJuego.addEventListener('click', reiniciarPag )
}

function iniciarJuego(){
  let seccionVidaJugadores = document.getElementById("vidaJugadores")
  seccionVidaJugadores.style.display='grid'
  let seccionElegirAtaque = document.getElementById("elegirAtaque")
  seccionElegirAtaque.style.display='block'
  let seccionMensajeCombate = document.getElementById("mensajeCombate")
  seccionMensajeCombate.style.display='flex'
  let botonIniciarJuego = document.getElementById("iniciar")
  botonIniciarJuego.disabled=true
  let seccionIniciarGame = document.getElementById("iniciarGame")
  seccionIniciarGame.style.display='none'

  let botonPiedra=document.getElementById('botonPiedra')
	botonPiedra.addEventListener('click',ataquePiedra)
	let botonPapel=document.getElementById('botonPapel')
	botonPapel.addEventListener('click',ataquePapel)
	let botonTijera=document.getElementById('botonTijera')
	botonTijera.addEventListener('click',ataqueTijera)
}
function ataquePiedra(){
  ataqueJugador = 'Piedra⛰'
  ataqueEnemigoAleatorio()
  
} 
function ataquePapel(){
  ataqueJugador = 'Papel📃'
  ataqueEnemigoAleatorio()
}
function ataqueTijera(){
  ataqueJugador = 'Tijera✂️'
  ataqueEnemigoAleatorio() 
}

function aleatorio(min,max){
  return Math.floor(Math.random()*(max-min+1)+min) 
}
function ataqueEnemigoAleatorio(){
  let numeroAleatorio = aleatorio(1,3)
  ataqueEnemigo = eleccion(numeroAleatorio)
  quienGana(ataqueJugador,ataqueEnemigo)
}
// funcion eleccion
function eleccion(jugada){
  let resultado = ""
  if(jugada == 1){
    resultado = "Piedra⛰"
  }else if(jugada == 2){
    resultado = "Tijera✂️"
  }else if(jugada == 3){
    resultado = "Papel📃"
  }else 
    resultado = "MAL ELEJIDO"
  return resultado
}
// funcion combate
function quienGana(elejugador,elepc){
  let spanvidaJugador=document.getElementById('vidaJugador')
  let spanvidaEnemigo=document.getElementById('vidaEnemigo')
  
  if(elejugador==elepc){
    crearMensaje("EMPATE")
  }else if(elejugador=="Piedra⛰" && elepc=="Tijera✂️"){
    crearMensaje("GANASTE")
    vidasEnemigo--
    spanvidaEnemigo.innerHTML = vidasEnemigo
  }else if(elejugador=="Tijera✂️" && elepc=="Papel📃"){
    crearMensaje("GANASTE")
    vidasEnemigo--
    spanvidaEnemigo.innerHTML = vidasEnemigo
  }else if(elejugador=="Papel📃" && elepc=="Piedra⛰"){
    crearMensaje("GANASTE")
    vidasEnemigo--
    spanvidaEnemigo.innerHTML = vidasEnemigo
  }else {
    crearMensaje("PERDISTE")
    vidasJugador--
    spanvidaJugador.innerHTML = vidasJugador
  }
  if(vidasJugador == 0){
    crearResultado("PERDISTE - SIGUE INTENTANDO")
    desactivarBotonesAtaques()
    reiniciarJuego()
  }else if(vidasEnemigo == 0){
    crearResultado(" GANASTE - FELICITACIONES")
    desactivarBotonesAtaques()
    reiniciarJuego()
  }
}
function reiniciarJuego(){
  let seccionReiniciarJuego = document.getElementById("reiniciarGame")
  seccionReiniciarJuego.style.display='flex'
  let botonReiniciarJuego = document.getElementById("reIniciar")
  botonReiniciarJuego.addEventListener('click', reiniciarPag )
}

function crearMensaje(resultado){

  let seccionResultadoCombate=document.getElementById('resultadoCombate')
  let seccionEleccionJugador=document.getElementById('eleccionJugador')
  let seccionEleccionRival=document.getElementById('eleccionRival')

  let parrafoEleccionJugador=document.createElement('p')
  let parrafoEleccionRival=document.createElement('p')

  seccionResultadoCombate.innerHTML=resultado
  parrafoEleccionJugador.innerHTML=ataqueJugador
  parrafoEleccionRival.innerHTML=ataqueEnemigo

 seccionEleccionJugador.appendChild(parrafoEleccionJugador)
 seccionEleccionRival.appendChild(parrafoEleccionRival)


}
function crearResultado(resultadoFinal){
  let seccionMensajeResultado = document.getElementById('mensajeFinal')
  let parrajoResultado = document.createElement('p')
  parrajoResultado.innerHTML= resultadoFinal
  seccionMensajeResultado.appendChild(parrajoResultado)  
}

function desactivarBotonesAtaques(){
  let botonPiedra = document.getElementById("botonPiedra")
  botonPiedra.disabled=true
  let botonPapel = document.getElementById("botonPapel")
  botonPapel.disabled=true
  let botonTijera = document.getElementById("botonTijera")
  botonTijera.disabled=true
}

function reiniciarPag(){
  location.reload()
}

