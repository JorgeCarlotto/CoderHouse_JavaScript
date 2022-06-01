alert("Bienvenido a un pequeño juego de dados 🎲")

let userNumber = prompt("Ingresa la cantidad de tiradas de tu dado")
 let userNumberMin = prompt("Ingresa numero minimo de tu dado")
 let userNumberMax = prompt("Ingresa numero maximo de tu dado")


const NumeroAleatorio = (min,max)=>{

    return Math.floor((Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min));
} 


 for (let i = 0; i <= userNumber; i++) {
    
    alert("Tu numero de la suerte es: " + NumeroAleatorio(userNumberMin,userNumberMax)+" 🍀")

 }
