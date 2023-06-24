import renderToDOM from '../utils/renderToDOM';

const viewOrderItems = (array) => {
  // clearDom();
  let totalPrice = 0;
  let domString = '';
  if (array.length === 0) {
    domString = '<p>No items added</p>';
  } else {
    array.forEach((items) => {
      totalPrice += parseFloat(items.item_price);
      domString += `
      <div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${items.item_name}</h5>
           <h6 class="card-subtitle mb-2 text-body-secondary">${items.item_price}</h6>
            <a href="#" id="update-item-btn--${items.firebaseKey}" class="card-link">Edit Item</a>
            <a href="#" id="delete-item-btn--${items.firebaseKey}" class="card-link">Delete Item</a>
        </div>
      </div>`;
    });
  }

  if (Number.isNaN(totalPrice)) {
    totalPrice = 0;
  }
  domString += `<h5 class="total-order-price">Order Total: $${totalPrice.toFixed(2)}</h5>`;

  renderToDOM('#view', domString);

  const btnString = `<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button>
  <button class="btn btn-danger btn-lg mb-4" id="delete-item-btn">Delete Item</button>
  `;

  renderToDOM('#order-item-btns', btnString);
};

export default viewOrderItems;
