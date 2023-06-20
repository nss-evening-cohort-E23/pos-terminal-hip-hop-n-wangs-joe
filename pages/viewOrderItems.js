import renderToDOM from '../utils/renderToDOM';

const viewOrderItems = (obj) => {
  // clearDom();

  const domString = `
      <div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${obj.item_name}/h5>
           <h6 class="card-subtitle mb-2 text-body-secondary">${obj.item_price}</h6>
            <a href="#" id="update-item-btn--${obj.firebaseKey}" class="card-link">Edit Item</a>
            <a href="#" id="delete-item-btn--${obj.firebaseKey}" class="card-link">Delete Item</a>
        </div>
</div>`;

  renderToDOM('#view', domString);

  const btnString = `<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button>
  <button class="btn btn-danger btn-lg mb-4" id="add-item-btn">Delete Item</button>
  `;

  renderToDOM('#order-item-btns', btnString);
};

export default viewOrderItems;
