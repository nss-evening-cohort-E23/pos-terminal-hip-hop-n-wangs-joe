import createEditOrderForm from '../../components/forms/createEditOrderForm';
import viewOrderItems from '../../pages/viewOrderItems';
import getOrderDetails from '../../api/mergedData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
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

  // click event for order details EC
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('details-orders-btn')) {
      console.warn('clicked order details');
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(viewOrderItems);
    }
  });
};

export default domEvents;
