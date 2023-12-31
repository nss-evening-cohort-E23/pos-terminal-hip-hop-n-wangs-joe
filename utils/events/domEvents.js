import viewOrderItems from '../../pages/viewOrderItems';
import createEditOrderForm from '../../components/forms/createEditOrderForm';
import {
  deleteOrder, getOrderItems, getOrders, getSingleOrder, getSingleItem
} from '../../api/orderData';
import { showOrders } from '../../pages/orders';
import createEditItemForm from '../../components/forms/createEditItemForm';
import revenuePage from '../../pages/revenuePage';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', async (e) => {
    if (e.target.id === 'createOrderWelcome') {
      console.warn('clicked create order');
      createEditOrderForm();
    }
  });
  // click event for order details EC
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('details-order-btn')) {
      console.warn('clicked order details');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey)
        .then((order) => getOrderItems(order.orderId))
        .then(viewOrderItems);
    }
  });
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        console.warn(e.target.id.split('--'));
        // eslint-disable-next-line camelcase
        const [, orderId] = e.target.id.split('--');
        deleteOrder(orderId).then(() => {
          getOrders(user.uid).then((orders) => {
            showOrders(orders, orderId);
          });
        });
      }
    }
  });
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-order')) {
      console.warn('edit order clicked');
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      createEditOrderForm({ firebaseKey });
    }

    if (e.target.id === 'viewRevenueWelcome') {
      getOrders(user.uid).then((orders) => {
        revenuePage(orders);
      });
    }
  });

  // edit item form populates when you click the edit button EC THIS GETS THE FORM BUT IT DOESNT HAVE PREFILLED DATA AND SUBMITTING ADDS A NEW ITEM DOES NOT UPDATE EXISTING ITEM
  /* document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('update-item-btn')) {
      console.warn('edit item clicked');
      const [, firebaseKey] = e.target.id.split('--');
      createEditItemForm({ firebaseKey });
    }
  }); */

  // edit item form populates when you click edit tem
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-item-btn')) {
      console.warn('clicked update item button');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => createEditItemForm(itemObj, user));
    }
  });

  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-item-btn')) {
      console.warn('add item button clicked');
      createEditItemForm();
    }
  });
};
export default domEvents;
