// // toggle password visibility
// const toggleBtn = document.getElementById('togglePass');
// const passwordInput = document.getElementById('password');

// toggleBtn.addEventListener('click', () => {
//   if (passwordInput.type === 'password') {
//     passwordInput.type = 'text';
//   } else {
//     passwordInput.type = 'password';
//   }
// });

// // check inputs are not empty before "logging in"
// const form = document.getElementById('loginForm');
// const matricInput = document.getElementById('matric');
// const matricError = document.getElementById('matricError');
// const passwordError = document.getElementById('passwordError');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   let hasError = false;

//   if (matricInput.value.trim() === '') {
//     matricInput.classList.add('input-error');
//     matricError.classList.add('visible');
//     hasError = true;
//   } else {
//     matricInput.classList.remove('input-error');
//     matricError.classList.remove('visible');
//   }

//   if (passwordInput.value.trim() === '') {
//     passwordInput.classList.add('input-error');
//     passwordError.classList.add('visible');
//     hasError = true;
//   } else {
//     passwordInput.classList.remove('input-error');
//     passwordError.classList.remove('visible');
//   }

//   if (hasError) {
//     return;
//   }

//   // fields are filled, hook up real login here
// }); 