import firebase from 'firebase/app';
import 'firebase/auth';
// import logoutButton from '../components/logoutButton';
import client from './client';
import loginPage from '../pages/loginPage';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.warn(user);
      startApp(user);
    } else {
      // person is NOT logged in
      loginPage();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
