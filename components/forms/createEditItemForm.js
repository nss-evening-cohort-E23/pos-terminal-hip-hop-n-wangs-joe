import renderToDOM from '../../utils/renderToDOM';

const createEditItemForm = (obj = {}) => {
  // clearDom();

  const domString = `
  <form id="${obj.firebaseKey ? `update-item-btn--${obj.firebaseKey}` : 'submit-item'}"
  class="mb-4">
    <div class="form-group">
    <label for="title">Item Name</label>
    <input type="text" class="form-control" id="item_name" aria-describedby="itemName" placeholder="Item Name" value="${obj.item_name || ''}" required>
  </div>

  <div class="form-group">
      <label for="description">Item Price</label>
      <textarea class="form-control" placeholder="Item Price" id="item_price" style="height: 100px">${obj.item_price || ''}</textarea>
      
      <button type="submit" class="btn btn-primary">Submit Item</button>
  </div>
  `;
  renderToDOM('#form-container', domString);
};

export default createEditItemForm;
