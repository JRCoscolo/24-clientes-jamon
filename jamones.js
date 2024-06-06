let clientes = ["Alarico", "Widerico", "Chindasvinta", "DonRamon", "Perchita", "Muzaman", "Lobombre", 
"Sombra Oscura",
"Widerico",
"Widerico",
]
let dinero = [Math.floor(Math.random() * 10001),
    Math.floor(Math.random() * 10001),
    Math.floor(Math.random() * 10001),
    Math.floor(Math.random() * 10001),
    Math.floor(Math.random() * 10001),
    Math.floor(Math.random() * 10001),
    Math.floor(Math.random() * 10001),
    Math.floor(Math.random() * 10001),
    Math.floor(Math.random() * 10001),
    Math.floor(Math.random() * 10001),
]
//Usamos foreach, porque en lugar de una programación imperativa, es un paradigma de programación declarativa.
clientes.forEach(function(valor,index){
dinero.forEach(function(valor,index) {
    if (valor = 10000){
        console.log("Ganadores del jamón:", clientes[valor = dinero[index]], index)
    }
    else (valor <10000);{
        console.log("Ganadores de la cesta", clientes[valor = dinero[index]], index)
    }
    
    })
    
})
