let registroUsuario = async () => {
    const user = {
        name: document.getElementById('nombre').value,
        last_name: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        password: document.getElementById('contraseña').value,
        pais: document.getElementById('pais').value
    }


    console.log(user);

    let res = await fetch("http://localhost:3000/views/Inc_03/", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
    });

    let resjson = await res.json();

    console.log(resjson);
    alert("Sucess!")

    window.location.href = '../Inc_01_04/index.html'
}