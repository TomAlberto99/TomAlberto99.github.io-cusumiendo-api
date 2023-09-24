async function getAleatorio(){
    try {
        const numeroAleatorio = Math.floor(Math.random() * 300);
        console.log(numeroAleatorio);

        const character = await getCharacterById(numeroAleatorio);
        
        // Accede a la imagen y al nombre del personaje y muestra en la consola
        console.log(character.name);
        
        const imagen = document.getElementById("img-aleatorio");
        imagen.setAttribute("src", character.image);
    } catch (error) {
        console.error(error);
    }
}

async function getCharacterById(numeroAleatorio) {
    const url = `https://rickandmortyapi.com/api/character/${numeroAleatorio}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al obtener el personaje");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Error en la solicitud");
    }
}

// Llama a la función para obtener y mostrar un personaje aleatorio
getAleatorio();
