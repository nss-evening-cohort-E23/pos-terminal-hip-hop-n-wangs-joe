import renderToDOM from '../utils/renderToDOM';
import { getOrders } from '../api/orderData';
import { showOrders } from './orders';

const welcomePage = (user) => {
  const domString = `
  <h1 class="welcome-text">Welcome ${user.displayName}!</h1>
    <div class="welcome-buttons">
      <button type="button" class="btn view-orders-btn btn-primary" id="viewOrdersWelcome">View Orders</button>
      <button type="button" class="btn create-order-btn btn-primary" id="createOrderWelcome">Create an Order</button>
      <button type="button" class="btn view-revenue-btn btn-primary" id="viewRevenueWelcome">View Revenue</button>
    </div>
  `;
  renderToDOM('#view', domString);

  // click event for view orders welcome page
  const viewOrdersWelcome = document.querySelector('#viewOrdersWelcome');
  viewOrdersWelcome.addEventListener('click', () => {
    getOrders(user.uid).then(showOrders);
  });
};
export default welcomePage;
