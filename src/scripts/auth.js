async function getJson(url) {
    const response = await fetch(url);
    const users = await response.json();
    return users

}

setTimeout(() => {
    if (window.location.pathname.endsWith('auth.html')) {
        const params = new URLSearchParams(window.location.search);
        const username = params.get('username');
        const password = params.get('password');
        const desplazamiento = 3

        getJson('../json/users.json').then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                //Guardar credenciales en localStorage
                let passwordEncriptada = encriptar(password, desplazamiento);
                localStorage.setItem('username', username);
                localStorage.setItem('password', passwordEncriptada);

                // Datos correctos, redirigir a la página del blog
                window.location.href = '../html/store.html';
            } else {
                alert('Credenciales incorrectas')
                // Datos incorrectos, redirigir de nuevo al login
                window.location.href = 'login.html?error=true';
            }
        })
            .catch(error => {
                console.error('Error al obtener los datos del archivo JSON:', error);
            });
    }
}, 2500);

// Mostrar mensaje de error si hay un error en la URL
const params = new URLSearchParams(window.location.search);
if (params.get('error')) {
    document.getElementById('errorMessage').textContent = 'Nombre de usuario o contraseña incorrectos.';
}


//muestra en consola las credenciales guardadas
const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');

if (storedUsername && storedPassword) {
    console.log('Credenciales guardadas en Local Storage:');
    console.log('Username:', storedUsername);
    console.log('Password:', storedPassword);
} else {
    console.log('No hay credenciales guardadas en Local Storage.');
}


// Función para encriptar la contraseña
function encriptar(password, desplazamiento) {
    let resultado = '';
    for (let i = 0; i < password.length; i++) {
        let char = password.charCodeAt(i);
        resultado += String.fromCharCode(char + desplazamiento);
    }
    return resultado;
}

