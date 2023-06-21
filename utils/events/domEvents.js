import { deleteOrder, getOrders } from '../../api/orderData';
import createEditOrderForm from '../../components/forms/createEditOrderForm';
import { showOrders } from '../../pages/orders';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', async (e) => {
    if (e.target.id === 'createOrderWelcome') {
      console.warn('clicked create order');
      createEditOrderForm();
    }
  });
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id === 'createOrderNav') {
      console.warn('clicked create order');
      createEditOrderForm();
    }
  });
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(() => {
          getOrders(`${user.uid}`).then((orders) => {
            showOrders(orders);
          });
        });
      }
    }
  });
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-order')) {
      console.warn('edit order clicked');
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      createEditOrderForm(firebaseKey);
    }
  });
};

export default domEvents;
