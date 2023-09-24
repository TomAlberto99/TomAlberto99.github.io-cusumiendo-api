
export async function getCharacter (done){
    const results = fetch("https://rickandmortyapi.com/api/character");
    results
    .then(response => response.json())
    .then(data =>{
        done(data)
    });
}
getCharacter(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/ `
        <article>
        <div class="image-container">
            <img class="card" src="${personaje.image}" alt="Personaje">
        </div>
        <h2 class= "text-target" >${personaje.name}</h2>
        <span class ="text-target" > ${personaje.status}</span>
    </article> 
    `);
    const main = document.querySelector("main");
    main.append(article);        
        
    });
});
