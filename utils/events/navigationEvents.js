import { showOrders } from '../../pages/orders';
import { getOrders } from '../../api/orderData';

const navigationEvents = (user) => {
// All Orders
  document.querySelector('#viewOrders').addEventListener('click', () => {
    getOrders(user.uid).then(showOrders);
  });
};

export default navigationEvents;
