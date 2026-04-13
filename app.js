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