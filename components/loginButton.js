import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const button = document.createElement('button');
  button.id = 'google-auth';
  button.className = 'btn btn-danger';
  button.textContent = 'GOOGLE LOGIN';
  button.addEventListener('click', signIn);

  return button;
};

export default loginButton;
