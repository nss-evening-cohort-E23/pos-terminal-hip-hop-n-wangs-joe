import renderToDOM from '../utils/renderToDOM';

const revenuePage = (array) => {
  let totalRev = 0;
  let totalTip = 0;
  let totalPhone = 0;
  let totalWalkIn = 0;
  let totalCash = 0;
  let totalCard = 0;

  array.forEach((orders) => {
    totalRev += (parseFloat(orders.order_amount) + parseFloat(orders.tip_amount));
    totalTip += orders.tip_amount;
    if (orders.payment_type === 'cash') {
      totalCash += 1;
    } else {
      totalCard += 1;
    }
    if (orders.order_type === 'Phone') {
      totalPhone += 1;
    } else {
      totalWalkIn += 1;
    }
  });

  const domString = `
  <h1 class="revenue-text">Revenue</h1>
  <h2 class="total-revenue-text">Total Revenue: $${totalRev.toFixed(2)}</h2>
  <div class="totals">
    <p>Total Tips: $${totalTip.toFixed(2)}</p>
    <p>Total Call-In Orders: ${totalPhone}</p>
    <p>Total Walk-In Orders: ${totalWalkIn}</p>
  </div>
  <div class="payment-types">
    <p>Payment Types</p>
    <p>Cash: ${totalCash}</p>
    <p>Credit: ${totalCard}</p>
  </div>
  `;
  renderToDOM('#view', domString);
};

export default revenuePage;
