import { signOut } from '../utils/auth';

const logoutButton = () => {
  const domString = '<button id="sign-out-button" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#sign-out-button').addEventListener('click', signOut);
};

export default logoutButton;
