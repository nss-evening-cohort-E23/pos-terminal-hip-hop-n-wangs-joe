import loginButton from '../components/loginButton';
import renderToDOM from '../utils/renderToDOM';

const loginPage = () => {
  const businessName = 'Run-DM-Cheese';
  const domString = `
    <div id="login-page">
      <h2>${businessName}</h2>
      <div id="login-button-container"></div>
    </div>
  `;

  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = '';

  renderToDOM('#app', domString);
  const loginButtonContainer = document.querySelector('#login-button-container');
  loginButtonContainer.appendChild(loginButton());

  const signOutButton = document.querySelector('#sign-out-button');
  if (signOutButton) {
    signOutButton.remove();
  }
};

export default loginPage;
