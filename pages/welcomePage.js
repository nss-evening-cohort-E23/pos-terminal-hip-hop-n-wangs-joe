import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const welcomePage = () => {
  clearDom();

  const domString = `
  <h1 class="welcome-text">Welcome User!</h1>
    <div class="welcome-buttons">
      <button type="button" class="btn view-orders-btn btn-primary">View Orders</button>
      <button type="button" class="btn create-order-btn btn-primary">Create an Order</button>
      <button type="button" class="btn view-revenue-btn btn-primary">View Revenue</button>
    </div>
  `;
  renderToDOM('#app', domString);
};
export default welcomePage;

welcomePage();
