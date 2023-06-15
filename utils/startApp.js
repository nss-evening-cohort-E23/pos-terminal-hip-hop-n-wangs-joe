import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import welcomePage from '../pages/welcomePage';
import domEvents from './events/domEvents';
import formEvents from './events/formEvents';
// import navigationEvents from './events/navigationEvents';

const startApp = () => {
  domBuilder();
  welcomePage();
  domEvents();
  formEvents();
  logoutButton();
  // navigationEvents();
};

export default startApp;
