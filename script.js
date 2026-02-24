const passwordInput = document.getElementById('password');
const mascot = document.getElementById('mascot');

passwordInput.addEventListener('focus', () => {
    mascot.classList.add('hide-eyes');
});

passwordInput.addEventListener('blur', () => {
    mascot.classList.remove('hide-eyes');
});
