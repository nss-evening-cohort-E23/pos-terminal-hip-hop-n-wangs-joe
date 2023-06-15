import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from './events/domEvents';
import formEvents from './events/formEvents';
import welcomePage from '../pages/welcomePage';
// import navigationEvents from './events/navigationEvents';



const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  welcomePage(user);
  navBar(user);
  formEvents(user);
  logoutButton();
  welcomePage(user);
  // navigationEvents();
};

export default startApp;
