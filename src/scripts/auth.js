/* 
const params = new URLSearchParams(location.search)
const username = params.get('username')
const password = params.get('password')

 */


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

        getJson('../json/users.json').then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                alert ('correcto')
                // Datos correctos, redirigir a la página del blog
                window.location.href = '../html/store.html';
            } else {
                alert('incorrecto')
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
