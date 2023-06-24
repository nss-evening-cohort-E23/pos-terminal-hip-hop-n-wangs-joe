import renderToDOM from '../utils/renderToDOM';

const viewOrderItems = (array) => {
  // clearDom();
  let totalPrice = 0;
  let domString = '';
  array.forEach((item) => {
    totalPrice += item.item_price;
    domString += `
      <div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${item.item_name}</h5>
           <h6 class="card-subtitle mb-2 text-body-secondary">${item.item_price}</h6>
            <button id="edit-item-btn--${item.firebaseKey}">Edit Item</button>
            <button id="delete-item-btn--${item.firebaseKey}">Delete Item</button>
        </div>
      </div>`;
  });

  domString += `<h5 class="total-order-price">Order Total: ${totalPrice}</h5>`;

  renderToDOM('#view', domString);

  const btnString = `<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button>
  <button class="btn btn-danger btn-lg mb-4" id="payment-btn">Go To Payment</button>
  `;

  renderToDOM('#order-item-btns', btnString);
};

export default viewOrderItems;
