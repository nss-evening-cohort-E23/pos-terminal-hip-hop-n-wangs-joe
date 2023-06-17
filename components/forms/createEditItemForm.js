import renderToDOM from '../../utils/renderToDOM';

const createEditItemForm = (obj = {}) => {
  // clearDom();

  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'add-item'}"
  class="mb-4">
    <div class="form-group">
    <label for="title">Item Name</label>
    <input type="text" class="form-control" id="itemName" aria-describedby="itemName" placeholder="Item Name" value="${obj.item_name || ''}" required>
  </div>
  <div class="form-group">
      <label for="description">Item Price</label>
      <textarea class="form-control" placeholder="Item Price" id="itemPrice" style="height: 100px">${obj.item_price || ''}</textarea>
  </div>
  `;
  renderToDOM('#form-container', domString);
};

export default createEditItemForm;
