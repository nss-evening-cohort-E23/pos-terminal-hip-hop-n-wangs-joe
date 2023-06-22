import renderToDOM from '../utils/renderToDOM';

const revenuePage = (array) => {
  let totalRev = 0;
  let totalTip = 0;
  let totalPhone = 0;
  let totalWalk = 0;
  let totalCash = 0;
  let totalCard = 0;
  // Filter closed orders
  const closedOrders = array.filter((orders) => orders.order_status === 'closed');

  closedOrders.forEach((orders) => {
    totalRev += (orders.order_amount + orders.tip_amount);
    totalTip += orders.tip_amount;

    if (orders.payment_type === 'cash') {
      totalCash += 1;
    } else {
      totalCard += 1;
    }

    if (orders.order_type === 'phone') {
      totalPhone += 1;
    } else {
      totalWalk += 1;
    }
  });

  const domString = `
  <h1 class="revenue-text">Revenue</h1>
  <h2 class="total-revenue-text">Total Revenue: $ ${totalRev}</h2>
  <div class="totals">
    <p>Total Tips: $ ${totalTip}</p>
    <p>Total Call-In Orders: ${totalPhone}</p>
    <p>Total Walk-In Orders: ${totalWalk}</p>
  </div>
  <div class="payment-types">
    <p>Payment Types</p>
    <p>Cash: $ ${totalCash}</p>
    <p>Card: $ ${totalCard}</p>
  </div>
  `;
  renderToDOM('#view', domString);
};
export default revenuePage;
