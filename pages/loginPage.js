import loginButton from '../components/loginButton';
import renderToDOM from '../utils/renderToDom';

const loginPage = () => {
  const businessName = 'Run-DM-Cheese';

  const domString = `
  <div id="login-page>
  <h2>${businessName}</h2>
  <div>${loginButton}</div>
  </div>`;

  renderToDOM('#app', domString);
};

export default loginPage;
