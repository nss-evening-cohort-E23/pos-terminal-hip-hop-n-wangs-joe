import { showOrders } from '../../pages/orders';
import { getOrders } from '../../api/orderData';

const navigationEvents = (user) => {
  // view Orders
  const viewOrdersNav = document.querySelector('#viewOrders');
  viewOrdersNav.addEventListener('click', () => {
    getOrders(user.uid).then(showOrders);
  });
};

export default navigationEvents;
