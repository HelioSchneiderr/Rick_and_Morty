
fetch(`https://rickandmortyapi.com/api/character`,{
    method: `GET`
})
.then(response => response.json())
.then(function(json){
    const conteiner = document.getElementById(`conteiner`);
    const img = document.getElementById(`imagem`);
    const nome = document.getElementById(`nome`);
    const pVivoMorto = document.getElementById(`vivo-morto`);

    json.results.map(function(results){
        const div = document.createElement(`div`)
        conteiner.appendChild(div);

        //Imagens da Api
        const imagemHtml = document.createElement(`img`);
        imagemHtml.setAttribute(`src`, `${results.image}`);
        imagemHtml.setAttribute(`class`, `cards`);
        
        //Estilos
        imagemHtml.style.width = "200px"
        imagemHtml.style.height = "200px"
        imagemHtml.style.borderRadius = "60px"
        imagemHtml.style.boxShadow = "0px 100px 3px 0px rgba(0,0,0,0.38)"
        div.appendChild(imagemHtml);

        const nomeHtml = document.createElement(`p`);
        nomeHtml.setAttribute(`class`, `nomes`);
        div.appendChild(nomeHtml);

        if(results.name.length >= 10){
            nomeHtml.style.maxWidth=`200px`
        }
        nomeHtml.innerHTML = `Nome: ${results.name}`;
        nomeHtml.style.padding= "10px"
        

        const vivoMorto = document.createElement(`p`);
        vivoMorto.setAttribute(`class`, `vivoMorto`);
        vivoMorto.innerHTML = `Status: ${results.status}`;
        vivoMorto.style.padding= "10px"
        div.appendChild(vivoMorto);

        
    });
});