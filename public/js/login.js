const loginFormHandler = async (event) => {
     event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(email && password) {
        const response = await fetch( '/api/users/login',{
            method: 'POST',
            body: JSON.stringify({ email, password }),
             headers: { 'Content-type': 'application/json' },
    });
    console.log(response + 'from login handler')
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
  }
}
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);


 