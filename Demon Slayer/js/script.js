let imagenes = ["./media/sol.jpg",
                "./media/nezuko.jpg",
                "./media/rayo.jpg",
                "./media/bestia.jpg",
                "./media/mariposa.jpg",
                "./media/agua.jpg",
                "./media/rengoku.jpeg",
                "./media/sonido.jpg",
                "./media/serpiente.jpg",
                "./media/viento.jpg",
                "./media/amor.jpg"
]


let concatena = ``
for(let elemento of imagenes){
    concatena += `
                <div class="carta">
                    <img src="${elemento}">
                </div>
    `
}

document.querySelector(".contenedor-cartas").innerHTML = concatena