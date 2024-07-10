document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const acceptTerms = document.getElementById('acceptTerms');

    if (acceptTerms) {
        acceptTerms.addEventListener('change', function () {
            loginButton.disabled = !acceptTerms.checked;
        }); 
        }
     });
