import { createOrder, getOrders, updateOrder } from '../../api/orderData';
import { showOrders } from '../../pages/orders';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', async (e) => {
    e.preventDefault();

    if (e.target.id === 'orderForm' && e.submitter.id === 'submitOrder') {
      console.warn('submit order clicked');
      const newOrderPayload = {
        order_name: document.querySelector('#order_name').value,
        customer_phone: document.querySelector('#customer_phone').value,
        customer_email: document.querySelector('#customer_email').value,
        order_type: document.querySelector('#selected_order_type').value, // Use the correct ID here
        uid: user.uid,
        date: new Date(),
      };
      console.warn(newOrderPayload);
      createOrder(newOrderPayload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(showOrders);
          // eslint-disable-next-line no-undef
          const modal = bootstrap.Modal.getInstance(document.querySelector('#myModal'));
          modal.hide();
        });
      });
    }
  });

  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-order')) {
      // console.warn('edit order clicked');
      const [, firebaseKey] = e.target.id.split('--');
      // console.warn(firebaseKey);
      const updateOrderPayload = {
        order_name: document.querySelector('#order_name').value,
        customer_phone: document.querySelector('#customer_phone').value,
        customer_email: document.querySelector('#customer_email').value,
        order_type: document.querySelector('#selected_order_type').value, // Use the correct ID here
        firebaseKey,
        uid: user.uid,
      };
      updateOrder(updateOrderPayload).then(() => {
        getOrders(user.uid).then(showOrders);
        // eslint-disable-next-line no-undef
        const modal = bootstrap.Modal.getInstance(document.querySelector('#myModal'));
        modal.hide();
      });
    }
  });
};

export default formEvents;
