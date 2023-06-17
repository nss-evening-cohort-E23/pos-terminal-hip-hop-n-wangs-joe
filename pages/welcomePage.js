import renderToDOM from '../utils/renderToDOM';

const welcomePage = (user) => {
  const domString = `
  <h1 class="welcome-text">Welcome ${user.displayName}!</h1>
    <div class="welcome-buttons">
      <button type="button" class="btn view-orders-btn btn-primary" id="view-orders-welcome">View Orders</button>
      <button type="button" class="btn create-order-btn btn-primary" id="createOrderWelcome">Create an Order</button>
      <button type="button" class="btn view-revenue-btn btn-primary">View Revenue</button>
    </div>
  `;
  renderToDOM('#view', domString);
};
export default welcomePage;
