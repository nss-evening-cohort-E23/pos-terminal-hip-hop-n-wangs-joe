const clearDom = () => {
  document.querySelector('#createEditOrderForm').innerHTML = '';
  document.querySelector('#createEditItemForm').innerHTML = '';
  document.querySelector('#closeOrderForm').innerHTML = '';
};

export default clearDom;
