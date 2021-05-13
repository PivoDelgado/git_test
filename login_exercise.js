let userName = 'John';
let userNamePass = 'hi';
let adminLogin = 'Admin';
let adminLoginPass = 'bye';
let signIn = null; 

signIn = window.prompt("What\'s your username?");

if (signIn === '' || null){
    alert('Canceled');
};

if (signIn === userName){
    signInPass = window.prompt(`Hi ${signIn}, what\'s your password?`);
    if (signInPass === userNamePass){
        alert(`Loggin in, ${userName}`);
    } else {
        alert("Wrong password");
    };
};

if (signIn === adminLogin){
    signInPass = window.prompt(`Hi ${signIn}, what\'s your password?`);
    if (signInPass === adminLoginPass){
        alert(`Loggin in, ${adminLogin}`);
    } else if (signIn === ' ' || null) {
        alert("Canceled");
    } else {
        alert('Wrong password');
    };
};