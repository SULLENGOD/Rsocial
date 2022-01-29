const url = "https://randomuser.me/api/";

const getDatos = async () => {
    try{
        let userParse = JSON.parse(localStorage.getItem('userData'))
        console.log(userParse)

        const respuesta = await fetch(url);
        const post = await respuesta.json();
    
        let nombre = '<h1 class="Nombre"></h1>';
        nombre += `<h1 class="Nombre">${post.results[0].name.first} ${post.results[0].name.last}</h1>`;
        document.getElementById("Nombre").innerHTML = nombre;
    
        let imagen = "<img></img>";
        imagen += `<img class="fotoPerfil" src=${post.results[0].picture.medium} alt="Perfil"></img>`;
        document.getElementById("ImagenPerfil1").innerHTML = imagen;
    } catch(error) {

        console.log('error');
    }
};

getDatos();