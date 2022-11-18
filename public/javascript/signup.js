async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
            document.querySelector('#modalRegisterForm').modal('hide')
            return

        } else {
            alert(response.statusText);

        }
    }
}

async function navigateBackHome() {
    window.location.href = "/";
}

document.querySelector('#signupform').addEventListener('submit', signupFormHandler);
document.querySelector('#close-signup').addEventListener('click', navigateBackHome);