// //hacemos conexion de items con la PokeAPI
// function pruebaAPI(){
// fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.error(error));
// }
// //probamos salida en consola
// console.log(pruebaAPI);
// //probamos ver solo por nombre
// function pruebaAPInombre(){
// fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
//   .then(res => res.json())
//   .then(data => {
    //     data.results.forEach(pokemon => {
//         console.log(pokemon.name);
//     });
//   });
// }


const input = document.getElementById("input-busqueda-pokemon")
const btn = document.getElementById("btn-busqueda")
const lista = document.getElementById("pokemon-list")
const btnVolver = document.getElementById("btn-volver");

// console.log(pruebaAPInombre);
function llamarPokeAPI(){
fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then(res => res.json())
  .then(data => {
    console.log(data.results);
    llamarPokemon(data.results);
  })
  .catch(error => console.error(error));
}
llamarPokeAPI()

function llamarPokemon(pokemons) {
    const lista = document.getElementById("pokemon-list");
    console.log(lista);
    
    
    lista.innerHTML = "";

     pokemons.forEach(pokemon => {
    fetch(pokemon.url)
      .then(res => res.json())
      .then(data => {
        const div = document.createElement("div");
      div.className = "card border border-danger border-3"; 
      div.style.width = "18rem";

        div.innerHTML = `
            <img src="${data.sprites.front_default}" class="card-img-top my-0 mx-auto" alt="${data.name}">
            <div class="card-body">
              <p class="card-text text-capitalize fs-3">${data.name}</p>
            </div>
        `;

        lista.appendChild(div);
      });
  });
}
btn.addEventListener("click", buscarPokemon)

function buscarPokemon() {
  const nombre = input.value.toLowerCase().trim();

  if (!nombre) return;

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("No encontrado");
      }
      return res.json();
    })
    .then(data => {
      renderPokemonUnico(data);
    })
    .catch(error => {
      alert("Pokémon no encontrado 😢");
      console.error(error);
    });
}

function renderPokemonUnico(data) {
  lista.innerHTML = "";

  const col = document.createElement("div");
  col.className = "col-12 col-md-4 mx-auto";

  col.innerHTML = `
    <div class="card text-center border border-danger border-3">
      <img src="${data.sprites.front_default}" class="card-img-top mx-auto">
      <div class="card-body">
        <h5 class="text-capitalize">${data.name}</h5>
        <p>Peso: ${data.weight}</p>
      </div>
    </div>
  `;

  lista.appendChild(col);
}

btnVolver.addEventListener("click", () => {
    input.value = "";
    llamarPokeAPI();
});



