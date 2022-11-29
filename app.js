const contenedor = document.getElementById('contenedor')
const pagina = document.getElementById('pagina')
const siguiente = document.getElementById('siguiente')
const home = document.getElementById('home')

let datos = []
let numPagina = 1

const getData = async(num)=>{
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${num}`)
    const data = await res.json()
    datos = data.results
    console.log(datos);
    drawData(datos)
}

const drawData = (datos)=>{
    let personajesData = document.createElement('div')
    personajesData.className = 'row justify-content-around text-center'
    personajesData.id = 'personajesData'
    contenedor.append(personajesData)
    datos.map(personaje =>{
        personajesData.innerHTML += `
        <div class="col-sm-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Nombre: ${personaje.name}</h5>
              <p class="card-text">Localización: ${personaje.location.name}</p>
              <p class="card-text">Origen: ${personaje.origin.name}</p>
              <p class="card-text">Estado: ${personaje.status}</p>
              <img src="${personaje.image}" alt="imagen" width="140rem">
            </div>
          </div>
        </div>
        `
    })
}
getData(numPagina)

siguiente.addEventListener('click',()=>{
    if (numPagina <= 42) {
        document.getElementById('personajesData').remove()
        numPagina++
        pagina.textContent = `Pagina ${numPagina}`
        getData(numPagina)
    }
    return
})

home.addEventListener('click',()=>{
    document.getElementById('personajesData').remove()
    numPagina = 1
    pagina.textContent = `Home page`
    getData(numPagina)
})
