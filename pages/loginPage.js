import loginButton from '../components/loginButton';
import renderToDOM from '../utils/renderToDom';

const loginPage = () => {
  const businessName = 'Run-DM-Cheese';

  const domString = `
    <div id="login-page">
      <h2>${businessName}</h2>
      <div id="login-button-container"></div>
    </div>
  `;

  renderToDom('#app', domString);
  const loginButtonContainer = document.querySelector('#login-button-container');
  loginButtonContainer.appendChild(loginButton());
};

export default loginPage;
