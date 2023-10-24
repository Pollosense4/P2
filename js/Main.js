function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'Webdev' && password == '1234'){
        window.location.assign("S1.html");
        alert("Login")
    }
}