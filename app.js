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
    console.log(data);
  })
  .catch(error => console.error(error));
}
llamarPokeAPI()


