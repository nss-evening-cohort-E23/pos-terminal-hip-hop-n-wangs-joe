import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import domEvents from './events/domEvents';
import formEvents from './events/formEvents';
// import navigationEvents from './events/navigationEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  logoutButton();
  // navigationEvents();
};

export default startApp;
