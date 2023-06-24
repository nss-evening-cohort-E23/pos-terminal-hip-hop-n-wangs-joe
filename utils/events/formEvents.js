import {
  createOrder, getOrderItems, getOrders, updateItem, updateOrder, createItem
} from '../../api/orderData';
import { showOrders } from '../../pages/orders';
import viewOrderItems from '../../pages/viewOrderItems';
// import viewOrderItems from '../../pages/viewOrderItems';

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

  // click even for submitting new item EC
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-item')) {
      const payload = {
        item_name: document.querySelector('#item_name').value,
        item_price: document.querySelector('#item_price').value,
        orderId: 109,
        uid: user.uid
      };
      console.warn('CLICKED SUBMIT ITEM', payload);
      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItem(patchPayload).then(() => {
          getOrderItems(user.uid).then(viewOrderItems);
        });
      });
    }
  });

  // click event for submitting an edited item EC
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        item_name: document.querySelector('#item_name').value,
        // item_id: document.querySelector('#item_id').value,
        item_price: document.querySelector('#item_price').value,
        orderId: 109,
        firebaseKey,
        uid: user.uid,
      };
      updateItem(payload).then(() => {
        getOrderItems(user.uid).then(viewOrderItems);
      });
    }
  });
};

export default formEvents;
