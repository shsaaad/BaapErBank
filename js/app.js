// SiGN IN JS 
const signInBtn = document.getElementById('submit_btn');
signInBtn.onclick = function() {
    const userEmail = document.getElementById('email');
    const userEmailValue = userEmail.value;
    const userPAssword = document.getElementById('password');
    const userPasswordValue = userPAssword.value;
    console.log(userEmailValue, userPasswordValue);

    //verify e-mail and password

    if ( userEmailValue === 'shmahee118@gmail.com' && userPasswordValue === "0101") {
        window.location.pathname = './pages/home.html';
    } else {
        alert("Invalid User");
    }

}