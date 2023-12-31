import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import domEvents from './events/domEvents';
import navBar from '../components/shared/navBar';
import navigationEvents from './events/navigationEvents';
import formEvents from './events/formEvents';
import welcomePage from '../pages/welcomePage';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  welcomePage(user);
  navBar();
  navigationEvents(user);
  formEvents(user);
  logoutButton();
};

export default startApp;
