/*
  ● Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener un identificador único. (1 Punto)

  ● Dentro del script agrega el evento para que al hacer click a cada uno de los divs, este cambie de color al color negro. Utiliza addEventListener para agregar el evento. (1 Punto)

  ● Crea una página junto a un script que guarde dentro de una variable global un color dependiendo de la letra del teclado presionada. (2 Puntos).
    ○ La letra a guardará el color rosado.
    ○ La letra s guardará el color naranjo.
    ○ La letra d guardará el color celeste.
    ○ Para guardar el color revisa el tip al final del enunciado.
    ○ Creaunnuevodivconelid“key”,de200pxdeanchoyaltoyde
    color blanco y borde negro.
    ○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
    “key” a rosado, naranjo o celeste respectivamente.

  ● Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se deberá crear un div nuevo de las mismas dimensiones antes mencionadas con los colores morado, gris y café respectivamente. (1 Punto)
*/

const divs = [
  { id: "div-blue", color: "blue" },
  { id: "div-red", color: "red" },
  { id: "div-green", color: "green" },
  { id: "div-yellow", color: "yellow" },
]

const keys = {
  a: "pink",
  s: "orange",
  d: "#00aae4",
}

const body = document.querySelector("body")
body.style.display = "flex"
body.style.gap = "5px"

const changeColor = (div, color) => (div.style.backgroundColor = color)

divs.forEach(({ id, color }) => {
  const div = document.createElement("div")
  div.id = id
  div.style.width = "200px"
  div.style.height = "200px"
  div.style.cursor = "pointer"
  changeColor(div, color)
  div.addEventListener("click", (ev) => changeColor(ev.target, "black"))
  body.appendChild(div)
})
