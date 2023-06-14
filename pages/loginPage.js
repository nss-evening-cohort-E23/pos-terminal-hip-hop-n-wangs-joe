import loginButton from '../components/loginButton';

const loginPage = () => {
  const businessName = 'Run-DM-Cheese';

  const domString = `
  <div id="login-page>
  <h2>${businessName}</h2>
  <div>${loginButton}</div>
  </div>`;

  renderTodom('#app,', domString);
};

export default loginPage;
