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
                alert('Credenciales correctas')

                //Guardar credenciales en localStorage


                localStorage.setItem('user', username)
                localStorage.setItem('session', session)

/*                 setSession(username, makeSession({ username, password }))
 */
                makeSession(username, password)


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




//---------------------------------------------------------------------------------ENCRIPTAR--------------------------------------------------------------------------------------------------------


function makeSession(user) {
    // Convierte el nombre de usuario y la contraseña en una cadena única
    return (user.username + user.password).split('').reduce(
        // Calcula un número basado en los códigos de caracteres de cada letra
        (acum, char, idx) => acum + (idx + 1) * char.charCodeAt(0), 0
    ).toString(36)  // Convierte el resultado en una cadena en base 36
    console.log(makeSession(user));
}


//almacena session y username en localStorage
function setSession(username, session) {
    localStorage.setItem('user', username)
    localStorage.setItem('session', session)
}




/* //llamar a encriptar y guardar credenciales
setSession(username, makeSession({ username, password }))
 */

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------







