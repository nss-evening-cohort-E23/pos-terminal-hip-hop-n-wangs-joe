import { getOrderItems, getSingleOrder } from './orderData';

// merged promise for getting order items EC
const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orders) => {
    getOrderItems(orders.firebaseKey)
      .then((item) => resolve({ ...orders, item }));
  }).catch(reject);
});

export default getOrderDetails;
