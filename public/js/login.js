const loginFormHandler = async (event) => {
 console.log('Click"')
     event.prevent.default();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
console.log (email);
    if(email && password) {
        const response = await fetch( '/api/user/login',{
            method: 'POST',
            body: JSON.stringify({ eamil, password }),
             headers: { 'Content-type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/views/dashboard.handlebars');
    } else {
        alert(response.statusText)
    }
  }
}
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);


 