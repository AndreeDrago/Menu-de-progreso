const progreso = document.getElementById('progreso')
const anterior = document.getElementById('anterior')
const siguiente = document.getElementById('siguiente')
const circulos = document.querySelectorAll('.circulo')

let activador = 1

function actualiza() {
    circulos.forEach((circulo, idx) => {
        if(idx < activador) {
            circulo.classList.add('activo')
        } else {
            circulo.classList.remove('activo')
        }
    })

    const activos = document.querySelectorAll('.activo')

    progreso.style.width = (activos.length - 1) / (circulos.length - 1) * 100 + '%'

    if(activador === 1) {
        anterior.disabled = true
    } else if(activador === circulos.length) {
        siguiente.disabled = true
    } else {
        anterior.disabled = false
        siguiente.disabled = false
    }
}

siguiente.addEventListener('click', () => {
    activador++

    if(activador > circulos.length) {
        activador = circulos.length
    }

    actualiza()
})

anterior.addEventListener('click', () => {
    activador--

    if(activador < 1) {
        activador = 1
    }

    actualiza()
})

