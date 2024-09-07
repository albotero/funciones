/*
  ● Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener un identificador único. (1 Punto)

  ● Dentro del script agrega el evento para que al hacer click a cada uno de los divs, este cambie de color al color negro. Utiliza addEventListener para agregar el evento. (1 Punto)

  ● Crea una página junto a un script que guarde dentro de una variable global un color dependiendo de la letra del teclado presionada. (2 Puntos).
    ○ La letra a guardará el color rosado.
    ○ La letra s guardará el color naranjo.
    ○ La letra d guardará el color celeste.
    ○ Para guardar el color revisa el tip al final del enunciado.
    ○ Crea un nuevo div con el id “key”, de 200px de ancho y alto y de
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
  a: { color: "#ff83cc", newDiv: false },
  s: { color: "darkorange", newDiv: false },
  d: { color: "#25d7fa", newDiv: false },
  q: { color: "#6d20d5", newDiv: true },
  w: { color: "#aaa", newDiv: true },
  e: { color: "#7c341b", newDiv: true },
}

const body = document.querySelector("body")
body.style.display = "flex"
body.style.flexWrap = "wrap"
body.style.gap = "5px"

const changeColor = (div, color) => (div.style.backgroundColor = color)

const createDiv = ({ id, color, change = false }) => {
  const div = document.createElement("div")
  if (id) div.id = id
  div.style.width = "200px"
  div.style.height = "200px"
  if (change) {
    div.style.cursor = "pointer"
    div.addEventListener("click", (ev) => changeColor(ev.target, "black"))
  }
  changeColor(div, color)
  body.appendChild(div)
}

divs.forEach((d) => createDiv({ ...d, change: true }))

let selectedColor
createDiv({ id: "key" })
const keyDiv = document.getElementById("key")
keyDiv.style.border = "1px solid black"
keyDiv.style.backgroundColor = "white"

document.addEventListener("keydown", function (event) {
  const selection = keys[event.key]
  if (selection) {
    const { color, newDiv } = selection
    if (newDiv) {
      // Keys q, w, e
      createDiv({ color })
    } else {
      // Keys a, s, d
      selectedColor = color
      keyDiv.style.backgroundColor = selectedColor
    }
  }
})
