const clearDom = () => {

  document.querySelector('#navigation').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#createEditOrderForm').innerHTML = '';
  document.querySelector('#createEditItemForm').innerHTML = '';
  document.querySelector('#closeOrderForm').innerHTML = '';
};

export default clearDom;
