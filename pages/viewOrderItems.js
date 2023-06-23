import renderToDOM from '../utils/renderToDOM';

const viewOrderItems = (array) => {
  let domString = '';
  console.warn(array);
  array.forEach((items) => {
    domString += `
      <div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${items.item_name}</h5>
           <h6 class="card-subtitle mb-2 text-body-secondary">${items.item_price}</h6>
            <a href="#" id="edit-item-btn--${items.firebaseKey}" class="card-link">Edit Item</a>
            <a href="#" id="delete-item-btn--${items.firebaseKey}" class="card-link">Delete Item</a>
        </div>
</div>`;
  });
  renderToDOM('#view', domString);

  const btnString = `<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button>
  <button class="btn btn-danger btn-lg mb-4" id="payment-btn">Go To Payment</button>
  `;

  renderToDOM('#order-item-btns', btnString);
};

export default viewOrderItems;
