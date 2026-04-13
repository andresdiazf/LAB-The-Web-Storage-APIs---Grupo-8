
/// funciones ejemplo locaStorage 


function saveFavorite() {
      if (!currentPokemon) return;

      // Obtener lista actual o crear array vacío
      const favorites = JSON.parse(localStorage.getItem("mis_favoritos")) || [];

      // Verificar que no esté repetido
      const yaExiste = favorites.some(function(p) {
        return p.name === currentPokemon.name;
      });

      if (yaExiste) {
        alert("Este Pokémon ya está en tus favoritos.");
        return;
      }

      // Añadir y guardar
      favorites.push(currentPokemon);
      localStorage.setItem("mis_favoritos", JSON.stringify(favorites));

      // Actualizar lista en pantalla
      updateFavoritesList();
  }

// updateFavoritesList()
function updateFavoritesList() {
  const container = document.getElementById("favoritos");

  // Leer favoritos del localStorage
  const favorites = JSON.parse(localStorage.getItem("mis_favoritos")) || [];

  // Borrar contenido anterior
  container.innerHTML = "";

  if (favorites.length === 0) {
    container.innerHTML = "<p>No tienes favoritos aún.</p>";
    return;
}