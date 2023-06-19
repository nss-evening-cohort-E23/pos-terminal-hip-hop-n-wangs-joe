import renderToDOM from '../utils/renderToDOM';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDOM('#view', domString);
};

const showOrders = (array) => {
  let domString = '';
  array.forEach((orders) => {
    domString += `
    <div class="card" style="width: 25rem;">
    <div class="card-body">
      <h5 class="order-status">Order Status: ${orders.order_status}</h5>
      <p class="customer-phone-num">Customer Phone #: ${orders.customer_phone}</p>
      <p class="customer-email">${orders.customer_email}</p>
      <h5 class="order-type">Order Type: ${orders.order_type}</h5>
    </div>
    <button id="details-order-btn--${orders.firebaseKey}" class="btn btn-dark">Details</button>
    <button id="edit-order--${orders.firebaseKey}" class="btn btn-dark">Edit</button>
    <button id="delete-order-btn--${orders.firebaseKey}" class="btn btn-success">Delete</button>
  </div>`;
  });
  renderToDOM('#view', domString);
};

export { showOrders, emptyOrders };
